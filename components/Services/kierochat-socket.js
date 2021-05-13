
import socketIOClient from "socket.io-client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
// const ENDPOINT = "http://192.168.1.4:5001/questions";
const ENDPOINT = "https://questions.kieroapi.net/questions";

const kierosocketchat = socketIOClient(ENDPOINT)

export{kierosocketchat}
const user_id = Cookies.get('user_id');
  if(!user_id){
    console.log("no hay inicio de sesión")
  }else{
    kierosocketchat.emit('join', {room: `kieroUser_`+user_id})
  }
export const sendQuestionSocketChat = (question, market_id, product_id) => {
  // console.log("pregunta", question, "market_id",market_id, "product_id",product_id, "user_id", user_id )
  kierosocketchat.emit('new_question', {question: question, market_id: market_id, product_id: product_id, user_id: user_id})
	// try {
	// 	const msgData = {
	// 		question: msg,
	// 		product_id: product_id,
	// 	};
	// 	let data = post('/newQuestion', msgData, jwt);

	// 	return data;
	// } catch (error) {
	// 	return error;
	// }
};
export default function KieroSocketChat() {
  // const [newNotification, setNewNotification] = React.useState(false)
  
    // useEffect(() => {
        
    //     if (!("Notification" in window)) {
    //       alert("Tu navegador no es compatible con notificaciones, actualizaa por favor.");
    //     } else {
    //       Notification.requestPermission();
    //     }
    //     kierosocketchat.on("new_response_user", data => {
    //       handleLoad()
    //       // showNotification()
    //       // setNewNotification(true)
    //     });
    //   },[]);
    //   const handleLoad = () => {
    //          var addClass = document.getElementsByClassName('containerChat');
    //          if (addClass.length === 1 ){
    //             console.log("existe")
    //          }else {
    //             showNotification()
    //             console.log("no existe")
    //          }
    //      };
     
    //    const showNotification = () =>{
    //      Notification.requestPermission().then(function(result) {
    //        if(result === "granted"){
    //          Notification.requestPermission();
    //        } else {
    //          alert("notificacion web")
    //        }
    //      });
    //       var options = {
    //                body: "Revisa tu cuenta par ver el mensaje",
    //                icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?    auto=compress&cs=tinysrgb&dpr=1&w=500",
    //                dir: "ltr"
    //              };
    //      var notification = new Notification("Tienes un nuevo mensaje", options);
    //     }
        // const [room_user, setRoom_user] = useState(`KieroUser_${this.props.data.myID}`);
  return (<></>)
}