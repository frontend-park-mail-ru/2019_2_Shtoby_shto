import Component from '../../../modules/Component';

import GroupsDisplayer from './GroupsDisplayer';

import Trashbin from './Trashbin';

import * as boardActions from '../../../actions/Board';
// import * as uiActions from '../../../actions/UI';

export default class SingleBoard extends Component {
  constructor() {
    super({classes: ['single__board']});

    this.addChild(new Trashbin());
  }

  generateContent() {
    return '<groups></groups>';
  }

  getMounts() {
    return {
      groups: this.element.getElementsByTagName('groups')[0],
    };
  }

  tryShowBoard(board) {
    if (board.got) {
      this.showBoard(board);
    } else {
      this.dispatch(boardActions.getBoard(board.id));
    }
  }

  showBoard(board) {
    this.addChild(new GroupsDisplayer(this.dispatch.bind(this),
        ...board.cardGroups), 'groups');
  }

  init(state) {
    const selectedIndex = state.ui.selectedIndex;

    if (typeof selectedIndex !== 'undefined') {
      const selectedBoard = state.boards[selectedIndex];
      // if (typeof selectedBoard !== 'undefined') {
      this.tryShowBoard(selectedBoard);
      // } else {
      // this.dispatch(uiActions.deselectBoard());
      // }
    }

    this.subscribe((state) => state.boards[state.ui.selectedIndex]);
  }

  stateUpdate(board) {
    if (board) {
      this.tryShowBoard(board);
    } else {
      this.deleteChild(this.getChild('groups'));
    }
  }
}
