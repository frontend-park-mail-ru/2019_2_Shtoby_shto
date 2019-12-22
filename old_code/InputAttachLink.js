import Component from '../src/modules/Component';
import {attachUser} from '../src/actions/Board';

export default class InputAttachLink extends Component {
  constructor() {
    super(
        new Component({
          tag: 'div',
        }),
    );

    const helpText = new Component({
      tag: 'div',
      classes: ['text__tag__controller'],
      content: `Для присоединения к существующей доске
      введите URL:`,
    });

    const boardShortURL = new Component({
      tag: 'input',
      classes: ['url__tag__controller'],
    });
    const followButton = new Component({
      tag: 'button',
      content: 'Перейти',
    });

    followButton.element.onclick = () => {
      console.log('clicked');
      const link = boardShortURL.element.value;
      console.log(link);
      this.dispatch(attachUser(link));
    };

    this.addChildren(helpText);
    this.addChildren(boardShortURL);
    this.addChildren(followButton);
  }
}
