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
import wsCardAttacher from './modules/WSCardAttacher';

const attacher = (router, store) => {
  const queryStr = document.location.search;

  const shortUrl = queryStr.substring(queryStr.indexOf("?") + 1, queryStr.length);
  // это шорт урл из ссылки

  const prikrepit = () => {console.log('прикрепляем юзера к доске')};

  if (store.getState().user.loggedIn) {
    prikrepit();
    router.open('/board');
    // console.log('прикрепляем юзера к доске');
  } else {
    let didStuff = false;
    store.subscribe((loggedIn) => {
      if (loggedIn && !didStuff) {
        prikrepit();
        // router.open('board'); <--- даже не нужно,
        // оно само переходит на /board после авторизации
        didStuff = true;
      }
    }, (state) => state.user.loggedIn);
    
    router.open('/login');
  }
}

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
    router.registerView('/ref', () => attacher(router, globalStorage));

    router.setAfterLogin('/board');
    router.setDefaultRoute('/').useHistory();

    this.globRouter = router;

    this.addComponent(router);

    // this.attacher = new WSCardAttacher(globalStorage);
    wsCardAttacher.setup(globalStorage);

    globalStorage.subscribe((state) => {
      const user = state.user;
      if (user.loggedIn) {
        if (!(wsCardAttacher.connected)) {
          wsCardAttacher.connect(user.id);
        }
      } else {
        wsCardAttacher.disconnect();
        // this.attacher.disconnect();
      }
    });

    this.addComponent(new Button({
      content: 'залогать состояние приложения',
      onclick: () => {
        console.log(globalStorage.getState());
      },
    }));

    const notifContainer = document.createElement('div');
    document.body.appendChild(notifContainer);

    notifContainer.style["position"] = "fixed";
    notifContainer.style["right"] = "5%";
    notifContainer.style["bottom"] = "5%";


    const makeNotif = () => {
      const elem = document.createElement('div');
      elem.innerText = "WOW ITS A NOTIFICATION VERY KRYUTO";

      return elem;
    }

    wsCardAttacher.addCallback(() => {
      notifContainer.appendChild(makeNotif());
    })
  }
};
