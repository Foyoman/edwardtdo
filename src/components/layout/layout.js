import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
            <Link to="/blog" className="nav-link-text">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="left-overlay overlay">
				<ul>
					<li>
						<a target="_" href="https://github.com/Foyoman">
							<GitHubIcon className="icon" />
						</a>
					</li>
					<li>
						<a target="_" href="https://www.linkedin.com/in/edwardtdo/">
							<LinkedInIcon className="icon" />
						</a>
					</li>
				</ul>
				<div className="left-stem stem" />
			</div>
      <div className="right-overlay overlay">
				<ul>
					<li>
						<a 
              // href="" 
              onClick={() => window.open('mailto:edwardtdo@gmail.com?subject=Hello Edward!&body=What would you like to say?')}
            >
							edwardtdo@gmail.com
						</a>
					</li>
				</ul>
				<div className="right-stem stem" />
			</div>
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout