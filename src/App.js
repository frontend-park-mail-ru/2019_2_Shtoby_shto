import './style.css';

import Component from './modules/Component';

import HistoryRouter from './components/HistoryRouter';
import BoardWithLanding from './components/BoardWithLanding';

function clearLocalStore() {
  localStorage.setItem('shtoby', '');
  localStorage.setItem('apikey', '');
}

class ResetButton extends Component {
  render() {
    return {
      tag: 'button',
      events: {
        click: clearLocalStore,
      },
      attrs: {
        style: {
          'position': 'fixed',
          'bottom': '5%',
          'z-index': 9999,
        }
      },
      children: [
        "press me to clean store",
      ]
    }
  }
}

export default class App extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'trello-app',
      },
      children: [{
        tag: HistoryRouter,
        attrs: {
          routes: {
            '/': {tag: BoardWithLanding, attrs: {store: this.attrs.store}},
            '/logout': () => {
              console.log('logging out now');
            },
          },
          default: '/',
        },
      },
      {
        tag: ResetButton
      },
  ],
    };
  }
}
