//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import BaseLayer from "../js/component/BaseLayer.jsx";

//import your own components
import JSTrafficLight from "./component/JSTrafficLight.jsx";
import JSPedestrianLight from "./component/JSPedestrianLight.jsx";
import RETrafficLight from "./component/RETrafficLight.jsx";
import REPedestrianLight from "./component/REPedestrianLight.jsx";

//render your react application
ReactDOM.render(<BaseLayer />, document.querySelector("#mapa"));
ReactDOM.render(<JSTrafficLight />, document.querySelector("#JST"));
ReactDOM.render(<JSPedestrianLight />, document.querySelector("#JSP"));
ReactDOM.render(<RETrafficLight />, document.querySelector("#RET"));
ReactDOM.render(<REPedestrianLight />, document.querySelector("#REP"));
