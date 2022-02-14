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
					<div className="JSNorth">
						<div className="JST JSTtrafNorth"></div>
						<div className="JSP JSPedEast"></div>
						<div className="JSP JSPedEast"></div>
					</div>

					<div className="JSSouth">
						<div className="JSP JSPedWestN"></div>
						<div className="JSP JSPedWestS"></div>
						<div className="JST JSTtrafSouth"></div>
					</div>

					<div className="REEast">
						<div className="RET RETrafEast"></div>
						<div className="REP REPedNorth"></div>
						<div className="REP REPedSouth"></div>
					</div>

					<div className="REWest">
						<div className="RET RETWest"></div>
						<div className="REP REPedNorth"></div>
						<div className="REP REPedSouth"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Baselayer;
