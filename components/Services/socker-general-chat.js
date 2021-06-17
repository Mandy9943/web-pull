
import socketIOClient from "socket.io-client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
// const ENDPOINT = "http://192.168.1.1:5001/public-socket-chat";
const ENDPOINT = 'https://public-chat.kieroapi.net/public-socket-chat';

const generalsocketchat = socketIOClient(ENDPOINT)

export{generalsocketchat}
export default function GeneralSocketChat() {
  // const [newNotification, setNewNotification] = React.useState(false)
  // const user_id =Cookies.get('user_id');
 
  //   useEffect(() => {
        
  //       // if (!("Notification" in window)) {
  //       //   alert("Tu navegador no es compatible con notificaciones, actualizaa por favor.");
  //       // } else {
  //       //   Notification.requestPermission();
  //       // }
  //       // generalsocketchat.on("new_response_user", data => {
  //       //   handleLoad()
  //       //   // showNotification()
  //       //   // setNewNotification(true)
  //       // });
  //       if(!user_id){
  //         console.log("no hay inicio de sesión x 2")
  //       //   const _json = {
  //       //     "name": "qwe 1",
  //       //     "number":"qwe 2",
  //       //     "email":"qwe 3",
  //       //     "user_id":"qwe 4",
  //       //     "login":true,
  //       // }
  //       //   generalsocketchat.emit('open-chat', _json);
  //       }else{
         
  //         console.log("si hay inicio de sesión")
  //       }
  //     },[]);
      // const handleLoad = () => {
      //        var addClass = document.getElementsByClassName('containerChat');
      //        if (addClass.length === 1 ){
      //           console.log("existe")
      //        }else {
      //           showNotification()
      //           console.log("no existe")
      //        }
      //    };
     
      //  const showNotification = () =>{
      //    Notification.requestPermission().then(function(result) {
      //      if(result === "granted"){
      //        Notification.requestPermission();
      //      } else {
      //        alert("notificacion web")
      //      }
      //    });
      //     var options = {
      //              body: "Revisa tu cuenta par ver el mensaje",
      //              icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
      //              dir: "ltr"
      //            };
      //    var notification = new Notification("Tienes un nuevo mensaje", options);
      //   }
        // const [room_user, setRoom_user] = useState(`KieroUser_${this.props.data.myID}`);
  return (<></>)
}