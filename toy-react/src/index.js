/** @jsx Reoco.transform */
import Reoco from "./reoco.js";

const Button = function (props) {
  console.log("props inside Button:", props);

  if (props) {
    return Reoco.transform("button", null, props.text);
  } else {
    return Reoco.transform("button", null, " without props ");
  }
};

class MyClassComponent extends Reoco.Component {
  constructor(state, props) {
    super(state, props);

    this.handleClick = newState => {
      console.log("inside handleClick: newState:", newState);
      this.setState(newState);
    };

    this.state = state;
    this.props = props;
  }

  render() {
    console.log("this:", this);
    return Reoco.transform("button", {
      onClick: () => {
        console.log("---> click event fired inside class component render");
        this.handleClick("updated state");
      }
    }, " ", this.props.text, ", this.state: ", this.state);
  }

}

const Buttons = function () {
  return Reoco.transform("div", null, Reoco.transform(Button, {
    text: "click me",
    onClick: () => {
      console.log("---> click event fired in function component");
    }
  }), Reoco.transform(Button, {
    text: "click me 2"
  }), Reoco.transform(MyClassComponent, {
    text: "myClassComponent with text prop"
  }));
};

Reoco.render(Reoco.transform(Buttons, null), document.getElementById("root"));