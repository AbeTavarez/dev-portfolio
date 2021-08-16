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
        <div className="welcome-message">
          <div className="name-home">
         
          <div className='abraham'>
            <h1>Abraham E. Tavarez</h1>
            <hr />
          </div>
           <div className='img-h3'>
           {/* <img src="https://res.cloudinary.com/abetavarez/image/upload/v1612810161/WIN_20210204_10_33_48_Pro-removebg-preview_5_npx6we.png" alt="user-pic" className="user-pic" /> */}
           <img src="https://efrentavarez-resume.s3.us-east-2.amazonaws.com/profile-pic.png" alt="user-pic" className="user-pic" />
            {/* <div className="user-pic"></div> */}
            <div className='titles'>
            <h4>Software Engineer</h4>
            <h4>AWS Cloud Engineer</h4>
            <h4>DevOps</h4>
            </div>
           </div>
          </div>
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

        <div className="aboutme">
          
          <div className="bio">
            <h2>>_ Whoami?</h2>
            <p>
               I'm a self motivated AWS re/Start and Software Engineer Instructor at Per Scholas.
              I've experience on Cloud Computing, Linux, Networking, Cloud Security, Programming: Frontend and Backend, Automation, Software Development Life Cycle and Databases.
            </p>
            <p>
              When I'm not teaching, I like to work on my personal programming projects, and read a book. 
              I enjoy riding my bmx bike on my time off and escaping to a beach when I'm on vacation!
            </p>
            
          </div>
          <hr />
        </div>

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
              
              <img src="https://img.icons8.com/color/48/000000/linux.png"
           
              alt="html-icon"
              />

              <img
                src="https://img.icons8.com/color/48/000000/console.png"
            
                alt="command-line-icon"
              />

              <img src="https://img.icons8.com/color/48/000000/docker-container.png"
              
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

              <img src="https://img.icons8.com/color/48/000000/wired-network.png"
            
              alt="aws-icon"
              />
              
        </div>

        <div className="timeline-container">
          <h2>Timeline of Events</h2>
          <hr />
          <div>
            <h2>2021</h2>
          </div>
         <YearCard 
            title='Taught over 20 new programmers for Nationwide.' 
            time='July' 
            description1='I had the amazing opportunity to work with Nationwide and Per Scholas 
            to train over 20 new learners at their IT and Software Engineering Program.'
        />
         
         <YearCard 
            title='Taught over 20 new AWS Professionals for the AWS re/Start Program.' 
            time='June' 
            description1='This is an amazing opportunity that AWS and Per Scholas bring to learners who wants to make a career switch into tech.'
            description2='The AWS re/Start Program has an intense curriculum were learners get exposed to Cloud Computing, Networking, Linux, Programming and much more.'
        />
        </div>
        

     
      </div>
    </Layout>
  );
}
