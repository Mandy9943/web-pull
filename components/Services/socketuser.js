import socketIOClient from "socket.io-client";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
const ENDPOINT = "http://192.168.1.2:5010/users";

const socketuser = socketIOClient(ENDPOINT)

export{socketuser}

export default function SocketChat() {
    socketuser.emit('join', {room: `kieroUser_`+Cookies.get('user_id')})
     
    return (<></>)
  }