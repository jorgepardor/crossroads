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

const JavaScriptAveT = document.querySelectorAll(".JST");

JavaScriptAveT.forEach(function (Avenue) {
	ReactDOM.render(<JSTrafficLight />, Avenue);
});

const JavaScriptAveP = document.querySelectorAll(".JSP");

JavaScriptAveP.forEach(function (Avenue) {
	ReactDOM.render(<JSPedestrianLight />, Avenue);
});

const ReactAveT = document.querySelectorAll(".RET");

ReactAveT.forEach(function (Avenue) {
	ReactDOM.render(<RETrafficLight />, Avenue);
});

const ReactAveP = document.querySelectorAll(".REP");

ReactAveP.forEach(function (Avenue) {
	ReactDOM.render(<REPedestrianLight />, Avenue);
});
