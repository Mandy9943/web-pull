
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:5001/chat";

const socket = socketIOClient(ENDPOINT)

export {socket} 