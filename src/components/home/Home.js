import React, { Component } from 'react';
import "./Home.css";

import Button from "@material-ui/core/Button";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="montage_container">
          <video loop autoPlay>
            <source type="video/mp4" src="/videos/car_montage.mp4" />
          </video>
          {/* the scroll-down animation */}
          <div className="middle">
            <div className="mouse"></div>
          </div>
        </div>

        <div className="aboutUs_container">
          <h1>About Us</h1>
          <div className="aboutUs_text">
            <p>
              Founded in 2019, we at Infinity Motors stride to offer a fine variety of cars ranging 
              from commonly seen models to some of the most rarest in the world.  Our top quality 
              line-up is guaranteed to satisfy drivers with all types of experience - from the 
              everyday commuter to the avid hypercar collector.  Click below to see our listings.
            </p>
          </div>
          <Button 
            className="aboutUs_button" 
            variant="contained" 
            color="primary" 
            style={{backgroundColor: "#114b5f"}}
          >
            See Cars
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;