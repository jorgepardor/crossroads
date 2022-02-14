import * as React from "react";
import Light from "./Light.jsx";

const Yellow = ({ isOn }) => (
	<Light
		style={{
			backgroundColor: isOn ? "#F2CC0C" : "#592D14",
			boxShadow: isOn && "0 0 6em #ffff33",
		}}
	/>
);

export default Yellow;
