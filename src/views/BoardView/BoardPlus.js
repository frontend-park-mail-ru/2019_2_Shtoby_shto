// import Component from '../../modules/Component';
import StateComponent from '../../components/StateComponent';

class Input extends Component {
  constructor(ownProps) {
    super({tag: 'input'}, ...ownProps);

    this.element
  }

  setOnBlur(fun) {
    this.onblur = fun;
  }

  executeOnBlur(text) {
    this.onblur(text);
  }
}

class TransformingInput extends StateComponent {
  constructor(otherState) {
    super();

    // this.addStates({
      // input: new Component
    // })
  }
}

export default class BoardPlus extends StateComponent {
  constructor() {
    super();

  }
}
