import socket from '/WS.js';

socket.wsSend("getChats");
socket.onmessage = function(event) {
  const msg = document.getElementsByTagName('td')[1];
  msg.innerText = event.data;
};