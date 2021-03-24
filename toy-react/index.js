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
  render() {
    console.log("this:", this);
    return <div> {this.props.text}</div>;
  }
}

const Buttons = function () {
  return (
    <div>
      <Button text="click me"></Button>
      <Button text="click me 2"></Button>
      <MyClassComponent text="myClassComponent with text prop"></MyClassComponent>
    </div>
  );
};

Reoco.render(<Buttons />, document.getElementById("root"));
