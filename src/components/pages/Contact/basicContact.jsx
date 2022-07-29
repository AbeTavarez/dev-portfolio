import React from "react";

import "./Contact.css";

export default function basicContact() {
  return (
    <div className="email-form-container">
      <div className="email-form-top">
        <h1>Get in touch</h1>
        <img src="https://img.icons8.com/dusk/84/000000/paper-plane.png" />
      </div>
      <div className="social-links">
        <div>
          E-mail:
          <a
            href="mailto:abetavarez@icloud.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fas fa-envelope-square"></i>
          </a>
        </div>
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
      </div>
    </div>
  );
}
