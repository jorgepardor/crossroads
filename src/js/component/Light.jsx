import * as React from "react";

const Light = ({ style }) => (
	<div
		style={{
			appearance: "none",
			position: "relative",
			left: "50%",
			width: 8,
			height: 8,
			marginTop: 2,
			marginLeft: -40,
			backgroundColor: "grey",
			verticalAlign: "middle",
			borderRadius: "100%",
			display: "block",
			...style,
		}}>
		&nbsp;
	</div>
);

export default Light;
