import Component from '../../modules/Component';
import BoardTabsContainer from './BoardTabsContainer';
import BoardPlus from './BoardPlus';

import * as board from '../../actions/Board';

export default class BoardTabsController extends Component {
  constructor() {
    super({classes: ['board__tab__controller']});

    this.addChildren({plus: new BoardPlus()});

    this.getChild('plus').setOnBlur((text) => {
      if (text) this.dispatch(board.create(text));
    });
  }

  generateContent() {
    return '<tabscontainer></tabscontainer><tabplus></tabplus>';
  }

  getMounts() {
    return {
      tabscontainer: this.element.getElementsByTagName('tabscontainer')[0],
      plus: this.element.getElementsByTagName('tabplus')[0],
    };
  }

  init() {
    this.subscribe((state) => state.boards);
  }

  stateUpdate(boards) {
    this.addChild(
        new BoardTabsContainer(this.dispatch.bind(this),
            ...boards),
        'tabscontainer'
    );
  }
}
