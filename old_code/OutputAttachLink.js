import Component from '../src/modules/Component';

export default class OutputAttachLink extends Component {
  constructor(board) {
    super({
      tag: 'div',
    });

    console.log('output part: ', board);

    this.linkArea = new Component({
      tag: 'div',
      classes: ['board__attachURL'],
      content: `реферальная ссылка на эту доску: эточтоапи.рф/ref?${board}`,
    });

    this.addChild(this.linkArea);
  }
}
