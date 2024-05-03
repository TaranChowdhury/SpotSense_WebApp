/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useMemo } from "react";
import "./ParkingCard.css";
const ParkingCard = ({
  image3,
  title,
  description,
  starinactivebig,
  starinactivebig1,
  starinactivebig2,
  starinactivebig3,
  starinactivebig4,
  starsValue,
  propMinWidth,
}) => {
  const starsValueStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="property">
      <img className="image-3-icon" loading="lazy" alt="" src={image3} />
      <div className="title1">{title}</div>
      <div className="description1">{description}</div>
      <div className="we-are-a-boutique-brokerage">
        <div className="stars">
          <img
            className="starinactivebig-icon"
            loading="lazy"
            alt=""
            src={starinactivebig}
          />
          <img className="starinactivebig-icon" alt="" src={starinactivebig1} />
          <img className="starinactivebig-icon" alt="" src={starinactivebig2} />
          <img className="starinactivebig-icon" alt="" src={starinactivebig3} />
          <img className="starinactivebig-icon" alt="" src={starinactivebig4} />
        </div>
        <div className="starsvalue" style={starsValueStyle}>
          {starsValue}
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
