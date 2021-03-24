/** @jsx Rehacked.transform */
import Rehacked from "./rehacked.js";

const Button = function () {
  return Rehacked.transform("button", null, "click me");
};

const Buttons = function () {
  return Rehacked.transform("div", null, Rehacked.transform(Button, null, "click me"), Rehacked.transform(Button, null, "click me 2"));
};

Rehacked.render(Rehacked.transform(Buttons, null), document.getElementById("root"));