import UserApi from '../apis/UserApi';
import * as board from './Board';
import * as ui from './UI';

// import {fakeUser} from './fakes/fakeUser';
import {fake} from './fakes/fake';

const userApi = new UserApi();

function setUser(userModel) {
  return {
    type: 'SET_USER',
    photo_id: null,
    ...userModel,
  };
}

function initUser(userModel) {
  return function(dispatch) {
    dispatch(setUser(userModel));
    dispatch(board.fetchBoards());
  };
}


// export function getUser() {
//   return function(dispatch) {
//     if (!fake) {
//       userApi.getUser().then((user) => {
//         dispatch(setUser(user));
//         dispatch(board.fetchBoards());
//       });
//     } else {
//       dispatch(setUser(fakeUser));
//       dispatch(board.fetchBoards());
//     }
//   };
// }

function loginFailed() {
  return {
    type: 'LOGIN_FAILED',
  };
}

export function login(login, password) {
  return function(dispatch) {
    if (!fake) {
      userApi.login(login, password)
          .then((userModel) => {
            // dispatch(getUser());
            dispatch(initUser(userModel));
          })
          .catch(() => {
            dispatch(loginFailed());
          });
    } else {
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);
    }
  };
}

function registerFailed() {
  return {
    type: 'REGISTRATION_FAILED',
  };
}

export function register(loginVal, password) {
  return function(dispatch) {
    if (!fake) {
      userApi.register(loginVal, password)
          .then(() => {
            // console.log('registered succesfully, logging in now');
            // userApi.clearToken();
            dispatch(login(loginVal, password));
          })
          .catch(() => {
            dispatch(registerFailed());
          });
    } else {

    }
  };
}

export function logout() {
  return function(dispatch) {
    // userApi.logout()
        // .then(() => {
          dispatch(ui.reset());
          dispatch(board.clearStore());
          dispatch({
            type: 'LOGGED_OUT',
          });
        // });
  };
}

export function updateLogin(id, newLogin) {
  return function(dispatch, getState) {
    userApi.update({id: id, login: newLogin})
        .then(() => {
          const oldUser = getState().user;
          dispatch(setUser({...oldUser, login: newLogin}));
        })
        .catch(() => {
          console.log('не мог обновить юзера');
        });
  };
}
