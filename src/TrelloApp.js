import App from './modules/App';

import AuthRouter from './components/AuthRouter';
import TrelloHeader from './views/TrelloHeader/TrelloHeader';

import MainView from './views/IndexView/IndexView';
import LoginView from './views/LoginView/LoginView';
import BoardView from './views/BoardView/BoardView';
import ProfileView from './views/ProfileView/ProfileView';

import Button from './components/Button';

import makeGlobalStorage from './storage/makeGlobalStore';
import logger from './middlewares/logger';
import thunkDispatcher from './middlewares/thunkDispatcher';

import * as user from './actions/User';

import './style.css';

import {setFake} from './actions/fakes/fake';

export default class TrelloApp extends App {
  setup() {
    // this.enableDebug();
    setFake(false);

    const globalStorage = makeGlobalStorage(logger, thunkDispatcher);
    this.connect(globalStorage);
    this.synchronize('shtoby');

    const router = new AuthRouter()
        .addChild(new TrelloHeader(), 'prepend');

    router.registerView('/', new MainView());
    router.registerViewNoAuth('/login', new LoginView(), '/board');
    router.registerViewAuth('/board', new BoardView());
    router.registerViewAuth('/profile', new ProfileView());
    router.registerViewAuth('/logout', () => {
      globalStorage.dispatch(user.logout());
    });

    router.setAfterLogin('/board');
    router.setDefaultRoute('/').useHistory();

    this.globRouter = router;

    this.addComponent(router);

    this.addComponent(new Button({
      content: 'залогать состояние приложения',
      onclick: () => {
        console.log(globalStorage.getState());
      },
    }));
  }
};
