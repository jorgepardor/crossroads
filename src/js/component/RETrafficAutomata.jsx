import * as React from "react";
import { withStateMachine } from "react-automata";
import Green from "./Green.jsx";
import Yellow from "./Yellow.jsx";
import Red from "./Red.jsx";

class RETrafficLight extends React.PureComponent {
  transition = () => {
    this.props.transition("NEXT");
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

  render() {
    const { machineState } = this.props;

    return (
      <div>
        <Red isOn={machineState.value === "RED"} />
        <Yellow isOn={machineState.value === "YELLOW"} />
        <Green isOn={machineState.value === "GREEN"} />
      </div>
    );
  }
}

const stateChart = {
  initial: "RED",
  states: {
    GREEN: {
      on: {
        NEXT: "YELLOW"
      },
      onEntry: "waitMidInterval"
    },
    YELLOW: {
      on: {
        NEXT: "RED"
      },
      onEntry: "waitShortInterval"
    },
    RED: {
      on: {
        NEXT: "GREEN"
      },
      onEntry: "waitLongInterval"
    }
  }
};

export default withStateMachine(stateChart)(RETrafficLight);
