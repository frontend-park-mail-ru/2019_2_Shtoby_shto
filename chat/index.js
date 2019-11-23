import socket from './WS.js';

socket.wsSend('getChats');
socket.onmessage = function(event) {
  const inputField = document.getElementsByClassName('chat-frame__input')[0];
  const msg = document.createElement('div');
  msg.innerHTML = `<div class="container answer">
    <img src="" alt="Avatar" class="chat-frame__answer-avatar">
    <p>eeeeeeeeeeee</p>
    <span class="chat-frame__answer-time">11:05</span>
</div>`;
  inputField.before(msg);
};

export function sendMessage() {

}
