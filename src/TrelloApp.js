import App from './modules/App';

import AuthRouter from './components/AuthRouter';
import TrelloHeader from './views/TrelloHeader/TrelloHeader';

import MainView from './views/IndexView/IndexView';
import LoginView from './views/LoginView/LoginView';
import BoardView from './views/BoardView/BoardView';
import ProfileView from './views/ProfileView/ProfileView';

import StoreCombiner from './modules/StoreCombiner';
import UserStore from './storage/UserStore';
import BoardStore from './storage/BoardStore';

import applyMiddleware from './modules/applyMiddleware';
import logger from './middlewares/logger';
import thunkDispatcher from './middlewares/thunkDispatcher';

import Button from './components/Button';

import './style.css';

import {setFake} from './actions/fakes/fake';

export default class TrelloApp extends App {
  setup() {
    this.enableDebug();
    setFake(true);

    let globalStorage = new StoreCombiner({
      user: new UserStore(),
      boards: new BoardStore(),
    });

    globalStorage = applyMiddleware(globalStorage, logger, thunkDispatcher);

    console.log(globalStorage);

    this.connect(globalStorage);

    const router = new AuthRouter()
        .addChild(new TrelloHeader(), 'prepend');

    router.registerView('/', false, new MainView());
    router.registerView('/login', false, new LoginView());
    router.registerView('/board', true, new BoardView());
    router.registerView('/profile', true, new ProfileView());

    router.setDefaultRoute('/').useHistory().startRouting();

    this.addComponent(router);

    this.addComponent(new Button({
      content: 'залогать состояние приложения',
      onclick: () => {
        console.log(globalStorage.getState());
      },
    }));
  }
};
