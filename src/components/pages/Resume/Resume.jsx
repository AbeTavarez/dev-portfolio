import React, { Component, Fragment } from "react";
import "./Resume.css";
import { Grid, Container } from "@material-ui/core";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <Fragment className="main-support">
        <Grid>
          <Container col={4}>
            {/*Left side panel*/}
            <div className="resume-top">
              <div className="resume-top-left">
                <h2>Efren Abraham Tavarez</h2>
                <h4 style={{ padding: "5px" }}>Software Engineer - Developer - DevOps</h4>
              </div>
              <div className="resume-top-right">
                <a
                  href="https://efren-tavarez-resume-pdf.s3.us-east-2.amazonaws.com/Efren+Tavarez-AWS+Engineer-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/dusk/64/000000/pdf.png"
                    alt="pdf-icon"
                  />
                </a>
                <span>Download</span>
              </div>
            </div>
            <hr
              style={{
                borderTop: "3px solid #3282b8",
                width: "100%",
              }}
            />
          </Container>
          {/*Right side panel*/}
          <Container col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear="01/2021"
              endYear="Currently Enrolled"
              schoolName="PerScholas AWS re/Start"
              schoolDescription="AWS re/Start curriculum teaches AWS Cloud fundamentals to help
              learners succeed in	a	new	career	with	AWS. Through real-world,
              scenario-based exercises, labs, and coursework, learners build
              Linux, Python, networking, security, and relational database skills."
            />

            <Education
              startYear="3/2020"
              endYear="5/2020"
              schoolName="Software Engineer, General Assembly"
              schoolDescription={
                "Completed a 12-week full-stack web development and programming bootcamp. JavaScript for DOM manipulation and API using the fetch API and ES6 async await. React single page applications using hooks and classes. Node and Express for the backend to create RESTful APIs.Redux for application	state management. MongoDB and PostgreSQL databases."
              }
            />
            
            
          </Container>

          <hr style={{ borderTop: "3px solid #0f4c75" }} />

          <Container col={8} className="resume-right-col">
            <h2>Experience</h2>
            <Experience
              startYear="3/2020"
              endYear="5/2020"
              jobName="Software Engineer Fellow, General Assembly"
              jobDescription="Developed competitive skills in Javascript, React, ExpressJS, NodeJS, MongoDB, Ruby On Rails, Jest, Test Driven Development, HTML, and CSS. Learned in-depth implementation of RESTful APIs, HTTP response-request cycle and principles object oriented programming through JavaScript and Ruby. Understanding of UX and UI through foundational knowledge of HTML, CSS Grid, Flexbox, ReactJS libraries and frameworks. Computer Science fundamentals and Algorithms and Data Structures."
            />

            <Experience
              startYear="09/2010"
              endYear="03/2020"
              jobName="Inventory Associate, Coca Cola"
              jobDescription="Ability to work in a large and fast paced team environment dealing with multiple tasks and individuals. Conduct daily inventories, produce reports and inspect area of work for any safety hazards. Coordinate customer orders and deliveries assuring client satisfacion. In charge of train new associates in company’s multiple software systems and procedures."
            />
          </Container>

          <hr style={{ borderTop: "3px solid rgba(51, 121, 135)" }} />

          <Container col={8} className="resume-right-col">
            <h2>Skills</h2>
            <div>
              HTML - CSS - JavaScript - React - NodeJS - Express - Webpack - GIT
              - SQL - MongoDB - PostgreSQL - Ruby - RAILS - Python - AWS
            </div>
            <div style={{ padding: "15px" }}>
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                style={{ padding: "3px" }}
                alt="html-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                style={{ padding: "3px" }}
                alt="css-icons"
              />
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                style={{ padding: "3px" }}
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
                src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
                style={{ padding: "3px" }}
                alt="ruby-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/python.png"
                style={{ padding: "3px" }}
                alt="python-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/npm.png"
                style={{ padding: "3px" }}
                alt="npm-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                style={{ padding: "3px" }}
                alt="git-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/console.png"
                style={{ padding: "3px" }}
                alt="command-line-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/api.png"
                style={{ padding: "3px" }}
                alt="api-icon"
              />
              

              
              <img src="https://img.icons8.com/color/48/000000/linux.png"
              style={{ padding: "3px" }}
              alt="html-icon"
              />

              <img
                src="https://img.icons8.com/color/48/000000/data-configuration.png"
                style={{ padding: "3px" }}
                alt="html-icon"
              />

              <img src="https://img.icons8.com/color/48/000000/wired-network.png"
              style={{ padding: "3px" }}
              alt="aws-icon"
              />
              <img src="https://img.icons8.com/color/48/000000/docker-container.png"
              style={{ padding: "3px" }}
              alt="aws-icon"
              />
            </div>
          </Container>
        </Grid>
      </Fragment>
    );
  }
}

export default Resume;
