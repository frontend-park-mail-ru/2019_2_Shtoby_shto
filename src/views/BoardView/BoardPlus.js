import Component from '../../modules/Component';

export default class BoardPlus extends Component {
  constructor() {
    super({classes: ['board__plus', 'board__tab']});
  }

  generateContent() {
    return '+';
  }
}
