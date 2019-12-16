import Component from '../../../modules/Component';
import {attachUser} from '../../../actions/Board';

export default class InputAttachLink extends Component {
  constructor() {
    super(
        new Component({
          tag: 'div',
        }),
    );

    const boardShortURL = new Component({
      tag: 'input',
    });

    const followButton = new Component({
      tag: 'button',
      content: 'Перейти',
    });

    followButton.element.onclick = () => {
      console.log('clicked');
      const link = boardShortURL.element.value;
      console.log(link);
      attachUser(link);
    };

    this.addChildren(boardShortURL);
    this.addChildren(followButton);
  }
}
