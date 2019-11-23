const socket = new WebSocket('http://localhost:8080');

socket.onopen = function() {
  console.log('[open] Соединение установлено');
};

socket.wsSend = function(data) {
  if (!socket.readyState) {
    setTimeout(function() {
      socket.wsSend(data);
    }, 100);
  } else {
    socket.send(data);
    console.log('send ' + data);
  }
};

socket.onmessage = function(event) {
  console.log(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    // eslint-disable-next-line max-len
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    console.log('[close] Соединение прервано');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};

export default socket;
