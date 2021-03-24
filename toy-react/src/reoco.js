let _components = [];
let _currentComponentId = 0;

class Component {
  constructor(state, props) {
    this.state = state;
    this.props = props;
    this.id = ++_currentComponentId;
  }

  setState(newState) {
    this.state = newState;
  }

  render() {
    return transform("div", null, " rendered Component ");
  }

}

function createClassComponent(Class, props) {
  let newClassComponentInstance = new Class(null, props);

  if (!_components[newClassComponentInstance.id]) {
    _components.push(newClassComponentInstance);
  }

  return newClassComponentInstance;
}

export default {
  Component,

  transform(elementType, props, ...children) {
    console.log("props:", props);
    console.log("elementType:", elementType);

    if (elementType.prototype instanceof Component) {
      console.log("elementType instanceof Component true");
      let newClassComponent = createClassComponent(elementType, props);
      let res = newClassComponent.render();
      return res;
    } else if (typeof elementType === "function") {
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