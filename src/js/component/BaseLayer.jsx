import * as React from "react";

//include images into your bundle
import Citybg from "../../img/citybg.png";

//create your first component

const Baselayer = () => {
	return (
		<>
			<div className="main">
				<div className="title">
					<h1>
						Welcome to the crossroads between javascript and react
					</h1>
				</div>
				<div
					className="city"
					style={{ backgroundImage: `url(${Citybg})` }}>
					<div id="JST"></div>
					<div id="JSP"></div>
					<div id="RET"></div>
					<div id="REP"></div>
				</div>
			</div>
		</>
	);
};

export default Baselayer;
