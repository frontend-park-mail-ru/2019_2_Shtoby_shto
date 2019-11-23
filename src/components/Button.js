import Component from "../modules/Component";

export default class Button extends Component {
  render() {
    return {
      tag: 'button',
      children: [`${this.attrs.text}`],
      attrs: {
        ...(this.attrs.elAttrs || {}),
      },
      ...(this.attrs.onclick ? {events: {click: this.attrs.onclick}}: {})
    };
  }
}
