import './css/board.css';

import Component from '../modules/Component';

export default class Board extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'board',
      },
      children: [ 'типа доска' ],
    }
  }
}
