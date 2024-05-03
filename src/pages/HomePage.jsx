// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import ParkingCarousel from "../components/ParkingCarousel";
import GrowthInfo from "../components/GrowthInfo";
import Footer from "../components/Footer";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="body-container">
      <div className="home-page">        
        <Header />
        <Hero />
        <Steps />
        <ParkingCarousel />
        <GrowthInfo />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
