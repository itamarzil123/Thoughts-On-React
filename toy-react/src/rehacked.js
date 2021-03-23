export default {
  transform(a, b, c) {
    if (typeof a === "function") {
      console.log(
        "transform is dealing with a component. calling it as a function"
      );
      console.log("the function is:", a);
      a();
    } else {
      console.log("a:", a);
      document.createElement(a);
      console.log("element of type:", a, " created");
    }
    console.log("b:", b);
    console.log("c:", c);
  },

  render(a, b) {
    console.log("a:", a);
    console.log("b:", b);
  },
};
