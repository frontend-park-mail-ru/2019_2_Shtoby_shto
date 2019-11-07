import Component from '../../modules/Component';
import BoardTabsContainer from './BoardTabsContainer';
import BoardPlus from './BoardPlus';

export default class BoardTabsController extends Component {
  constructor() {
    super({classes: ['board__tab__controller']});

    this.addChildren({
      tabscontainer: new BoardTabsContainer(),
      plus: new BoardPlus(),
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
}
