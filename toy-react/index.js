/** @jsx Rehacked.transform */

import Rehacked from "./rehacked.js";

const Button = function () {
  return <button>click me</button>;
};

const Buttons = function () {
  return (
    <div>
      <Button>click me</Button>
      <Button>click me 2</Button>
    </div>
  );
};

Rehacked.render(<Buttons />, document.getElementById("root"));
