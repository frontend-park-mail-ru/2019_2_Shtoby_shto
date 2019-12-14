import Component from '../modules/Component';

import Modal from './Modal';
import Board from './Board';
import LoginPanel from './LoginPanel';

export default class BoardWithLanding extends Component {
  render() {
    const store = this.attrs.store;
    const state = this.attrs.store.state;
    const loggedIn = state.user.loggedIn ? true : false;

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
        loggedIn ? {tag: Board, attrs: {store}} : "",
      ],
    };
  }
}
