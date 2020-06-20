import React from "react";
import Layout from "../../shared/Layout";

import "./Home.css";
export default function Home() {
  return (
    <Layout>
      <div className="img-container">
        <img
          src="https://avatars0.githubusercontent.com/u/39171176?s=460&u=ca3e045a92e31b6c19180496fb71d6aab41e0098&v=4"
          alt="avatar"
          className="profile-img"
        />
      </div>
      <div className="home-container">
        <div className="name-home">
          <h1>hi, I'm Abraham</h1>
        </div>

        <div className="welcome-message">
          <p>I'm a Software Engineer</p>
          <p>from the city that never sleeps NYC</p>
          <p>feel free to look around...</p>
        </div>
        {/* LinkedIn */}
        <div className="social-links">
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
        </div>
      </div>
    </Layout>
  );
}
