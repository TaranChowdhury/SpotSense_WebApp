// eslint-disable-next-line no-unused-vars
import React from "react";
import SharedCard from "./SharedCard";
import "./Steps.css";
const Steps = () => {
  return (
    <section className="frame-section">
      <div className="frame-wrapper">
        <div className="frame-div">
          <div className="three-steps-three-minutes-wrapper">
            <div className="three-steps-three">Three steps. Three minutes.</div>
          </div>
          <h1 className="everything-should-be">
            Everything should be this easy.
          </h1>
        </div>
      </div>
      <div className="frame-parent1">
        <SharedCard
          image="/images/image-21.svg"
          title="Enter your zipcode"
          description="Enter the zipcode you are at or nearby and let us find the spot"
        />
        <SharedCard
          image="/images/directions.svg"
          title="Get the directions"
          description="Get the directions to nearest available parking which have empty spots for you"
        />
        <SharedCard
          image="/images/parking.svg"
          title="Go and park"
          description="The only thing you have to do now is just drive there, park and enjoy."
        />
      </div>
    </section>
  );
};

export default Steps;
