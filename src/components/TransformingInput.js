import StateComponent from './StateComponent';
import Input from './Input';

export default class TransformingInput extends StateComponent {
  constructor(otherState, inputProps, afterAction) {
    super();

    this.addStates({
      input: new Input(inputProps),
      other: otherState,
    });

    this.prevContent = this.states['input'].element.value;
    this.afterAction = afterAction || 'keep';

    this.isinput = false;

    this.states['input'].setOnBlur((text) => {
      this.executeOnBlur(text);
      if (this.isinput) {
        this.toOther();
        this.isinput = false;
      }
    });

    this.setState('other');
  }

  useDblclick() {
    this.states['other'].element.ondblclick = this.toInput.bind(this);

    return this;
  }

  useClick() {
    this.states['other'].element.onclick = this.toInput.bind(this);

    return this;
  }

  executeOnBlur(text) {
    this.onBlur(text);
  }

  toInput() {
    this.setState('input');
    this.isinput = true;
    this.states['input'].focus();
  }

  toOther() {
    if (this.isinput) {
      switch (this.afterAction) {
        case 'keep':
          break;
        case 'clear':
          this.states['input'].clear();
          break;
        case 'reset':
          this.states['input'].element.value = this.prevContent;
          this.prevContent = this.states['input'].element.value;
          break;
      }
      // if (this.doClear) {
      //   this.states['input'].clear();
      // }

      this.setState('other');
      this.isinput = false;
    }
  }

  // setOnChange(fun) {
  //   this.onChange = fun;
  // }

  setOnBlur(fun) {
    this.onBlur = fun;

    return this;
  }

  // onChange(text) {}
  onBlur(text) {}
}
