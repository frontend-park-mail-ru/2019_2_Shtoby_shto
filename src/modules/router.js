import {profile} from '../components/Profile/profile';
import {reg} from '../components/Login/login';
import {createBoard} from '../components/Board/board';
import Utils from './services/Utils';
import {viewMain} from '../components/Main/main';

const routes = {
  '/': viewMain,
  '/profile': profile,
  '/login': reg,
  '/board': createBoard,
};

export const router = async () => {
  const request = Utils.parseRequestUrl();
  const parsedURL = (request.resource ? '/' + request.resource : '/');

  const page = routes[parsedURL];
  console.log(parsedURL);
  page();
};

export const hashRouter = async () => {
  console.log('hash changed');
  await router();
};
