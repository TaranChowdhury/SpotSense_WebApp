// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Hero.css";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      redirectParkingList();
    }
  }

  const redirectParkingList = () => {
    if (inputValue === '') {
      alert("Zip code is invalid");
      return;
    }
    sessionStorage.setItem("zipCode", inputValue)
    navigate('/parkinglist');
  }

  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-locations">
          <div className="hero-text">Welcome to parking</div>
          <div className="hero-heading-wrapper">
            <h1 className="hero-heading">Find yourself a parking</h1>
            <div className="hero-description">
              The nearest and available parking for you in your city, just enter
              the zipcode.
            </div>
            <div className="zipcode-field">
              {/* <div className="zipcode-field-child" />
              <div className="enter-your-zipcode-wrapper">
                <div className="enter-your-zipcode">Enter your zipcode</div>
              </div> */}
              <div>
                <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} id="zip" className="zip-code-input" placeholder="Enter your zipcode"></input>
              </div>
              <button className="rectangle-group" onClick={redirectParkingList} >
                <div className="rectangle-div" />
                <div className="hero-find-button">Find</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="image-2-icon"
        loading="lazy"
        alt=""
        src="/images/image-parking2.jpg"
      />
    </section>
  );
};

export default Hero;
