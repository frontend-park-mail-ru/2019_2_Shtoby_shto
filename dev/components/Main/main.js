/**
 * Генерирует главную страницу
 */
export function viewMain() {
  const template = require('./main.pug');
  const html = template();
  const application = document.getElementById('application');
  application.innerHTML = html;
}
