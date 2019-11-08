import Component from '../../modules/Component';
// import StateComponent from '../../components/StateComponent';
import TransformingInput from '../../components/TransformingInput';


export default class BoardPlus extends TransformingInput {
  constructor() {
    super(
        new Component({
          content: '+', classes: ['board__tab', 'board__plus'],
        }),
        {classes: ['board__tab', 'plus__input']},
        'clear',
    );

    this.states['other'].element.onclick = this.toInput.bind(this);
  }
  // onBlur(text) {
  //   if (text) {
  //     board.create(text);
  //   }
  // }
}


// export default class BoardPlus extends StateComponent {
//   constructor() {
//     super();

//   }
// }
