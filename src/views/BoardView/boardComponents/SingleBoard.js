import Component from '../../../modules/Component';

import GroupsDisplayer from './GroupsDisplayer';
import UserDisplayer from './UserDisplayer';

import Trashbin from './Trashbin';

import * as boardActions from '../../../actions/Board';

class UserPanel extends Component {
  constructor() {
    super({classes: ['user__panel']});

    this.addChild(new UserDisplayer({}, {}, {}));
  }
}

export default class SingleBoard extends Component {
  constructor() {
    super({classes: ['single__board']});

    this.addChild(new UserPanel(), 'users');
    this.addChild(new Trashbin());
  }

  generateContent() {
    return '<users></users><groups></groups>';
  }

  getMounts() {
    return {
      users: this.element.getElementsByTagName('users')[0],
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
      this.tryShowBoard(selectedBoard);
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
