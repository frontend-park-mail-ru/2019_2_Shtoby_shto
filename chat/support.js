import socket from './WS.js';

socket.wsSend('Оператор присоединился');

const login = document.getElementById('login');
login.onclick = function() {
  location.href = 'https://front.aleshka2012.now.sh/login';
};
const chat = document.getElementById('chat_frame');
chat.innerHTML = `<iframe src="https://chat.yuliyasm7.now.sh" width="400" height="600">`;

socket.onmessage = function(event) {
  const name = 'Саня';
  const table = document.getElementsByTagName('tbody')[0];
  const row = document.createElement('tr');
  row.innerHTML = `<th scope="row">` + document.cookie + `</th>
                    <td>` + name + `</td>
                    <td>` + event.data + `</td>`;
  row.onclick = function() {
    row.className = '';
  };
  row.classList.add('bg-primary', 'text-white');
  table.appendChild(row);
};
