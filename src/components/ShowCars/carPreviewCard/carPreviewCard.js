import React from 'react';
import "./carPreviewCard.css";
import { Link } from "react-router-dom";

const carPreviewCard = (props) => {
  
  var numWithCommas = Number(props.price).toLocaleString();

  return (
    <div className="carPreviewCard">
      <Link to={`/cars/${props.type}/${props.carId}`} className="carPreview_link">
        <div className="preview_img">
          <img src={props.diagImg} alt="carpic"/>
        </div>
        <div className="preview_make">
          {props.make}
        </div>
        <div className="preview_model">
          {props.model}
        </div>
        <div className="preview_price">
          {`$${numWithCommas}`}
        </div>
      </Link>
    </div>
  );
};

export default carPreviewCard;