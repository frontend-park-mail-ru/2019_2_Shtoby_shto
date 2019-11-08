import Component from '../modules/Component';

const defaultButtonProps = {
  content: '',
  tag: 'button',
  onClick: undefined,
};

class Button extends Component {
  constructor(ownProps) {
    super({tag: 'button', ...ownProps});

    Object.assign(this.props, defaultButtonProps, ownProps);
  }

  setOnclick(fun) {
    this.props.onclick = fun;

    return this;
  }

  setup(props) {
    if (props.onclick) {
      this.element.onclick = () => props.onclick(this);
    }
  }
}

export default Button;

