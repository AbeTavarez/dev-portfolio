import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1>What can I do for you? </h1>
        <p>Let's work in the new amazing idea you have <i className="fas fa-lightbulb"></i></p>
      </div>
      
    {/* <div className="services-list"> */}
      <div className="service-card">
        <div>
          <i className="fas fa-paint-brush"></i>
        </div>
        <div className="scard-details">
          <h2>Web Design</h2>
          <p>A new website from the first idea to the successful launch . Together with you I make an appealing design that suits your business. I design using the latest techniques and trends.</p>
        </div>
      </div>

      <div className="service-card">
        <div>
        <i className="fas fa-tools"></i>
      </div>
        <div className="scard-details">
          <h2>Web Development</h2>
          <p>I develop custom websites , keeping them unique, functional and modern . Considering the latest technologies like HTML5, CSS3, PHP and more.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div>
        <i className="fas fa-mobile-alt"></i>
      </div>
        <div className="scard-details">
          <h2>Responsive Design</h2>
          <p>A website must be properly viewed on a wide variety of screens. I make sure that your website is always optimally usable on any device, any operating system and any web browser.</p>
        </div>
      </div>

      <div className="service-card">
        <div>
        <i className="fas fa-sync-alt"></i>
      </div>
        <div className="scard-details">
        <h2>Website Restyling</h2>
        <p>Is your website out of date or need some improvement? I can help you to update it into a modern, user-friendly and responsive website that will convert more visitors into customers and boost your conversion rate.</p>
        </div>
      </div>

      <div className="service-card">
        <div>
        <i className="fas fa-shopping-cart"></i>
      </div>
        <div className="scard-details">
        <h2>E-Commerce & Shopify</h2>
        <p>If you need an online shop, let me help you build a professional solution according to your requirements and getting your online business up and running. I’ve worked with Shopify, WooCommerce and various other e-Commerce systems.</p>
        </div>
      </div>

      <div className="service-card">
        <div>
        <i className="fas fa-cogs"></i>
      </div>
        <div className="scard-details">
        <h2>Maintenance & Support</h2>
        <p>From building your first website to maintaining your existing applications. I provide on-going support and maintenance services to ensure that your website always runs smoothly. I provide honest advice and the best possible support for you to reach your goals.</p>
        </div>
      </div>
      
        {/* </div> */}

      <div className="getintouch-services">
        <h1>Get in touch</h1>
        <img src="https://img.icons8.com/dusk/84/000000/paper-plane.png" alt="paper plane"/>
        <p>Want to get in touch? Send me an Email: <span>abetavarez@gmail.com</span></p>
      </div>

    </div>
  )
}

export default Services
