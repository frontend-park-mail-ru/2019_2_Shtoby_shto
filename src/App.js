import './style.css';

import Component from './modules/Component';
import Router from './components/Router';

class Index extends Component {
  render() {
    return {
      tag: 'div',
      children: [
        {tag: 'div', children: ['index page']},
        {tag: 'a', children: ['go to board'], attrs: {href: '/board'}},
      ]
    }
  }
}

class Board extends Component {
  render() {
    return {
      tag: 'div',
      children: [
        {tag: 'div', children: ['board page']},
        {tag: 'a', children: ['go to index'], attrs: {href: '/'}},
      ]
    }
  }
}


export default class App extends Component {
  render() {
    return {
      tag: 'trello-app',
      children: [{
        tag: Router,
        attrs: {
          routes: {
            '/': { tag: Index },
            '/board': { tag: Board },
            '/profile': 'profile page',
          },
          default: '/',
          history: true,
        }
      }]
    }
  }
}