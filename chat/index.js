import socket from './WS.js';

// socket.wsSend("data");
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

document.getElementById('send-message').onclick = function() {
  const options ={
    hour: 'numeric',
    minute: 'numeric',
  };
  const message = document.getElementsByClassName('chat-frame__input')[0];

  // msgcheck(message.value);

  socket.send(message.value);
  const msg = document.createElement('div');
  msg.innerHTML = `<div class="container answer">
    <img src="" alt="Avatar" class="chat-frame__answer-avatar">
    <p>${message.value}</p>
    <span class="chat-frame__answer-time">
    ${new Date().toLocaleString(options)}
    </span>
    </div>`;
  message.before(msg);
};
