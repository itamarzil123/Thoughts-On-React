/** @jsx rehacked.transform */
import Rehacked from "./rehacked";

const Button = function () {
  return Rehacked.transform(
    "div",
    null,
    Rehacked.transform("button", null, "click me")
  );
};

Rehacked.render(
  Rehacked.transform(Button, null),
  document.getElementById("root")
);
