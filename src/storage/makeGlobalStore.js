import UserStore from './UserStore';
import BoardStore from './BoardStore';

import StoreCombiner from '../modules/StoreCombiner';

import applyMiddleware from '../modules/applyMiddleware';

export default function makeGlobalStorage(...middlewares) {
  return applyMiddleware(new StoreCombiner({
    user: new UserStore(),
    boards: new BoardStore(),
  }), ...middlewares);
}

// export default new StoreCombiner({
//   user: new UserStore(),
//   boards: new BoardStore(),
// });
