import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import './Home.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '../components/button/button';

const IndexPage = () => {
  const [expand, setExpand] = useState(false);

  const handleClick = (e) => {
    setExpand(!expand);
  }

  return (
    <Layout pageTitle="home" className="home-page">
      <div className="body">

        <div className="intro section">
          <p className="hello">Hi, I'm</p>
          <div className="site-title">
            <div className="title">
              <div className="tag">
                {`<edwardtdo`}
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
          </div>
          <h2 className="i-am">I'm a full-stack software engineer.</h2>
          <p className="brief">
            I'm a passion driven full-stack software engineer, with a knack for problem-solving, a keen eye for developing intuitive user experiences, and an eagerness for feature-building.
          </p>
          <Button label="Learn more about me" className="learn-more" />
        </div>

        <div className="about-me section">
          <h2 className="heading">
            <span>01.</span>
            About Me
          </h2>
          <p>
            Hello! My name is Edward, and I have a passion for creating visions of highly interactive and functional web apps. My interest in web development was initiated in my early childhood days of creating Starcraft maps for local players.
          </p>
          <p>
            After working in Telecommunications for almost 9 years, I decided to pursue my passion for software engineering. In mid-2022, I completed the 3-month Software Engineering Immersive course at General Assembly in Sydney.
          </p>
          <p>
            My experience in leadership and consulting on the client side has helped me develop a unique and holistic perspective on customer experience and effective team communication.
          </p>
          <p>
            I’m currently open to job opportunities so please feel free to email or connect with me via LinkedIn.
          </p>
          <StaticImage
            alt="A picture of me, Edward, at Machu Picchu posing with a thumbs up"
            src="../images/me.jpeg"
            height={200}
            className="me"
          />
        </div>

        <div className="projects section">
          <h2 className="heading">
            <span>02.</span>
            A few of my creations
          </h2>
          <div className="project left">
            <div className="description">
              <h3>
                <a href="https://wizzy-wig.netlify.app/">
                  wizzy-wig
                </a>
              </h3>
              <p>
                An in browser markdown note-taking web app with code block syntax highlighting, a file system, and tab management. Currently a frontend demo. Heavily inspired by Obsidian.
              </p>
              <h4>
                TypeScript, React, Redux, SASS, MaterialUI
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot if wizzy-wig, a note-taking web app using markdown"
              src="../images/wizzy-wig.png"
            />
          </div>

          <div className="project right">
            <div className="description">
              <h3>
                <a href="https://wizzy-wig.netlify.app/">
                  Brain Train
                </a>
              </h3>
              <p>
                A collection of highly interactive brain trainer games made straight out of DOM elements and state management.
              </p>
              <h4>
                TypeScript, React, Redux, SASS, MaterialUI
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot if wizzy-wig, a note-taking web app using markdown"
              src="../images/wizzy-wig.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage