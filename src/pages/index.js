import React, { useRef, useState } from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import './home.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '../components/button/button';
import { SiJavascript, SiTypescript, SiRubyonrails, SiFirebase, SiMongodb, SiExpress, SiNextdotjs, SiNuxtdotjs, SiBitbucket } from 'react-icons/si';
import { DiRubyRough, DiSass, DiPython, DiCss3, DiReact, DiJqueryLogo, DiNodejsSmall, DiPostgresql, DiMysql } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

const IndexPage = () => {
  const [expand, setExpand] = useState(false);
  const [selectedTab, setSelectedTab] = useState("leap");
  
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (e) => {
    setExpand(!expand);
  }

  const handleScroll = (ref) => {
    let el;
    if (ref === "intro") el = introRef;
    if (ref === "about") el = aboutRef;
    if (ref === "projects") el = projectsRef;
    if (ref === "experience") el = experienceRef;
    if (ref === "contact") el = contactRef;

    el.current?.scrollIntoView({ behavior: 'smooth', margin: '100px' });
  }

  return (
    <Layout 
      pageTitle="home" 
      className="home-page" 
      homeNav={true} 
      handleScroll={handleScroll}
    >
      <div className="body">

        <div className="intro section" ref={introRef}>
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
          <Button 
            label="Learn more about me" 
            className="learn-more" 
            onClick={() => handleScroll("about")}
          />
        </div>

        <div className="about-me section" ref={aboutRef}>
          <h2 className="heading">
            <span>01.</span>
            About Me
          </h2>
          <p>
            Hello! My name is Edward, and I have a passion for creating visions of highly interactive and functional web apps.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur ipsam ipsum culpa illo, quo eligendi, in soluta nobis corporis quam sit repellendus aliquid officiis molestiae vel, perferendis sequi reprehenderit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad facere officiis, fugit neque, commodi amet perspiciatis modi cupiditate dolorem voluptatibus animi accusamus quaerat est atque adipisci blanditiis fugiat veritatis.
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

        <div className="projects section" ref={projectsRef}>
          <h2 className="heading">
            <span>02.</span>
            A few of my creations
          </h2>
          <div className="project left">
            <div className="description">
              <h3>
                <a target="_blank" href="https://wizzy-wig.netlify.app/">
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
                <a target="_blank" href="https://tonguist.netlify.app/">
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
                <a target="_blank" href="https://the-brain-train.web.app/">
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
                <a target="_blank" href="https://ana-anecdotal.netlify.app/">
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

        <div className="experience section" ref={experienceRef}>
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
              <p>
              { selectedTab === "leap" ? 
                "Nov 2022 - Mar 2023"
                : 
                "Jun 2022 - Sep 2022"
              }
              </p>
              <p>
              { selectedTab === "leap" ? 
                "A developer for the global marketing team, responsible for the development of sites under all global domains. We employed a strong focus on component reusability, using isolated components driven development through the development of our UI component library based on our design system, and having everything linked to a headless CMS for easy access to our designers."
                : 
                "Accumulating possibly over 600 hours of coding over 12 weeks, this coding bootcamp provided the intense and immersive environment needed for me to maximise the potential of my deep dive into the world of programming. We went through full-stack development, learning the most used and modern frameworks, and were taught the best coding principles and patterns to follow to become good developers in any field of programming."
              }
              </p>
              { selectedTab === "leap" ? 
              <p>
                Tech: JavaScript/TypeScript, Vue/Nuxt, Storybook, Storyblok, NPM, SASS
              </p>
              : 
              null
              }
            </div>
            { selectedTab === "leap" ? 
            <StaticImage 
              alt="LEAP Legal Software logo"
              src="../images/leap.jpeg"
              className="logo"
            />
            : 
            <StaticImage 
              alt="General Assembly logo"
              src="../images/general-assembly.webp"
              className="logo"
            />
            }
          </div>
          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <h3>Languages</h3>
            <div className="tech-list">
              <div className="tech">
                <SiJavascript className="icon" />
                <p>JavaScript</p>
              </div>
              <div className="tech">
                <SiTypescript className="icon" />
                <p>TypeScript</p>
              </div>
              <div className="tech">
                <DiRubyRough className="icon" />
                <p>Ruby</p>
              </div>
              <div className="tech">
                <DiPython className="icon" />
                <p>Python</p>
              </div>
              <div className="tech">
                <DiSass className="icon" />
                <p>SASS</p>
              </div>
            </div>
            <h3>Frameworks / Libraries</h3>
            <div className="tech-list">
              <div className="tech">
                <DiReact className="icon" />
                <p>React</p>
              </div>
              <div className="tech">
                <SiNextdotjs className="icon" />
                <p>Next</p>
              </div>
              <div className="tech">
                <RiVuejsFill className="icon" />
                <p>Vue</p>
              </div>
              <div className="tech">
                <SiNuxtdotjs className="icon" />
                <p>Nuxt</p>
              </div>
              <div className="tech">
                <SiRubyonrails className="icon" />
                <p>Rails</p>
              </div>
              <div className="tech">
                <DiNodejsSmall className="icon" />
                <p>Node</p>
              </div>
              <div className="tech">
                <SiExpress className="icon" />
                <p>Express</p>
              </div>
              <div className="tech">
                <DiJqueryLogo className="icon" />
                <p>jQuery</p>
              </div>
            </div>
            <h3>Databases / Cloud</h3>
            <div className="tech-list">
              <div className="tech">
                <DiPostgresql className="icon" />
                <p>PostgreSQL</p>
              </div>
              <div className="tech">
                <DiMysql className="icon" />
                <p>MySQL</p>
              </div>
              <div className="tech">
                <SiMongodb className="icon" />
                <p>MongoDB</p>
              </div>
              <div className="tech">
                <SiFirebase className="icon" />
                <p>Firebase</p>
              </div>
              <div className="tech">
                <AiFillGithub className="icon" />
                <p>GitHub</p>
              </div>
              <div className="tech">
                <SiBitbucket className="icon" />
                <p>BitBucket</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact section" ref={contactRef}>
          <h3>04. What's next?</h3>
          <h2>Get In Touch</h2>
          <p>
            I'm currently open to new opportunities. My inbox is always open, even just for a chat!
          </p>
          <Button label="Say Hello!" />
          <h4>Designed & Built by Edward Do</h4>
        </div>

      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage