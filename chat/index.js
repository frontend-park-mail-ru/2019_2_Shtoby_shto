import socket from '/WS.js';

function wsSend(data) {
  if(!socket.readyState){
    setTimeout(function (){
      wsSend(data);
    },100);
  }else{
    socket.send(data);
  }
}
wsSend("data");