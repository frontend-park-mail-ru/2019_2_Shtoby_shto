import Component from '../../modules/Component';

import * as board from '../../actions/Board';

// class BoardTab extends Component {
//   constructor(ownProps) {
//     super({classes: ['board__tab']});

//     this.props.name = ownProps.name || '';
//   }

//   generateContent(p) {
//     return `<button>x</button><div>${p.name}</div>`;
//   }
// }

class BoardPlus extends Component {
  constructor() {
    super({classes: ['board__tab', 'tab__plus']});

    this.props.state = 'plus';
  }

  setup(p) {
    // это очень тупо, я переделаю
    switch (p.state) {
      case 'plus':
        this.element.getElementsByTagName('button')[0].onclick = () => {
          this.update({state: 'input'});
        };
        break;
      case 'input':
        const input = this.element.getElementsByTagName('input')[0];
        const revert = () => {
          input.onblur = undefined;
          input.onchange = undefined;
          this.update({state: 'plus'});
        };

        input.focus();
        input.onblur = revert;
        input.onchange = (e) => {
          // тут нужно какие-нибудь данные с формы проставлять
          this.dispatch(board.create(e.target.value));
          revert();
        };
        break;
    }
  }

  generateContent(p) {
    switch (p.state) {
      case 'plus':
        return '<button>+</button>';
      case 'input':
        return '<input></input>';
    }
  }
}

class BoardTabs extends Component {
  constructor() {
    super({boards: [], classes: ['board__tabs']});
  }

  // тут будет по-другому генерироваться контент, просто
  // показываю что вот так можно
  generateContent(p) {
    return p.boards
        .map((b) => `<div>${b.name}|</div>`)
        .reduce((prev, next) => prev + next, '');
  }
}

// контейнер для вкладок досок
export default class BoardTabContainer extends Component {
  constructor() {
    super({classes: ['board__tabs']});

    this.addChild(new BoardTabs());
    this.addChild(new BoardPlus());
  }

  init() {
    this.subscribe((state) => state.boards);
  }

  stateUpdate(boards) {
    // не самый лучший подход - пусть лучше наверное
    // BoardTabs ловит изменения в сторе
    // и сам ре-рендерится
    this.getChild(0).update({boards: boards});
  }
}
