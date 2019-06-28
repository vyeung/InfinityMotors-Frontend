import React from 'react';
import "./App.css";

import Layout from "../src/hoc/layout";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;