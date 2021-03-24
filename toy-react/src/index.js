/** @jsx Rehacked.transform */
import Rehacked from "./rehacked.js";

const Button = function (props) {
  console.log("props inside Button:", props);

  if (props) {
    return Rehacked.transform("button", null, props.text);
  } else {
    return Rehacked.transform("button", null, " without props ");
  }
};

const Buttons = function () {
  return Rehacked.transform("div", null, Rehacked.transform(Button, {
    text: "click me"
  }), Rehacked.transform(Button, {
    text: "click me 2"
  }));
};

Rehacked.render(Rehacked.transform(Buttons, null), document.getElementById("root"));