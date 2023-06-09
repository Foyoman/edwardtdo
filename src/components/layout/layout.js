import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '../button/button';
import resume from '../../assets/Edward Do, Software Dev.pdf';
import './layout.scss'

const Layout = ({ children, className, homeNav, handleScroll }) => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClicked, setMenuClicked] = useState(false);

  const updateMenu = (e) => {
    e.preventDefault();
    
    if (!menuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setMenuClicked(!menuClicked);
  }

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

  const openEmail = (e) => {
    e.preventDefault();
    window.open('mailto:edwardtdo@gmail.com?subject=Hello Edward!&body=What would you like to say?');
  }

  return (
    <div className={`page ${className}`}>
      <nav>
        <div className="gloss">
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
          <a 
            className='mobile-only burger-menu' 
            href="#" 
            id="burger-menu" 
            onClick={ updateMenu }
          >
            <span className={ burgerClass }></span>
            <span className={ burgerClass }></span>
            <span className={ burgerClass }></span>
          </a>
        </div>
        <div className={`rightside-nav ${ menuClass }`}>
          { homeNav && handleScroll &&
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
        <a 
          href="#" 
          onClick={openEmail}
          className="mobile"
        >
          edwardtdo@gmail.com
        </a>
        <a target="_" href="https://github.com/Foyoman">
          <GitHubIcon className="icon" />
        </a>
        <a target="_" href="https://www.linkedin.com/in/edwardtdo/">
          <LinkedInIcon className="icon" />
        </a>
				<div className="left-stem stem" />
			</div>
      <div className="right-overlay overlay">
        <a 
          href="#" 
          onClick={openEmail}
        >
          edwardtdo@gmail.com
        </a>
				<div className="right-stem stem" />
			</div>
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout