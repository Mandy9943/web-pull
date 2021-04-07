
import socketIOClient from "socket.io-client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
const ENDPOINT = "http://192.168.1.2:5001/chat";

const socket = socketIOClient(ENDPOINT)

export{socket}
export default function SocketChat() {
  socket.emit('join', {room: `kieroUser_`+Cookies.get('user_id')})
    useEffect(() => {
        handleLoad()
        if (!("Notification" in window)) {
          alert("Tu navegador no es compatible con notificaciones, actualizaa por favor.");
        } else {
          Notification.requestPermission();
        }
        socket.on("new_response_user", data => {
          showNotification()
        });
      },["new_response_user"]);
      const handleLoad = () => {
             var addClass = document.getElementsByClassName('containerChat');
             if (addClass.length === 1){
               console.log("existe")
             }else {
               console.log("no existe")
             }
         };
     
       const showNotification = () =>{
         Notification.requestPermission().then(function(result) {
           if(result === "granted"){
             Notification.requestPermission();
           } else {
             alert("notificacion web")
           }
         });
          var options = {
                   body: "Revisa tu cuenta par ver el mensaje",
                   icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
                   dir: "ltr"
                 };
         var notification = new Notification("Tienes un nuevo mensaje", options);
        }
        // const [room_user, setRoom_user] = useState(`KieroUser_${this.props.data.myID}`);
  return (<></>)
}