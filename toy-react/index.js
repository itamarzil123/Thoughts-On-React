/** @jsx Rehacked.transform */

import Rehacked from "./rehacked.js";

const Button = function () {
  return (
    <div>
      <button>click me</button>
    </div>
  );
};

Rehacked.render(<Button />, document.getElementById("root"));
