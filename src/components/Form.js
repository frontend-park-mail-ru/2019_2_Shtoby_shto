import Component from '../modules/Component';

export default class Form extends Component {
  constructor(ownProps) {
    super({tag: 'form', ...ownProps});
  }

  setup() {
    [...this.element.getElementsByTagName('button')].forEach((b) => {
      if (b.type === 'submit') {
        b.onclick = (e) => {
          e.preventDefault();
          this.executeOnSubmit();
        };
      }
    });
  }

  setOnSubmit(fun) {
    this.onSubmit = fun;
  }

  executeOnSubmit() {
    const submitArgs = {};
    [...this.element.getElementsByTagName('input')].forEach((input) => {
      submitArgs[input.name] = input.value;
    });

    this.onSubmit(submitArgs);
  }

  onSubmit(formValues) {}
}
