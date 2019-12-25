import Store from '../modules/Store';

import StoreCombiner from '../modules/StoreCombiner';

import applyMiddleware from '../modules/applyMiddleware';

import userReducer from './reducers/user/userReducer';
import boardReducer from './reducers/board/boardReducer';
import uiReducer from './reducers/ui/uiReducer';
import notificationsReducer from './reducers/notifications/notificationsReducer';

export default function makeGlobalStorage(...middlewares) {
  return applyMiddleware(new StoreCombiner({
    user: new Store({}, userReducer),
    boards: new Store([], boardReducer),
    ui: new Store({}, uiReducer),
    notifications: new Store([], notificationsReducer)
  }), ...middlewares);
}
