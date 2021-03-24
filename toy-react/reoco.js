let _components = [];
let _currentComponentId = 0;

class Component {
  constructor(state, props) {
    this.state = state;
    this.props = props;
    this.id = ++_currentComponentId;
  }
  setState(newState) {
    console.log("inside Component.setState:", newState);
    this.state = newState;
    update(this._nativeNode);
    // this.render();
  }
}

function createClassComponent(Class, props) {
  let newClassComponentInstance = new Class("null", props);
  if (!_components[newClassComponentInstance.id]) {
    _components.push(newClassComponentInstance);
  }
  return newClassComponentInstance;
}

function mountClassComponentEventListeners(instance) {
  // if (instance.props.onClick) {
  //   console.log("onClick event recognized in class component");
  // }
}

function mountFunctionComponentEventListeners(res, props) {
  console.log("res:", res);
  console.log("props:", props);

  if (props && props.onClick) {
    console.log("onClick event recognized in function component");
    res.addEventListener("click", props.onClick);
  }
}

function render(node, container) {
  if (container) {
    container.appendChild(node);
    _container = container;
  } else {
    document.body.appendChild(node);
  }
}

function update(node) {
  if (_container) {
    _container.appendChild(node);
  } else {
    document.body.appendChild(node);
  }
}

export default {
  Component,
  transform(elementType, props, ...children) {
    if (elementType.prototype instanceof Component) {
      let newClassComponent = createClassComponent(elementType, props);
      mountClassComponentEventListeners(newClassComponent);
      let res = newClassComponent.render();
      return res;
    } else if (typeof elementType === "function") {
      let res = elementType(props); // TODO: or elementType.call(this, children) ?!
      mountFunctionComponentEventListeners(res, props);
      return res;
    } else {
      let newNode = document.createElement(elementType);
      children.forEach((el) => {
        console.log("el:", el);
        if (el && el.nodeType) {
          newNode.appendChild(el);
        } else if (el) {
          let newTextNode = document.createTextNode(el);
          newNode.appendChild(newTextNode);
        } else {
        }
      });
      mountFunctionComponentEventListeners(newNode, props);
      return newNode;
    }
  },
  render,
};
