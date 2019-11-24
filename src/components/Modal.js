import './css/modal.css';

import Component from "../modules/Component"

export default class Modal extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: `modal ${this.attrs.shown ? '' : 'hidden'}`,
      },
      children: [{
        tag: 'div',
        attrs: {
          class: 'modal__content',
        },
        children: [this.attrs.content ],
      }]
    }
  }
}
