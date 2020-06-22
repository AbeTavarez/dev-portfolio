import React from "react";
import "./About.css";
import { Grid, Cell } from "react-mdl";

export default function About() {
  return (
    <div className="about-body">
      <Grid>
        <Cell col={6}>
          <div className="img-container">
            <img
              src="https://avatars0.githubusercontent.com/u/39171176?s=460&u=ca3e045a92e31b6c19180496fb71d6aab41e0098&v=4"
              alt="avatar"
              className="profile-img"
            />
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
          </div>

          <div className="aboutme">
            <p>I'm passionate about tech and software development.</p>
            <p>As a New Yorker, I feel really proud to live in this city.</p>
            <p>
              I've attended many events and meetups all around my city and they
              all have been an amazing experience.
            </p>
            <p>
              I've been using a wide range of technologies including{" "}
              <span style={{ fontStyle: "italic" }}> Javascript</span>,
              <span style={{ fontStyle: "italic" }}> ReactJS</span>,{" "}
              <span style={{ fontStyle: "italic" }}> NodeJS</span>,{" "}
              <span style={{ fontStyle: "italic" }}> Express</span>,
              <span style={{ fontStyle: "italic" }}> Ruby On Rails</span>,{" "}
              <span style={{ fontStyle: "italic" }}> Python</span>
            </p>
            <p>
              and many others to create fun and modern websites and webapps.
            </p>
            <p>I'm seeking a challenging and fun position.</p>
            <p>
              I am very excited to work on creative team projects where I can
              share everything I have to offer to the tech community.
            </p>
          </div>
        </Cell>

        <Cell col={6}>
          <p></p>
        </Cell>
      </Grid>

      {/* <Grid>
        <div className="img-container">
          <img
            src="https://avatars0.githubusercontent.com/u/39171176?s=460&u=ca3e045a92e31b6c19180496fb71d6aab41e0098&v=4"
            alt="avatar"
            className="profile-img"
          />
        </div>

        <Cell col={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a
            scelerisque purus semper eget duis at tellus. Ut ornare lectus sit
            amet est. Sagittis nisl rhoncus mattis rhoncus urna neque viverra
            justo.{" "}
          </p>
        </Cell>
      </Grid> */}
    </div>
  );
}
