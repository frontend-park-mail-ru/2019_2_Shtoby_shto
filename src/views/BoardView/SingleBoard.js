import Component from '../../modules/Component';

import GroupsDisplayer from './GroupsDisplayer';

import Trashbin from './Trashbin';

import * as board from '../../actions/Board';

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

  init() {
    this.subscribe((state) => {
      return {
        selected: state.ui.selectedIndex,
        board: state.boards[state.ui.selectedIndex - 1],
      };
    });
  }

  stateUpdate(stateUpdate) {
    if (stateUpdate.selected) {
      if (stateUpdate.board) {
        if (stateUpdate.board.got) {
          this.addChild(new GroupsDisplayer(this.dispatch.bind(this),
              ...stateUpdate.board.cardGroups), 'groups');
        } else {
          console.log(stateUpdate.board);
          this.dispatch(board.getBoard(stateUpdate.board.id));
        }
      } else {
        this.deleteChild(this.getChild('groups'));
      }
    }
  }
}
