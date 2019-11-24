import Component from '../modules/Component';

import Modal from './Modal';
import Board from './Board';
import LoginPanel from './LoginPanel';

export default class BoardWithLanding extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'board-page',
      },
      children: [
        {
          tag: Modal,
          attrs: {
            shown: this.attrs.store.state.user.loggedIn,
            content: {
              tag: LoginPanel
            }
          }
        },
        { tag: Board },
      ]
    }
  }
}
