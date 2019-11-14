import DNDComponent from '../../../modules/DNDComponent';

const img = require('./trash.png');

export default class Trashbin extends DNDComponent {
  constructor() {
    super({
      tag: 'img',
      attrs: {src: `${img}`},
      classes: ['trash'],
    });

    this.makeDroppable((_, placed) => {
      if ('del' in placed) placed.del();
    });
  }
}
