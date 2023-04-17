import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './layout.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Layout = ({ pageTitle, children, className }) => {
  const [expand, setExpand] = useState(false);

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

  const handleClick = (e) => {
    setExpand(!expand);
  }

  return (
    <div className={`container ${className}`}>
			<header className="site-title">
        <div className="title">
          <div className="tag">
            {`<${data.site.siteMetadata.title}`}
            <span className={`closing-tag ${ expand ? 'expanded' : '' }`}>{` />`}</span>
          </div>
          <KeyboardArrowDownIcon className="chevron" onClick={handleClick} />
        </div>
        <div className={`props ${ expand ? 'expanded' : '' }`}>
          <pre>    email="edwardtdo@gmail.com"</pre>
          <pre>    linkedIn="<a href="https://www.linkedin.com/in/edwardtdo">https://www.linkedin.com/in/edwardtdo</a>"</pre>
          <pre>    gitHub="<a href="https://www.github.com/Foyoman">https://www.github.com/Foyoman</a>"</pre>
          {`/>`}
        </div>
			</header>
      <nav>
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
      <main>
        <h1 className="heading" style={{ marginTop: 0 }}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout