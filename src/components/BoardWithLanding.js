import Component from '../modules/Component';

import Modal from './Modal';
import Board from './Board';
import LoginPanel from './LoginPanel';

export default class BoardWithLanding extends Component {
  render() {
    const store = this.attrs.store;

    return {
      tag: 'div',
      attrs: {
        class: 'board-page',
      },
      children: [
        {
          tag: Modal,
          attrs: {
            shown: store.state.user.loggedIn ? false : true,
            content: {
              tag: LoginPanel,
              attrs: {store},
            },
          },
        },
        {tag: Board},
      ],
    };
  }
}
