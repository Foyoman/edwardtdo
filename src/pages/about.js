import * as React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        I'm currently seeking work in all forms - part-time, full-time, freelance - so if my passion and my drive pique your interest please don't hesitate to reach out to me.
      </p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/edwardtdo">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/Foyoman">GitHub</a>
        </li>
        <li>
          Email: edwardtdo@gmail.com
        </li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage