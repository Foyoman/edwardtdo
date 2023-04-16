/**
 * @type {import('gatsby').GatsbyConfig}
 */

const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              directory
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    const templatePath =
      node.frontmatter.directory === "blog"
        ? "./src/blog/{mdx.frontmatter__slug}.js"
        : "./src/projects/{mdx.frontmatter__slug}.js";

    createPage({
      path: node.fields.slug,
      component: require.resolve(templatePath),
      context: { slug: node.fields.slug },
    });
  });
};

module.exports = {
  siteMetadata: {
    title: `edwardtdo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ], 
}
