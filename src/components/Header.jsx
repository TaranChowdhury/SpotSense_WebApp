// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="logo">
          <div className="build-wrapper">
            <img
              className="build-icon"
              loading="lazy"
              alt=""
              src="/images/parking.svg"
              width={"50px"}
              height={80}
            />
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="about-us-wrapper">
          <div className="projects">Find Parking</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
