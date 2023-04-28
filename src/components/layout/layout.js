import React from 'react';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '../button/button';
import resume from '../../assets/Edward Do, Software Dev.pdf';
import './layout.scss'

const Layout = ({ children, className, homeNav, handleScroll }) => {
  const handleDonut = () => {
    if (homeNav && handleScroll) {
      handleScroll("intro");
    } else {
      navigate("/");
    }
  }

  const openResume = () => {
    window.open(resume, "_blank");
  }

  return (
    <div className={`page ${className}`}>
      <nav>
        <div
          onClick={handleDonut}
          className="donut-container"
        >
          <StaticImage
            alt="A picture of Donut, a handsome beagle baby boy"
            src="../../images/donut.jpg"
            height={40}
            className="donut"
          />
        </div>
        <div className="rightside-nav">
          { homeNav && 
          <div className="section-nav">
            <p onClick={() => handleScroll("about")}>
              <span>01.</span>
              About
            </p>
            <p onClick={() => handleScroll("projects")}>
              <span>02.</span>
              Projects
            </p>
            <p onClick={() => handleScroll("experience")}>
              <span>03.</span>
              Experience
            </p>
            <p onClick={() => handleScroll("contact")}>
              <span>04.</span>
              Contact
            </p>
          </div>
          }
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/blog" className="nav-link-text">
                Blog
              </Link>
            </li>
            <li>
              <Button label="Resume" onClick={openResume} />
            </li>
          </ul>
        </div>
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