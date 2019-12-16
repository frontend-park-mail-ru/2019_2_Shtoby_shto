import DNDComponent from '../../../modules/DNDComponent';
import Component from '../../../modules/Component';

const img = require('./trash.png');

export default class Trashbin extends DNDComponent {
  constructor() {
    super({
      tag: 'div',
    });

    this.msg = new Component({
      tag: 'h4',
      classes: ['trash', 'trash__msg'],
      attrs: {hidden: true},
      content: 'Скройся уже',
    });

    this.addChild(this.msg);

    this.addChild(new Component({
      tag: 'img',
      attrs: {src: `${img}`},
      classes: ['trash'],
    }));

    this.makeDroppable((_, placed) => {
      if ('del' in placed) {
        placed.del();
      }
    });
  }
}
