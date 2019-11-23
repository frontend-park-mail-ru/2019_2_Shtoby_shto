import socket from './WS.js';

socket.wsSend('getChats');

const login = document.getElementById('login');
login.onclick = function() {
  console.log("login");
  location.href = 'https://front.aleshka2012.now.sh/login';
};
const chat = document.getElementById('chat_frame');
chat.innerHTML = `<iframe src="https://chat.yuliyasm7.now.sh/" width="400" height="600">`;

socket.onmessage = function(event) {
  const activ = true;
  const name = 'Саня';

  const table = document.getElementsByTagName('tbody')[0];
  const row = document.createElement('tr');
  row.innerHTML = `<th scope="row">` + document.cookie + `</th>
                    <td>` + name + `</td>
                    <td>` + event.data + `</td>`;
  row.onclick = function() {
    socket.wsSend('message');
    row.className = "";
  };
  if (activ) {
    row.classList.add('bg-primary', 'text-white');
  }
  table.appendChild(row);
};
