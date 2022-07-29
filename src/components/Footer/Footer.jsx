import React from "react";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div className="footer-container">

      <div className="contact">
        <p>Copyright {year} &copy;</p>
        <p>Abraham E. Tavarez</p>
      </div>


      <div className="footer-links">
        <div className="getintouch">
          <h2>Get in touch </h2>
        </div>

        {/* LinkedIn */}
        <div className="social-links-footer">
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
  );
}
