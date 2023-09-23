import React, { useRef, useState } from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import './home.scss';
import Button from '../components/button/button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiJavascript, SiTypescript, SiRubyonrails, SiFirebase, SiMongodb, SiExpress, SiNextdotjs, SiNuxtdotjs, SiBitbucket, SiTailwindcss, SiHtml5, SiStorybook } from 'react-icons/si';
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

    el.current?.scrollIntoView({ behavior: 'smooth' });
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
          <div className="edward-do">
            Edward Do.
          </div>
          <h2 className="i-am">I'm a full-stack software developer.</h2>
          <p className="brief">
            I'm a passion driven full-stack software developer, meaning I do everything I do in this field for the love I've been fortunate enough to have developed for programming. From self study, to bootcamp courses, to passion projects, to volunteer work, to professional experience, I am always looking to get my grubby hands on code. 
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
            Hello! My name is Edward, and as I've mentioned, I do a lot of things in life out of passion and love. Whether if it's travelling, programming, or taking care of my dog Donut, I can assure you that I do what I do to make my heart happy.
          </p>
          <p>
            I started out in the field of programming out of the natural interest I had for technology since a kid. Naturally, I was a gamer and a tech-head since a wee baby, so new gadgets and tech always fascinated me, and eventually my interest for language learning piqued my curiosity for application development, as I had always looked for the best app to practice with and always wondered how these apps worked under the hood. Gradually getting more into coding, I began self study in early 2022 with MOOC's, documentation, and, of course, YouTube tutorials, then eventually found myself committing to General Assembly's Software Engineering Immersive bootcamp in June, graduating in September of 2022. In November I landed my first role with LEAP Legal Software, left in March (for reasons you can ask me about), spent 5 months in Mexico experimenting with combining my two biggest passions in code and travel, and now I'm here! Hunting my next opportunity while grinding more code and personal projects. 
          </p>
          <p>
            As of the moment, I'm just looking for any opportunity to learn and collaborate with more experienced developers, so please feel free to contact with me through email or LinkedIn!
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
              <a target="_blank" href="https://github.com/Foyoman/wizzy-wig-client" className="icon">
                <GitHubIcon/>
              </a>
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
              <a target="_blank" href="https://github.com/Foyoman/tonguist-client" className="icon">
                <GitHubIcon/>
              </a>
            </div>
            <div className="screenshots">
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
              <a target="_blank" href="https://github.com/Foyoman/brain-train" className="icon">
                <GitHubIcon/>
              </a>
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
                <a target="_blank" href="https://github.com/Foyoman/ana">
                  ana
                </a>
              </h3>
              <p>
                A forum board built with Ruby on Rails that deals with complex database associations. Don't forget to post, comment, follow, and like.
              </p>
              <h4>
                Ruby on Rails
              </h4>
              <a target="_blank" href="https://github.com/Foyoman/ana" className="icon">
                <GitHubIcon/>
              </a>
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
              <div className="tech">
                <SiHtml5 className="icon" />
                <p>HTML5</p>
              </div>
              <div className="tech">
                <DiCss3 className="icon" />
                <p>CSS3</p>
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
                <SiTailwindcss className="icon" />
                <p>Tailwind</p>
              </div>
              <div className="tech">
                <SiStorybook className="icon" />
                <p>Storybook</p>
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
          <Button 
            label="Say Hello!" 
            onClick={() => window.open('mailto:edwardtdo@gmail.com?subject=Hello Edward!&body=What would you like to say?')}
          />
          <h4>Designed & Built by Edward Do</h4>
        </div>

      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage