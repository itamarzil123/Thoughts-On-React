/** @jsx Reoco.transform */

import Reoco from "./reoco.js";

const Button = function (props) {
  console.log("props inside Button:", props);
  if (props) {
    return <button>{props.text}</button>;
  } else {
    return <button> without props </button>;
  }
};

class MyClassComponent extends Reoco.Component {
  constructor(state, props) {
    super(state, props);
    this.state = state;
    this.props = props;
  }

  handleClick = (newState) => {
    console.log("inside handleClick: newState:", newState);
    this.setState(newState);
  };

  render() {
    console.log("this:", this);
    return (
      <button
        onClick={() => {
          console.log("---> click event fired inside class component render");
          this.handleClick("updated state");
        }}
      >
        {" "}
        {this.props.text}, this.state: {this.state}
      </button>
    );
  }
}

const Buttons = function () {
  return (
    <div>
      <Button
        text="click me"
        onClick={() => {
          console.log("---> click event fired in function component");
        }}
      ></Button>
      <Button text="click me 2"></Button>
      <MyClassComponent text="myClassComponent with text prop"></MyClassComponent>
    </div>
  );
};

Reoco.render(<Buttons />, document.getElementById("root"));
