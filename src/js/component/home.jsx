import React from "react";

//include images into your bundle
import Citybg from "../../img/citybg.png";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="title">
				<h1>Welcome to the crossroads between javascript and react</h1>
			</div>

			<div
				className="city"
				style={{ backgroundImage: `url(${Citybg})` }}></div>
		</div>
	);
};

export default Home;
