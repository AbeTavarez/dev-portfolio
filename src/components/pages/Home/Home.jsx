import React , {useEffect}from "react";
import Layout from "../../shared/Layout";
import "./Home.css";
import YearCard from "../../helpers/YearCard/YearCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    maxHeight: 800,
  },
  media: {
    height: 200,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className="home-container">
        <div className="home-top">
          <div className="aboutme">
            
            <div className="bio">
              <h1>Welcome! My name is <span className='abe'>Abraham</span></h1>
              <p>
                I'm a self motivated AWS re/Start and Software Engineer
                Instructor at Per Scholas. I've experience on Cloud Computing,
                Linux, Networking, Cloud Security, Programming: Frontend and
                Backend, Automation, Software Development Life Cycle and
                Databases.
              </p>
              <p>
                When I'm not teaching, I like to work on my personal programming
                projects, play video games, and read a book. I enjoy riding my
                bmx bike on my time off and escaping to a beach when I'm on
                vacation!
              </p>
            </div>
            
          </div>

          <div className="home-message">
            <div className="img-h3">
              {/* <img src="https://res.cloudinary.com/abetavarez/image/upload/v1612810161/WIN_20210204_10_33_48_Pro-removebg-preview_5_npx6we.png" alt="user-pic" className="user-pic" /> */}
              <img
                src="https://efrentavarez-resume.s3.us-east-2.amazonaws.com/profile-pic.png"
                alt="user-pic"
                className="user-pic"
              />
              {/* <div className="user-pic"></div> */}
              
            </div>
            <div className="social-links-home">
              <a
                href="https://www.linkedin.com/in/abrahametavarez/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/AbeTavarez"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* DEV */}
              <a
                href="https://dev.to/abetavarez"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-dev"></i>
              </a>
              <a
                href="mailto:abetavarez@icloud.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fas fa-envelope-square"></i>
              </a>
            </div>
          </div>
        </div>

        {/* STACK ICONS */}
        <div className="icons-media-home">
          <img
            src="https://img.icons8.com/color/48/000000/javascript.png"
            alt="javascript-icon"
          />
          <img
            src="https://img.icons8.com/offices/48/000000/react.png"
            style={{ padding: "3px" }}
            alt="react-js-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            style={{ padding: "3px" }}
            alt="node-js-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/git.png"
            alt="git-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/npm.png"
            alt="npm-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/python.png"
            alt="python-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/linux.png"
            alt="html-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/console.png"
            alt="command-line-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/docker-container.png"
            alt="aws-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
            alt="ruby-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/data-configuration.png"
            alt="html-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/wired-network.png"
            alt="aws-icon"
          />
        </div>

        <div className="timeline-container">
          <h2>Timeline of Events</h2>
          <hr />
          <div>
            <h2>2021</h2>
          </div>
          {/* <YearCard 
            title='Taught over Twenty new Programmers/DevOps for Nationwide.' 
            time='October' 
            description1='I had the amazing opportunity to work with Nationwide and Per Scholas,'
            description2='to train over twenty new candidates for their IT and Software Engineering Apprenticeship Program.'
            
        /> */}

          <YearCard
            title="Taught over twenty new AWS Professionals for the AWS re/Start Program."
            time="September"
            description1="I helped over twenty new learners to graduate from the AWS re/Start Program and get their AWS CCP and SA certifications."
            imgUrl="https://abe-assets-cloud.s3.us-east-2.amazonaws.com/first-aws-class-gards.jpg"
            btnUrl="https://www.linkedin.com/feed/update/urn:li:activity:6839596361080553472/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A6839596361080553472%2C6839597113148616704)&replyUrn=urn%3Ali%3Acomment%3A(activity%3A6839596361080553472%2C6839617242049724416)"
          />

          <YearCard
            title="New job with Per Scholas as an IA/Co-Instructor."
            time="June"
            description1="At the end of June after completing the AWS re/Start training I was offered a job position as an IA / Co-Instructor at"
            description2="the AWS re/Start Program at Per Scholas."
            imgUrl="https://abe-assets-cloud.s3.us-east-2.amazonaws.com/starting-perscholas.jpg"
            btnUrl="https://www.linkedin.com/embed/feed/update/urn:li:share:6805503872241676288"
          />

          <YearCard
            title="Graduated from the AWS re/Start Program"
            time="May"
            imgUrl="https://abe-assets-cloud.s3.us-east-2.amazonaws.com/AWS-Restart-Graduate-Badge-Foundational.png"
            btnUrl="https://www.credly.com/badges/bbd3dc83-1559-461e-8e22-8e993d33f8df/linked_in"
          />

          <YearCard
            title="Started the AWS re/Start Program"
            time="January"
            description1="The AWS re/Start Program is a 15 weeks of hands on technical training on Cloud Computing, AWS Cloud, Linux,"
            description2="Python, Networking, Databases, Cybersecurity, CI/CD and more."
          />

          <div>
            <h2>2020</h2>
          </div>

          <YearCard
            time="August"
            title="Studied Redux"
            description1="Build an e-commerce web-application using React and Redux."
          />

          <YearCard
            time="July"
            title="Studied Angular and TypeScript"
            description1="Self-studied Angular and TypeScript."
          />

          <YearCard
            time="June"
            title="Graduated from the GA Software Engineering Program"
            description1="Completed a 12 weeks immersive Software Engineering Program."
          />

          <YearCard
            time="March"
            title="Started the GA Software Engineering Immersive Program"
            description1="The GA SE Immersive Program is a 12 weeks intense training program with focus on Frontend and Backend technologies in"
            description2="HTML, CSS, JavaScript, NodeJS, React, Ruby, Data Structures, and many other web development technologies."
          />

          <div>
            <h2>2019</h2>
          </div>

          <YearCard
            title="Started learning Swift and iOS Development"
            time="March"
            description1="Completed a iOS Development Bootcamp in SOHO NYC."
          />
        </div>
      </div>
    </Layout>
  );
}
