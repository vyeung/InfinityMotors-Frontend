import React from 'react';
import Header from "../components/header/Header";

const layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};

export default layout;