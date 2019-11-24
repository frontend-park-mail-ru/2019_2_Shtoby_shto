import Component from '../modules/Component';

export default class Input extends Component {
  constructor(ownProps) {
    super({tag: 'input', ...ownProps});

    this.element.value = ownProps.content || '';
    this.element.onblur = (e) => {
      this.executeOnBlur(e.target.value);
      this.element.onchange = null;
    };

    this.element.onchange = (e) => {
      this.executeOnChange(e.target.value);
    };

    // this.element.addEventListener('onblur', (e) => {
    //   this.executeOnFocusOut(e.target.value);
    // });
    // this.element.onfocusout = (e) => {
    //   console.log('focus lost');

    //   this.executeOnFocusOut(e.target.value);
    // };

    // this.element.addEventListener('change', (e) => {
    //   this.executeOnChange(e.target.value);
    // });
  }

  setOnBlur(fun) {
    this.onBlur = fun;

    return this;
  }

  setOnChange(fun) {
    this.onChange = fun;

    return this;
  }

  executeOnBlur(text) {
    this.onBlur(text);
  }

  executeOnChange(text) {
    this.onChange(text);
  }

  clear() {
    this.element.value = '';

    return this;
  }

  focus() {
    this.element.focus();

    return this;
  }

  onBlur(text) {}
  // onChange(text) {}
}
