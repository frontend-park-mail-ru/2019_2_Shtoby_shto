import './style.css';

import {hashRouter, router} from '../dev/modules/router.js';
import {createHeader} from '../dev/components/Header/headMenu.js';

document.addEventListener('DOMContentLoaded', function() {
  createHeader();
  window.addEventListener('hashchange', hashRouter);
  window.addEventListener('load', router);
});
