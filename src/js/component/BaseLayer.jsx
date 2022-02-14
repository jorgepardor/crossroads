import * as React from "react";

//include images into your bundle
import Citybg from "../../img/citybg.png";

//create your first component

const Baselayer = () => {
	return (
		<>
			<div className="main">
				<div className="title"></div>
				<div
					className="city"
					style={{ backgroundImage: `url(${Citybg})` }}>
					<div className="JSNorth">
						<div className="JST JSTtrafNorth"></div>
						<div className="JSP JSPedNorthNE"></div>
						<div className="JSP JSPedNorthNW"></div>
					</div>

					<div className="JSSouth">
						<div className="JSP JSPedSouthSE"></div>
						<div className="JSP JSPedSouthSW"></div>
						<div className="JST JSTtrafSouth"></div>
					</div>

					<div className="REEast">
						<div className="RET RETrafEast"></div>
						<div className="REP REPedEastNE"></div>
						<div className="REP REPedEastSE"></div>
					</div>

					<div className="REWest">
						<div className="RET RETrafWest"></div>
						<div className="REP REPedWestSE"></div>
						<div className="REP REPedWestNW"></div>
					</div>
				</div>

				<div className="title">
					<h1>
						Welcome to the crossroads between <br />
						Javascript Avenue and React Road
					</h1>
				</div>
			</div>
		</>
	);
};

export default Baselayer;
