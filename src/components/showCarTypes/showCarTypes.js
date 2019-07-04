import React from 'react';
import "./showCarTypes.css";

import { Link } from "react-router-dom";
import compact from "../../assets/carTypeImages/compact.jpg";
import midsize from "../../assets/carTypeImages/midsize.jpg";
import executive from "../../assets/carTypeImages/executive.jpg";
import hypercar from "../../assets/carTypeImages/hypercar.jpg";
import suv from "../../assets/carTypeImages/suv.jpg";

const showCarTypes = () => {
  return (
    <div className="carTypes_container">
      <div className="car_type">
        {/* make both img and text be clickable and work as links */}
        <Link to="/cars/compact">
          <img src={compact} alt="compact"/>
        </Link>
        <Link to="cars/compact" className="noLinkEffects">
          <div className="car_type_text">COMPACT</div>
        </Link>  
      </div> 

      <div className="car_type">
        <Link to="/cars/midsize">
          <img src={midsize} alt="midsize"/>
        </Link>
        <Link to="/cars/midsize" className="noLinkEffects">
          <div className="car_type_text">MID-SIZE</div>
        </Link>
      </div>

      <div className="car_type">
        <Link to="/cars/executive">
          <img src={executive} alt="executive"/>
        </Link>
        <Link to="/cars/executive" className="noLinkEffects">
          <div className="car_type_text">EXECUTIVE</div>
        </Link>
      </div> 
      
      <div className="car_type">
        <Link to="/cars/hypercar">
          <img src={hypercar} alt="hypercar"/>
        </Link>
        <Link to="/cars/hypercar" className="noLinkEffects">
          <div className="car_type_text">HYPERCAR</div>
        </Link>
      </div> 
      
      <div className="car_type">
        <Link to="/cars/suv">
          <img src={suv} alt="suv"/>
        </Link>
        <Link to="/cars/suv" className="noLinkEffects">
          <div className="car_type_text">SUV</div>
        </Link>
      </div> 
    </div>
  );
};

export default showCarTypes;