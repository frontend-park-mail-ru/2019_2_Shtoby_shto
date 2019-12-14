import './css/board.css';

import Component from '../modules/Component';

// TODO: тут класс который показывает инфу о доске
const genBoard = (board) => {
  return {
    tag: 'div',
    children: [`доска с айди ${board.id}`]
  }
};

export default class Board extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'board',
      },
      children: this.attrs.store.state.boards.map(genBoard),
    };
  }
}
