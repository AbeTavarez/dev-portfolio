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
                <h4 style={{ padding: "5px" }}>Junior Software Engineer</h4>
              </div>
              <div className="resume-top-right">
                <a
                  href="https://docdro.id/SbFxLdJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/dusk/64/000000/pdf.png"
                    alt="pdf-icon"
                  />
                </a>
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
              startYear="3/2020"
              endYear="Current"
              schoolName="Software Engineer, General Assembly"
              schoolDescription={
                "General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love."
              }
            />
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="iOS Developer, Noble Desktop"
              schoolDescription={
                "NYC’s leading design & coding school for  years, we have perfected the craft of teaching. We use our own time-tested curriculum and custom workbooks we wrote. Noble’s “learn, then practice” teaching method results in students learning and retaining much more than traditional “follow along” classes. After learning foundational object-oriented programming concepts in Xcode and Swift, you’ll build several apps in class and conclude with creating your own app."
              }
            />
            <Education
              startYear={2006}
              endYear={2007}
              schoolName="Audio Engineer, Touro College"
              schoolDescription={
                "Audio engineering is a very wide discipline as well as an exciting one! It blends both technology and creativity to help create and refine sounds used in music, media, and performance technology. A bachelor’s degree in audio engineering, or a related field such as music technology, recording arts, sound engineering…the list goes on, is a solid stepping stone towards a career in this competitive industry.."
              }
            />
            <Education
              startYear={2004}
              endYear={2006}
              schoolName="Audio Engineer/Art, BCC College"
              schoolDescription={
                "The college was established in 1957. Hall of Fame for Great Americans, the country’s first hall of fame. In October 2012, our campus was declared a National Historic Landmark, becoming the country’s first community college campus to receive such a designation.."
              }
            />
          </Container>

          <hr style={{ borderTop: "3px solid #0f4c75" }} />

          <Container col={8} className="resume-right-col">
            <h2>Experience</h2>
            <Experience
              startYear="3/2020"
              endYear={2020}
              jobName="Software Engineer Fellow, General Assembly"
              jobDescription="Developed competitive skills in Javascript, React, ExpressJS, NodeJS, MongoDB, Ruby On Rails, Jest, Test Driven Development, HTML, and CSS. Learned in-depth implementation of RESTful APIs, HTTP response-request cycle and principles object oriented programming through JavaScript and Ruby. Understanding of UX and UI through foundational knowledge of HTML, CSS Grid, Flexbox, ReactJS libraries and frameworks. Computer Science fundamentals and Algorithms and Data Structures."
            />

            <Experience
              startYear={2010}
              endYear={2020}
              jobName="Inventory IT Specialist, Coca Cola"
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
                src="https://img.icons8.com/dusk/64/000000/html-5.png"
                style={{ padding: "3px" }}
                alt="html-icon"
              />
              <img
                src="https://img.icons8.com/dusk/64/000000/css3.png"
                style={{ padding: "3px" }}
                alt="css-icons"
              />
              <img
                src="https://img.icons8.com/dusk/64/000000/javascript.png"
                style={{ padding: "3px" }}
                alt="javascript-icon"
              />
              <img
                src="https://img.icons8.com/offices/60/000000/react.png"
                style={{ padding: "3px" }}
                alt="react-js-icon"
              />
              <img
                src="https://img.icons8.com/color/64/000000/nodejs.png"
                style={{ padding: "3px" }}
                alt="node-js-icon"
              />
              <img
                src="https://img.icons8.com/dusk/64/000000/ruby-programming-language.png"
                style={{ padding: "3px" }}
                alt="ruby-icon"
              />
              <img
                src="https://img.icons8.com/dusk/64/000000/python.png"
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
              <img
                src="
            https://img.icons8.com/bubbles/48/000000/amazon.png"
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
