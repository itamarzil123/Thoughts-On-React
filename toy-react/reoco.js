let _components = [];
let _currentComponentId = 0;
let _container = null;
let _rootNode = null;
let _tree = null;

class Component {
  constructor(state, props, nativeNode) {
    this.state = state;
    this.props = props;
    this.id = ++_currentComponentId;
    this._nativeNode = nativeNode;
  }

  getComponentNativeNode() {
    const nativeNode = document.getElementById(this.id);
    return nativeNode;
  }
  setState(newState) {
    console.log("inside Component.setState:", newState);
    this.state = newState;
    update(this, this.getComponentNativeNode());
    // this.render();
  }
}

function createClassComponent(Class, props) {
  let newClassComponentInstance = new Class("null", props);
  if (!_components[newClassComponentInstance.id]) {
    // TODO: huh ? always true
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
  console.log("node in render:", node);
  _rootNode = node;
  if (container) {
    container.appendChild(node);
    _container = container;
  } else {
    document.body.appendChild(node);
  }
}

function update(thisClassComponent, nativeNode) {
  console.log("reconciling...");
  console.log("thisClassComponent:", thisClassComponent);
  console.log("nativeNode:", nativeNode);

  if (_container) {
    let _renderedComponent = thisClassComponent.render();
    let parent = nativeNode.parentNode;
    console.log("_renderedComponent:", _renderedComponent);
    nativeNode.parentNode.removeChild(nativeNode);
    parent.appendChild(_renderedComponent);
  } else {
    document.body.appendChild(nativeNode);
  }
}

export default {
  Component,
  transform(elementType, props, ...children) {
    if (elementType.prototype instanceof Component) {
      let newClassComponent = createClassComponent(elementType, props);
      mountClassComponentEventListeners(newClassComponent);
      let res = newClassComponent.render();

      res.setAttribute("id", newClassComponent.id);

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
