import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './layout.scss'

const Layout = ({ children, className }) => {
  return (
    <div className={`page ${className}`}>
      <nav>
        <StaticImage
          alt="A picture of Donut, a handsome beagle baby boy"
          src="../../images/donut.jpg"
          height={60}
          className="donut"
        />
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/projects" className="nav-link-text">
              Projects
            </Link>
          </li>
					<li className="nav-link-item">
            <Link to="/blog" className="nav-link-text">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout