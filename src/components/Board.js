import './css/board.css';

import Component from '../modules/Component';

// TODO: тут класс который показывает инфу о доске
const genBoard = (board) => {
  console.log('individual board render');

  return {
    tag: 'div',
    children: [`доска с айди ${board.id}`],
    key: board.id,
  }
};

export default class Board extends Component {
  render() {
    console.log('board render');

    return {
      tag: 'div',
      attrs: {
        class: 'board',
      },
      children: [
        ...this.attrs.store.state.boards.map(genBoard),
      ],
      key: 'board',
    };
  }
}
