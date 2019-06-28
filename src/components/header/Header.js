import React, { Component } from 'react';
import "./Header.css";

import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Header extends Component {
  
  state = {
    isLoggedIn: false
  }

  render() {
    const mui = {
      appBar: {
        backgroundColor: "black"
      },
      logoButton: {
        color: "white",
        fontSize: "25px",
        outline: "none",
        paddingRight: "18px",
        fontStyle: "italic",
        fontFamily: "airstrike"
      },
      button: {
        color: "white",
        fontSize: "17px",
        padding: "10px 10px"
      }
    }

    return (
      <AppBar position="fixed" style={mui.appBar}>
        <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <Link to="/">
              <Button style={mui.logoButton} className="appBarButton">Infinity Motors</Button>
            </Link>
          </div>

          <div>
            <Link to="/cars" >
              <Button style={mui.button} className="appBarButton">Cars</Button>
            </Link>
            <Link to="/cart" >
              <Button style={mui.button} className="appBarButton">
                <ShoppingCartIcon />  
              </Button>
            </Link>

            {this.state.isLoggedIn===false ? 
              <Link to="/auth">
                <Button style={mui.button} className="appBarButton">Login</Button>
              </Link>
              :
              <Link to="/">
                <Button style={mui.button} className="appBarButton">Logout</Button>
              </Link>
            }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;