import React from 'react';
import "./App.css";

import Layout from "../src/hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import ShowCarTypes from "../src/components/showCarTypes/showCarTypes";
import ShowCars from "../src/components/ShowCars/ShowCars";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/cars/:carType" component={ShowCars} />
        <Route path="/cars" component={ShowCarTypes} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;