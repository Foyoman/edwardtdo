import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, I'm Edward. Welcome to my site! I'm a passion-driven developer currently focused on full-stack web development but with an insatiable interest for all areas of programming :)
      </p>
      <StaticImage
        alt="A picture of me, Edward, at Machu Picchu posing with a thumbs up"
        src="../images/me.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage