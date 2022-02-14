import * as React from "react";
import Green from "./Green.jsx";
import Red from "./Red.jsx";

//create your first component

class JSPedestrianLight extends React.PureComponent {
	state = {
		pedgreen: false,
		pedred: true,
	};

	transition = () => {
		if (this.state.pedred) {
			this.setState({
				pedgreen: true,
				pedred: false,
			});
			this.waitLongInterval();
			return;
		}

		if (this.state.pedgreen) {
			this.setState({
				pedgreen: false,
				pedred: true,
			});
			this.waitLongInterval();
			return;
		}
	};

	waitLongInterval() {
		setTimeout(this.transition, 10000);
	}

	componentDidMount() {
		this.waitLongInterval();
	}

	render() {
		const { pedgreen, pedred } = this.state;

		return (
			<div className="main">
				<div>
					<Red isOn={pedred} />
					<Green isOn={pedgreen} />
				</div>
			</div>
		);
	}
}

export default JSPedestrianLight;
