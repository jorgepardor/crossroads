import * as React from "react";
import { withStateMachine } from "react-automata";
import Green from "./Green.jsx";
import Red from "./Red.jsx";

class JSPedestrianLight extends React.PureComponent {
  transition = () => {
    this.props.transition("NEXT");
  };

  waitLongInterval() {
    setTimeout(this.transition, 10000);
  }

  render() {
    const { machineState } = this.props;

    return (
      <div>
        <Red isOn={machineState.value === "RED"} />
        <Green isOn={machineState.value === "GREEN"} />
      </div>
    );
  }
}

const stateChart = {
  initial: "RED",
  states: {
    RED: {
      on: {
        NEXT: "GREEN"
      },
      onEntry: "waitLongInterval"
    },
    GREEN: {
      on: {
        NEXT: "RED"
      },
      onEntry: "waitLongInterval"
    }
  }
};

export default withStateMachine(stateChart)(JSPedestrianLight);
