import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, I'm Edward. Welcome to my site! My two biggest loves in life are my dog Donut, and backpacking!
      </p>
      <StaticImage
        alt="A picture of me, Edward, at Machu Picchu posing with a thumbs up"
        src="../images/me.jpeg"
        height={200}
      />
      <h2 className="heading">Expertise</h2>
      <p>I'm a passion-driven developer currently focused on full-stack web development but with an insatiable interest for all areas of programming :). I'm currently focused on using the most relevant and modern full-stack web dev technologies such as:</p>
      <ul>
        <li>React, Next, Gatsby</li>
        <li>Vue, Nuxt</li>
        <li>Node, Express, MongoDB</li>
        <li>Redux, GraphQL</li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage