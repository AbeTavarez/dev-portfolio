import React, { Component, Fragment } from "react";
import "./Resume.css";
import { Grid, Container } from "@material-ui/core";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Container col={4}>
            {/*Left side panel*/}
            <div className="resume-top">
              <div className="resume-top-left">
                <h2 style={{ paddingTop: "2em" }}>Efren Abraham Tavarez</h2>
                <h4 style={{ padding: "5px" }}>Junior Software Engineer</h4>
              </div>
              <div className="resume-top-right">
                <a href="https://docdro.id/0mmJjfB" download>
                  <img
                    src="https://img.icons8.com/dusk/64/000000/pdf.png"
                    alt="pdf-icon"
                  />
                </a>
              </div>
            </div>
            <hr
              style={{
                borderTop: "3px solid rgba(51, 121, 135)",
                width: "100%",
              }}
            />
          </Container>
          {/*Right side panel*/}
          <Container col={8} className="resume-right-col">
            <h2>Education</h2>

            <Education
              startYear="3/2020"
              endYear={2020}
              schoolName="General Assembly"
              schoolDescription={
                "General Assembly is a pioneer in education and career transformation, specializing in today’s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love."
              }
            />
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Noble Desktop"
              schoolDescription={
                "NYC’s leading design & coding school for  years, we have perfected the craft of teaching. We use our own time-tested curriculum and custom workbooks we wrote. Noble’s “learn, then practice” teaching method results in students learning and retaining much more than traditional “follow along” classes."
              }
            />
          </Container>

          <hr style={{ borderTop: "3px solid rgba(166, 67, 97)" }} />

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
              jobName="Team Associate, Coca Cola"
              jobDescription="Ability to work in a large and fast paced team environment dealing with multiple tasks and individuals. Conduct daily inventories and produce reports. Coordinate customer orders and deliveries. Train new associates in company’s multiple software systems."
            />
          </Container>

          <hr style={{ borderTop: "3px solid rgba(51, 121, 135)" }} />

          <Container col={8} className="resume-right-col">
            <h2>Skills</h2>
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
            </div>
          </Container>
        </Grid>
      </Fragment>
    );
  }
}

export default Resume;
