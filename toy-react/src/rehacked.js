export default {
  transform(elementType, props, ...children) {
    console.log("props:", props);

    if (typeof elementType === "function") {
      let res = elementType(props); // or elementType.call(this, children) ?!

      return res;
    } else {
      let newNode = document.createElement(elementType);
      children.forEach(el => {
        if (el.nodeType) {
          newNode.appendChild(el);
        } else {
          let newTextNode = document.createTextNode(el);
          newNode.appendChild(newTextNode);
        }
      });
      return newNode;
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