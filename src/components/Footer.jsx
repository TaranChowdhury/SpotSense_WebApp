// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-inner">
        <div className="footer-parent">
          <div className="footer-control">
            <h1 className="footer-contact-us">Contact Us</h1>
            <div className="footer-contact-us-text">
              Send us an email if you want to know more about us.
            </div>
          </div>
          <div className="email">
            <div className="enter-your-email-container">
              <div className="enter-your-email1">Enter your email</div>
            </div>
            <button className="button">
              <div className="button-child" />
              <div className="button-send">Send</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
