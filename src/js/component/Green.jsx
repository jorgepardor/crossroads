import * as React from "react";
import Light from "./Light.jsx";

const Green = ({ isOn }) => (
	<Light
		style={{
			backgroundColor: isOn ? "#4CB432" : "#01402E",
			boxShadow: isOn && "0 0 6em #33ff33",
		}}
	/>
);

export default Green;
