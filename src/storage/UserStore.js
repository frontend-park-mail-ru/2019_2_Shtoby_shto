import Store from '../modules/Store';

export default class UserStore extends Store {
  constructor() {
    super({});
  }

  reducer(state, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          loggedIn: true,
          login: action.login,
          id: action.id,
        };
      case 'LOGIN_FAILED':
        return {
          loggedIn: false,
          loginFailed: true,
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
