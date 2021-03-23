/** @jsx rehacked.transform */
import Rehacked from "./rehacked";

const Button = function () {
  return rehacked.transform(
    "div",
    null,
    rehacked.transform("button", null, "click me")
  );
};

Rehacked.render(
  rehacked.transform(Button, null),
  document.getElementById("root")
);
