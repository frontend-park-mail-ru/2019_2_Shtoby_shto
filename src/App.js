import './style.css';

import Component from './modules/Component';
import HistoryRouter from './components/HistoryRouter';

class Index extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'index-view'
      },
      children: [
        {tag: 'div', children: ['index page']},
        {tag: 'div', attrs: {style: {'display': 'flex', 'flex-direction': 'column'}}, children: [
          {tag: 'a', children: ['go to board'], attrs: {href: '/board'}},
          {tag: 'a', children: ['logout'], attrs: {href: '/logout'}},
        ]},
      ]
    }
  }
}

class Board extends Component {
  render() {
    return {
      tag: 'div',
      attrs: {
        class: 'board-view'
      },
      children: [
        {tag: 'div', children: ['board page']},
        {tag: 'div', attrs: {style: {'display': 'flex', 'flex-direction': 'column'}}, children: [
          {tag: 'a', children: ['go to index'], attrs: {href: '/'}},
          {tag: 'a', children: ['logout'], attrs: {href: '/logout'}},
        ]},
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
            '/': { tag: Index },
            '/board': { tag: Board },
            '/profile': 'profile page',
            '/logout': () => {console.log('logging out now')},
          },
          default: '/',
        }
      }]
    }
  }
}