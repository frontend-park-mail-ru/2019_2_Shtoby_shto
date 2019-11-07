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

    router.registerView('/', false, new MainView());
    router.registerView('/login', false, new LoginView());
    router.registerView('/board', true, new BoardView());
    router.registerView('/profile', true, new ProfileView());
    router.registerView('/logout', true, () => {
      globalStorage.dispatch(user.logout());
      router.open('/');
    });
    router.setAfterLogin('/profile');

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
