import './style.css';

import {hashRouter, router} from './modules/router.js';
import {createHeader} from './components/Header/headMenu.js';

document.addEventListener('DOMContentLoaded', function() {
  createHeader();
  window.addEventListener('hashchange', hashRouter);
  window.addEventListener('load', router);
});
