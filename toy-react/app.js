/** @jsx rehacked.transform */

import Rehacked from "./rehacked";

const Button = function () {
  return (
    <div>
      <button>click me</button>
    </div>
  );
};

Rehacked.render(<Button />, document.getElementById("root"));
