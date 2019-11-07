import UserApi from '../apis/UserApi';
import * as board from './Board';

import {fakeUser} from './fakes/fakeUser';
import {fake} from './fakes/fake';

const userApi = new UserApi();

function setUser(userModel) {
  return {
    type: 'SET_USER',
    loggedIn: true,
    ...userModel,
  };
}

export function getUser() {
  return function(dispatch) {
    if (!fake) {
      userApi.getUser().then((user) => {
        dispatch(setUser(user));
        dispatch(board.fetchBoards());
      });
    } else {
      dispatch(setUser(fakeUser));
      dispatch(board.fetchBoards());
    }
  };
}

export function login(login, password) {
  return function(dispatch) {
    if (!fake) {
      userApi.login(login, password).then(() => {
        dispatch(getUser());
      });
    } else {
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);
    }
  };
}

export function logout() {
  return function(dispatch) {
    dispatch(board.clearStore());
    dispatch({
      type: 'LOGGED_OUT',
    });
  };
}
