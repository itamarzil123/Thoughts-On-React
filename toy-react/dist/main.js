(() => {
  "use strict";
  const e = {
      transform(e, n, ...t) {
        if ("function" == typeof e) return e();
        {
          let n = document.createElement(e);
          return (
            console.log("children:", t),
            t.forEach((e) => {
              if (e.nodeType) n.appendChild(e);
              else {
                let t = document.createTextNode(e);
                n.appendChild(t);
              }
            }),
            n
          );
        }
      },
      render(e, n) {
        n ? n.appendChild(e) : document.body.appendChild(e);
      },
    },
    n = function () {
      return e.transform("button", null, "click me");
    };
  e.render(
    e.transform(function () {
      return e.transform(
        "div",
        null,
        e.transform(n, null, "click me"),
        e.transform(n, null, "click me 2")
      );
    }, null),
    document.getElementById("root")
  );
})();
