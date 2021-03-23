(() => {
  "use strict";
  const e = {
    transform(e, o, n) {
      if ("function" == typeof e) {
        console.log(
          "transform is dealing with a component. calling it as a function"
        ),
          console.log("the function is:", e);
        let o = e();
        return console.log("returning: ", o), o;
      }
      {
        let t;
        if (
          (console.log("a:", e),
          console.log("b:", o),
          console.log("c:", n),
          "div" === e || "button" === e
            ? (console.log("creating div or button"),
              (t = document.createElement(e)))
            : (console.log("creating text node"),
              (t = document.createTextNode(e)),
              console.log("text node created:", t)),
          n.nodeType)
        )
          t.appendChild(n);
        else {
          let e = document.createTextNode(n);
          t.appendChild(e);
        }
        return console.log("returning: ", t), t;
      }
    },
    render(e, o) {
      o ? o.appendChild(e) : document.body.appendChild(e);
    },
  };
  e.render(
    e.transform(function () {
      return e.transform("div", null, e.transform("button", null, "click me"));
    }, null),
    document.getElementById("root")
  );
})();
