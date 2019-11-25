import Component from '../../../modules/Component';
import BoardTabsContainer from './BoardTabsContainer';
import BoardPlus from './BoardPlus';

import * as board from '../../../actions/Board';
// import * as uiActions from '../../../actions/UI';


export default class BoardTabsController extends Component {
  constructor() {
    super({classes: ['board__tab__controller']});

    this.addChildren({plus: new BoardPlus()});

    this.getChild('plus').setOnBlur((text) => {
      if (text) this.dispatch(board.create(text));
    }).setOnChange((text) => {
      if (text) this.dispatch(board.create(text));
    });

    this.selectedIndex = undefined;

    // this.element.onclick = () => {
    //   this.dispatch(uiActions.deselectBoard());
    // };
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

  fillBoardTabs(boards) {
    const boardTabs = new BoardTabsContainer(
        this.dispatch.bind(this),
        ...boards
    );

    if (typeof this.selectedIndex !== 'undefined') {
      boardTabs.selectTab(this.selectedIndex);
    }

    this.addChild(
        boardTabs,
        'tabscontainer'
    );
  }

  init(state) {
    this.selectedIndex = state.ui.selectedIndex;
    this.fillBoardTabs(state.boards);

    this.subscribe((state) => {
      return {boards: state.boards};
    });
    this.subscribe((state) => {
      return {index: state.ui.selectedIndex};
    });
  }

  stateUpdate(stateUpdate) {
    if ('boards' in stateUpdate) {
      this.fillBoardTabs(stateUpdate.boards);
    } else if ('index' in stateUpdate) {
      this.selectedIndex = stateUpdate.index;
      this.getChild('tabscontainer').selectTab(this.selectedIndex);
    }
  }
}
