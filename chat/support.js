import socket from './WS.js';

socket.wsSend('getChats');

socket.onmessage = function(event) {
  // eslint-disable-next-line camelcase
  const Chats_count = 5;
  const name = 'Саня';
  const table = document.getElementsByTagName('tbody')[0];
  // eslint-disable-next-line camelcase
  for (let i = 0; i < Chats_count; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `<th scope="row">` + (i+1) + `</th>
                    <td>` + name + `</td>
                    <td>` + event.data +`</td>`;
    row.onclick = function() {
      window.location.href = 'index.html';
    };
    table.appendChild(row);
  }
};
