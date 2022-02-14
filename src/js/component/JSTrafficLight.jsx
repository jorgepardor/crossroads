import * as React from "react";
import Green from "./Green.jsx";
import Yellow from "./Yellow.jsx";
import Red from "./Red.jsx";

//include images into your bundle
import Citybg from "../../img/citybg.png";

//create your first component

class JSTrafficLight extends React.PureComponent {
	state = {
		green: true,
		yellow: false,
		red: false,
	};

	transition = () => {
		if (this.state.green) {
			this.setState({
				green: false,
				yellow: true,
				red: false,
			});
			this.waitShortInterval();
			return;
		}

		if (this.state.yellow) {
			this.setState({
				green: false,
				yellow: false,
				red: true,
			});
			this.waitLongInterval();
			return;
		}

		if (this.state.red) {
			this.setState({
				green: true,
				yellow: false,
				red: false,
			});
			this.waitMidInterval();
			return;
		}
	};

	waitLongInterval() {
		setTimeout(this.transition, 10000);
	}

	waitMidInterval() {
		setTimeout(this.transition, 7000);
	}

	waitShortInterval() {
		setTimeout(this.transition, 3000);
	}

	componentDidMount() {
		this.waitMidInterval();
	}

	render() {
		const { green, yellow, red } = this.state;

		return (
			<div className="main">
				<div>
					<Red isOn={red} />
					<Yellow isOn={yellow} />
					<Green isOn={green} />
				</div>
			</div>
		);
	}
}

export default JSTrafficLight;
