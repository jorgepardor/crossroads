import * as React from "react";
import Light from "./Light.jsx";

const Red = ({ isOn }) => (
	<Light
		style={{
			backgroundColor: isOn ? "#F21B1B" : "#40010D",
			boxShadow: isOn && "0 0 6em #ff3333",
		}}
	/>
);

export default Red;
