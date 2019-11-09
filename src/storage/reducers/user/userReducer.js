export default function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: true,
        login: action.login,
        id: action.id,
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
      return {};
    case 'LOGIN_FAILED':
      return {
        loginFailed: true,
      };
    case 'REGISTRATION_FAILED':
      return {
        signupFailed: true,
      };
    default:
      return state;
  }
};
