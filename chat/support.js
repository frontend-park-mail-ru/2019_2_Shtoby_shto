import socket from './WS.js';

socket.wsSend('getChats');

const login = document.getElementById('login');
login.onclick = function() {
  console.log("login");
  location.href = 'localhost:3000/login';
};

socket.onmessage = function(event) {
  const activ = true;
  const name = 'Саня';

  const table = document.getElementsByTagName('tbody')[0];
  const row = document.createElement('tr');
  row.innerHTML = `<th scope="row">` + document.cookie + `</th>
                    <td>` + name + `</td>
                    <td>` + event.data + `</td>`;
  row.onclick = function() {
    const chat = document.getElementById('chat_frame');
    chat.innerHTML = `<iframe src="http://localhost:4000" width="400" height="600">`;
    socket.wsSend('message');
  };
  if (activ) {
    row.classList.add('bg-primary');
    row.classList.add('text-white');
  }
  table.appendChild(row);
};
