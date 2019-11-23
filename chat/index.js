import socket from './WS.js';

socket.wsSend('getChats');
socket.onmessage = function(event) {
  const options ={
    hour: 'numeric',
    minute: 'numeric',
  };
  const inputField = document.getElementsByClassName('chat-frame__input')[0];
  const msg = document.createElement('div');
  msg.innerHTML = `<div class="container">
    <img src="" alt="Avatar">
    <p>${event.data}</p>
    <span class="chat-frame__asking-time">
    ${new Date().toLocaleString(options)}</span>
</div>`;
  inputField.before(msg);
};

export function sendMessage() {
  const message = document.getElementsByClassName('chat-frame__input')[0];
  socket.send(message.value);
  const msg = document.createElement('div');
  msg.innerHTML = `<div class="container answer">
    <img src="" alt="Avatar" class="chat-frame__answer-avatar">
    <p>${message.value}</p>
    <span class="chat-frame__answer-time">11:05</span>
</div>`;
  message.before(msg);
}
