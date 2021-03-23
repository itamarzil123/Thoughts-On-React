export default {
  transform(a, b, c) {
    if (typeof a === "function") {
      console.log(
        "transform is dealing with a component. calling it as a function"
      );
      console.log("the function is:", a);
      let res = a();
      return res;
    } else {
      console.log("a:", a);
      let el = document.createElement(a);
      console.log("element of type:", a, " created");
      return el;
    }
    console.log("b:", b);
    console.log("c:", c);
  },

  render(rehackedElement, container) {
    let res = rehackedElement();
    container.appendChildren(res);
  },
};
