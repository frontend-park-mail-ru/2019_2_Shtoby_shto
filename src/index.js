import './style.css';

import UserService from './modules/UserService';
import bus from './modules/bus';

import TrelloApp from './TrelloApp';

const localApiAddr = 'http://localhost';
const remoteApiAddr = 'https://iamneponyalapi.ru';

const deployVar = process.env.REMOTE_DEPLOY;

const apiAddr = (deployVar && remoteApiAddr) ||
    localApiAddr;

const us = new UserService(apiAddr);
us.registerEvents(bus);

const root = document.getElementById('app');
const app = new TrelloApp(root);
app.start();
