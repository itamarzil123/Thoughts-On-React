export default {
  transform(a, b, c) {
    if (typeof a === "function") {
      console.log("transform is dealing with a component. calling it as a function");
      console.log("the function is:", a);
      let res = a();
      console.log("returning: ", res);
      return res;
    } else {
      console.log("a:", a);
      console.log("b:", b);
      console.log("c:", c);
      let el;

      if (a === "div" || a === "button") {
        console.log("creating div or button");
        el = document.createElement(a);
      } else {
        console.log("creating text node");
        el = document.createTextNode(a);
        console.log("text node created:", el);
      }

      if (c.nodeType) {
        el.appendChild(c);
      } else {
        let newTextNode = document.createTextNode(c);
        el.appendChild(newTextNode);
      }

      console.log("returning: ", el);
      return el;
    }
  },

  render(node, container) {
    if (container) {
      container.appendChild(node);
    } else {
      document.body.appendChild(node);
    }
  }

};