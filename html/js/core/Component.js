import ReactDOM from "./ReactDOM.js";
import dispatcher from "./Dispatcher.js";
import generateStructure from "./generateStructure.js";

function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  });
}

class Component {
  constructor(props) {
    this.state = {};
    this.props = props || {};
    // this.element = generateStructure(this.render());
    this.element = null;
    // this.structure = undefined;
    this.oldProps = this.props;
  }

  // setState(newState, callback) {
  //   const prevState = { ...this.state };
  //   this.state = { ...this.state, ...newState };
  //   if (this.hasChanged(prevState, this.state)) {
  //     dispatcher.dispatch(this);
  //     // this.update();
  //     if (callback) callback();
  //   }
  // }

  setState(newState, callback) {
    const shouldUpdate = this.shouldUpdate(newState);
    this.state = { ...this.state, ...newState };
    if (shouldUpdate) {
      this.update();
    }
    if (callback) {
      callback();
    }
  }

  setProps(newProps) {
   this.display(newProps)
  }

  update() {
    const newStructure = this.render();
    const newElement = generateStructure(newStructure);
    if (this.element && newElement) {
      // this.element.replaceWith(newElement);
      this.element.parentNode.replaceChild(newElement, this.element);
      this.element = newElement;
    }
  }

  // shouldUpdate(newProps) {
  //   return safeStringify(this.oldProps) !== safeStringify(newProps);
  // }

  shouldUpdate(newProps) {
    return JSON.stringify(newProps) !== JSON.stringify(this.oldProps);
  }

  // update() {
  //   if (this.element) {
  //     ReactDOM.updateComponent(this);
  //   } else {
  //     console.error("Component element is undefined, cannot update");
  //   }
  // }


  hasChanged(oldState, newState) {
    return safeStringify(oldState) !== safeStringify(newState);
  }

  

  // display(newProps) {
  //   if(this.shouldUpdate(newProps)){
  //     console.log("newProps", newProps);
  //     console.log("display called");
  //     this.oldProps = newProps;
  //     this.props = newProps;
  //     console.log("this.props", this.props);
  //     const newStructure = this.render();
  //     const newElement = generateStructure(newStructure);
  //     this.element.replaceWith(newElement);
  //     this.element = newElement;
  //   }
  // }

  display(newProps) {
    if (this.shouldUpdate(newProps)) {
      this.oldProps = this.props;
      this.props = newProps;
      const newStructure = this.render();
      const newElement = generateStructure(newStructure);
      if (this.element && this.element.parentNode) {
        this.element.parentNode.replaceChild(newElement, this.element);
        this.element = newElement;
      }
    }
  }

  componentDidMount() {}

  render() {
    throw new Error("render must be implemented");
  }
}

export default Component;
