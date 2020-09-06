import React, { Component } from 'react';
import "./ShowACar.css";

import axios from "../../axios";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import Button from "@material-ui/core/Button";

class ShowACar extends Component {
  
  state = {
    car: {
      carspecId: ""
    }
  }

  componentDidMount() {
    var carId = this.props.match.params.carId;
    var carType = this.props.match.params.carType;

    axios.get(`/customer/cars/${carType}/${carId}`)
      .then(res => {
        var carData = res.data[0];
        console.log(carData);
        this.setState({car: carData});
      });
  }

  addToCartHandler = () => {
    console.log("clicked");
  }
  
  render() {
    var numWithCommas = Number(this.state.car.price).toLocaleString();

    var carDimensions = `${this.state.car.carspecId.lengthIN}in x 
                        ${this.state.car.carspecId.widthIN}in x 
                        ${this.state.car.carspecId.heightIN}in`;

    return (
      <div className="car_container">
        <div className="carCarousel">
          <Carousel controls={false} interval={3000}>
            <Carousel.Item>
              <img className="d-block w-100" src={this.state.car.diagonalView} alt="First slide" />
            </Carousel.Item>   
            <Carousel.Item>
              <img className="d-block w-100" src={this.state.car.interiorView} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={this.state.car.sideView} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td className="text-left">Make</td>
              <td className="text-left">{this.state.car.make}</td>
            </tr>
            <tr>
              <td className="text-left">Model</td>
              <td className="text-left">{this.state.car.model}</td>
            </tr>
            <tr>
              <td className="text-left">Year</td>
              <td className="text-left">{this.state.car.year}</td>
            </tr>
            <tr>
              <td className="text-left">Price</td>
              <td className="text-left">{`$${numWithCommas}`}</td>
            </tr>
            <tr>
              <td className="text-left">Number Available</td>
              <td className="text-left">{this.state.car.numAvailable}</td>
            </tr>
            <tr>
              <td className="text-left">Engine</td>
              <td className="text-left">{this.state.car.carspecId.engine}</td>
            </tr>
            <tr>
              <td className="text-left">Transmission</td>
              <td className="text-left">{this.state.car.carspecId.transmission}</td>
            </tr>
            <tr>
              <td className="text-left">Horsepower</td>
              <td className="text-left">{this.state.car.carspecId.horsepower} hp</td>
            </tr>
            <tr>
              <td className="text-left">Weight</td>
              <td className="text-left">{this.state.car.carspecId.weightLBS} lbs</td>
            </tr>
            <tr>
              <td className="text-left">Dimensions (L x W x H)</td>
              <td className="text-left">{carDimensions}</td>
            </tr>
          </tbody>
        </Table>

        <Button 
          className="generic_button" 
          variant="contained" 
          color="primary" 
          style={{backgroundColor: "#114b5f"}}
          onClick={this.addToCartHandler}
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}

export default ShowACar;