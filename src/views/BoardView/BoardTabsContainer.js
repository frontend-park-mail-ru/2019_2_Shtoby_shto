import Component from '../../modules/Component';

export default class BoardTabsContainer extends Component {
  constructor() {
    super({classes: ['board__tabs']});
  }

  generateContent() {
    return [1, 2, 3].map(
        (i) => `<div class='board__tab'>board${i}</div>`)
        .reduce((div, prevDiv) => div + prevDiv);
  }
}
