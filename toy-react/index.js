/** @jsx Rehacked.transform */

import Rehacked from "./rehacked.js";

const Button = function (props) {
  console.log("props inside Button:", props);
  if (props) {
    return <button>{props.text}</button>;
  } else {
    return <button> without props </button>;
  }
};

const Buttons = function () {
  return (
    <div>
      <Button text="click me"></Button>
      <Button text="click me 2"></Button>
    </div>
  );
};

Rehacked.render(<Buttons />, document.getElementById("root"));
