import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="terms">
        <p>© 2020</p>
      </div>
      <div className="links">
        <div>
          <h2>Get in touch </h2>
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
      <div className="contact">
        <p>E-mail: abetavarez@icloud.com</p>
      </div>
    </div>
  );
}
