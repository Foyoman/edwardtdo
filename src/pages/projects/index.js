import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
<<<<<<< HEAD
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/projects/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
=======
>>>>>>> 95bca4f (undoing mdx for projects)
    </Layout>
  )
}

<<<<<<< HEAD
export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { page: { eq: "projects" } } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

=======
>>>>>>> 95bca4f (undoing mdx for projects)
export const Head = () => <Seo title="My Projects" />

export default ProjectsPage