import Store from '../modules/Store';

export default class UserStore extends Store {
  constructor() {
    super({});
  }

  reducer(state, action) {
    switch (action.type) {
      case 'LOGGED_IN':
        return {
          loggedIn: true,
          id: action.id,
          login: action.login,
        };
      case 'REDACT_USER':
        const oldStateCopy = {...state};
        let changed = false;

        Object.entries(action).forEach(([name, val]) => {
          if (name === 'type') return;

          if (oldStateCopy[name]) {
            if (oldStateCopy[name] !== val) {
              oldStateCopy[name] = val;
              changed = true;
            }
          } else {
            oldStateCopy[name] = val;
            changed = true;
          }
        });

        return changed ? oldStateCopy : state;
      case 'LOGGED_OUT':
        return {
          loggedIn: false,
        };
      default:
        return state;
    }
  }
}
