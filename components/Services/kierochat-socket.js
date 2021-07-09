
import socketIOClient from "socket.io-client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
// const ENDPOINT = "http://192.168.1.200:5001/questions";
const ENDPOINT = "https://questions.kieroapi.net/questions";

const kierosocketchat = socketIOClient(ENDPOINT)

export{kierosocketchat}
const user_id = Cookies.get('user_id');
  if(!user_id){
    // console.log("no hay inicio de sesión")
  }else{
    kierosocketchat.emit('join', {room: `kieroUser_`+user_id})
  }
export const sendQuestionSocketChat = (question, market_id, product_id) => {
//   console.log("probandp x4")
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
  return (<></>)
}