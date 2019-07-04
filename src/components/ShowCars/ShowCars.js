import React, { Component } from 'react';
import "./ShowCars.css";

import axios from "../../axios";
import CarPreviewCard from "./carPreviewCard/carPreviewCard";

class ShowCars extends Component {
  
  state = {
    cars: []
  }

  componentDidMount() {
    //get carType from query parameter
    var carType = this.props.match.params.carType;

    axios.get(`/customer/cars/${carType}`)
      .then(res => {
        var carData = res.data;
        
        //sort cars by price
        carData.sort((a, b) => {
          return a.price - b.price;
        });

        this.setState({cars: carData});
      });
  }

  render() {
    var invisbleElements = [];
    for(var i=0; i<this.state.cars.length-1; i++) {
      invisbleElements.push(<i aria-hidden="true" key={i}></i>);
    }

    return (
      <div className="cars_container">
        {this.state.cars.map((car) => (
          <CarPreviewCard 
            key={car.carId}
            diagImg={car.diagonalView}
            make={car.make}
            model={car.model}
            price={car.price}
            type={car.type}
            carId={car.carId}
          />
        ))}

        {/* add invisible elements that allow flexbox to be centered and 
        flex-items to be left aligned. optimal number of invisible elements
        is n-1, where n is number of cars in current cartype */}
        {invisbleElements}
      </div>
    );
  }
}

export default ShowCars;