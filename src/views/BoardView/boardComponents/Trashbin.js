import DNDComponent from '../../../modules/DNDComponent';
import Component from '../../../modules/Component';

const img = require('./trash.png');

export default class Trashbin extends DNDComponent {
  constructor() {
    super({
      tag: 'div',
    });

    const msg = new Component({
      tag: 'h4',
      classes: ['trash', 'trash__msg'],
      content: 'Объект удален, ',
    }).addChild(new Component({
      tag: 'a',
      attrs: {href: '/board'},
      content: 'Восстановить',
    }));
    this.addChild(msg);
    this.children[0].component.element.hidden = true;

    this.addChild(new Component({
      tag: 'img',
      attrs: {src: `${img}`},
      classes: ['trash'],
    }));

    this.makeDroppable((_, placed) => {
      if ('del' in placed) {
        this.children[0].component.element.hidden = false;
        console.log(placed)
        placed.element.style = 'display: none';
        const timerId = setTimeout(placed.del.bind(placed), 5000);
        setTimeout(() => {this.children[0].component.element.hidden = true}, 5000);
        this.children[0].component.children[0].component.element.onclick = (e) => {
          clearTimeout(timerId);
          placed.element.style = 'display: flex';
          this.children[0].component.element.hidden = true;
        };
      }
    });
  }
}
