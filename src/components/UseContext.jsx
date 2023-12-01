import { useContext } from "react";
import { ToggleTheme } from "../App";
import './UseContext.css'
import React from 'react';
// import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';
import  UseState from './UseState'
import UseEffect from './UseEffect'

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem"
  }

  return (
    <div style={themeStyle} className="main-Container">
      <UseEffect />
      <UseState />
    </div>
  )
}

export default UseContext;