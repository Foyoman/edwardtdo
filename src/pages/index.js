import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import './home.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '../components/button/button';

const IndexPage = () => {
  const [expand, setExpand] = useState(false);
  const [selectedTab, setSelectedTab] = useState("leap")

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
                TypeScript, React, Redux, SCSS, MaterialUI
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot of wizzy-wig, a note-taking web app using markdown"
              src="../images/wizzy-wig.png"
              height={300}
            />
          </div>

          <div className="project mobile">
            <div className="description">
              <h3>
                <a href="https://tonguist.netlify.app/">
                  tonguist
                </a>
              </h3>
              <p>
                A flashcards web-app centered around language learning that dynamically tracks daily and weekly progress through intuitive visual cues. Best viewed on mobile.
              </p>
              <h4>
                React, Node, Express, MongoDB, SCSS, MaterialUI
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot of tonguist's dashboard"
              src="../images/tonguist-dash.png"
              height={400}
              className="left mobile-screen"
            />
            <StaticImage 
              alt="A screenshot of tonguist's flashcard"
              src="../images/tonguist-card.jpg"
              height={400}
              className="right mobile-screen"
            />
          </div>

          <div className="project right">
            <div className="description">
              <h3>
                <a href="https://the-brain-train.web.app/">
                  Brain Train
                </a>
              </h3>
              <p>
                A collection of highly interactive brain trainer games made straight out of DOM elements and state management.
              </p>
              <h4>
                React, Firebase, Bootstrap, SCSS
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot of brain-train, a web-app for interactive brain-training games"
              src="../images/brain-train.png"
              height={300}
            />
          </div>

          <div className="project left">
            <div className="description">
              <h3>
                <a href="https://ana-anecdotal.netlify.app/">
                  ana
                </a>
              </h3>
              <p>
                A forum board built with Ruby on Rails that deals with complex database associations. Don't forget to post, comment, follow, and like.
              </p>
              <h4>
                Ruby on Rails
              </h4>
            </div>
            <StaticImage 
              alt="A screenshot of ana, a forum board"
              src="../images/ana.png"
              height={300}
            />
          </div>
        </div>

        <div className="experience section">
          <h2 className="heading">
            <span>03.</span>
            Relevant Experience
          </h2>
          <div className="tabs">
            <div 
              className={`leap tab ${selectedTab === 'leap' ? 'selected': ''}`}
              onClick={() => setSelectedTab("leap")}
            >
              LEAP
            </div>
            <div 
              className={`ga tab ${selectedTab === 'ga' ? 'selected' : ''}`}
              onClick={() => setSelectedTab("ga")}
            >
              General Assembly
            </div>
          </div>
          <div className={`banner ${selectedTab}`}>
            <div className="text-container">
              <h2>
              { selectedTab === "leap" ? 
                "Front-End Web Developer"
                : 
                "General Assembly"
              }
              </h2>
              <h3>
              { selectedTab === "leap" ? 
                "LEAP Legal Software"
                : 
                "Software Engineering Immersive"
              }
              </h3>
              <p>Jun 2022 - Sep 2023</p>
              <p>
              { selectedTab === "leap" ? 
                "A developer for the global marketing team, responsible for the development of sites under all global domains. We employed a strong focus on component reusability, using isolated components driven development through the development of our UI component library based on our design system, and having everything linked to a headless CMS for easy access to our designers."
                : 
                "Accumulating possibly over 600 hours of coding over 12 weeks, this coding bootcamp provided the intense and immersive environment needed for me to maximise the potential of my deep dive into the world of programming. We went through full-stack development, learning the most used and modern frameworks, and were taught the best coding principles and patterns to follow to become good developers in any field of programming."
              }
              </p>
            </div>
            { selectedTab === "leap" ? 
            <StaticImage 
              src="../images/leap.jpeg"
              className="logo"
            />
            : 
            <StaticImage 
              src="../images/general-assembly.webp"
              className="logo"
            />
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage