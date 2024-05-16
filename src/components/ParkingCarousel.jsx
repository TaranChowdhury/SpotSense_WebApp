// eslint-disable-next-line no-unused-vars
import React from "react";
import ParkingCard from "./ParkingCard";
import "./ParkingCarousel.css";
const ParkingCarousel = () => {
  return (
    <section className="best-project-of-the-years-parent">
      <div className="frame-wrapper1">
        <div className="our-recent-projects-parent">
          <h1 className="our-recent-projects">Our most used parkings</h1>
        </div>
      </div>
      <div className="projectflow">
        <ParkingCard
          image3="/images/image-parking1.jpg"
          title="City Central Parking"
          description="Conveniently located at the heart of downtown Cityville."
          starinactivebig="/images/starinactivebig.svg"
          starinactivebig1="/images/starinactivebig-1.svg"
          starinactivebig2="/images/starinactivebig-2.svg"
          starinactivebig3="/images/starinactivebig-3.svg"
          starinactivebig4="/images/starinactivebig-4.svg"
          starsValue="4.84"
          propMinWidth="2.125rem"
        />
        <ParkingCard
          image3="/images/image-parking2.jpg"
          title="City Town Parking"
          description="Our parking lot offers safe and secure parking for your vehicle."
          starinactivebig="/images/starinactivebig.svg"
          starinactivebig1="/images/starinactivebig-1.svg"
          starinactivebig2="/images/starinactivebig-2.svg"
          starinactivebig3="/images/starinactivebig-3.svg"
          starinactivebig4="/images/starinactivebig-4.svg"
          starsValue="4.83"
          propMinWidth="1.83rem"
        />
        <ParkingCard
          image3="/images/image-parking3.jpg"
          title="Main Parking"
          description="With affordable hourly and daily rates, as well as monthly passes available."
          starinactivebig="/images/starinactivebig.svg"
          starinactivebig1="/images/starinactivebig-1.svg"
          starinactivebig2="/images/starinactivebig-2.svg"
          starinactivebig3="/images/starinactivebig-3.svg"
          starinactivebig4="/images/starinactivebig-4.svg"
          starsValue="4.83"
          propMinWidth="1.83rem"
        />
        <ParkingCard
          image3="/images/image-parking4.jpg"
          title="SK Parking"
          description="Park with confidence at SK Parking and enjoy your time in Cityville worry-free!."
          starinactivebig="/images/starinactivebig.svg"
          starinactivebig1="/images/starinactivebig-1.svg"
          starinactivebig2="/images/starinactivebig-2.svg"
          starinactivebig3="/images/starinactivebig-3.svg"
          starinactivebig4="/images/starinactivebig-4.svg"
          starsValue="4.83"
          propMinWidth="1.83rem"
        />
      </div>
    </section>
  );
};

export default ParkingCarousel;
