import Component from '../modules/Component';

export default class StateComponent extends Component {
  constructor(ownProps) {
    super(ownProps);

    this.states = {};
    this.currentState = undefined;
  }

  render() {}

  addState(name, comp) {
    this.addChild(comp);
    this.states[name] = comp;

    return this;
  }

  addStates(states) {
    Object.entries(states).forEach(([state, component]) => {
      this.addChild(component, null);
      this.states[state] = component;
    });

    return this;
  }

  removeState(name) {
    this.deleteChild(this.states[name]);
    this.states[name] = undefined;

    return this;
  }

  setState(name) {
    if (this.states[name]) {
      this.currentState = this.states[name];
      this.applyState();
    } else {
      console.log('no such state:', name);
    }

    return this;
  }

  applyState() {
    if (this.currentState.element !== this.element) {
      this.currentState.replaceElem(this.element);
      this.element = this.currentState.element;
    }
  }

  setup() {
    if (this.currentState) {
      this.currentState.render();
    }
  }
}
