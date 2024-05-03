
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SharedCard.css";

// eslint-disable-next-line react/prop-types
const SharedCard = ({ image, title, description }) => {
  return (
    <div className="image-parent">
      <img className="image-icon" loading="lazy" alt="" src={image} />
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
    </div>
  );
};

export default SharedCard;
