import UserStore from './UserStore';
import BoardStore from './BoardStore';
import UIStore from './UIStore';

import StoreCombiner from '../modules/StoreCombiner';

import applyMiddleware from '../modules/applyMiddleware';

export default function makeGlobalStorage(...middlewares) {
  return applyMiddleware(new StoreCombiner({
    user: new UserStore(),
    boards: new BoardStore(),
    ui: new UIStore(),
  }), ...middlewares);
}

// export default new StoreCombiner({
//   user: new UserStore(),
//   boards: new BoardStore(),
// });
