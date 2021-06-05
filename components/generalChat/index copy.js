import React, { useState, useEffect } from "react";
import { Sms as SmsIcon, CloseRounded, Send } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./style.css";
import GeneralSocketChat from "../services/socker-general-chat";
import Cookies from "js-cookie";
import Form from "./Components/form.js";
import { generalsocketchat } from "../Services/socker-general-chat";
export default function GeneralChat() {
  const [values, setValues] = useState({
    message: "",
    openChats: "",
    closeButtons: "",
    login: false,
    dataRoom: "",
  });
  const [dataError, setDataError] = useState(false);
  const [dataMsg, setDataMsg] = useState([{}]);
  const [showMsgs, setShowMsgs] = useState('')

  useEffect(() => {
    generalsocketchat.on("response_open_chat", function (msg) {
      Cookies.set("roomId", msg.room_id);
      Cookies.set("room", msg.room);
      console.log("validando sala", msg.room);
      setTimeout(() => {
        console.log("sala validada");
        handleOpenChat();
      }, 1000);
      console.log("mensaje", msg);
    });
    generalsocketchat.on("notifications", function (msg) {
      console.log("notificación", msg);
      if (msg.error == true) {
        setDataError(msg.error);
      }
    });
    generalsocketchat.on("response_get_chat", function (msg) {
        setDataMsg(msg.chats.messages);
        console.log("new_msg_12",msg)
        console.log("mnsjaes al entrar", dataMsg)
    });
    generalsocketchat.on("response_chat", function (msg) {
      console.log("new_msg",msg.messages.messages)
      setDataMsg(msg.messages.messages);
      console.log("todos los mensja", dataMsg)
      // setShowMsgs(renderFormChat(values.login))
    });
    setShowMsgs(renderFormChat(values.login))
  }, []);

  const showMsg = (msg) => {
    console.log("entró el mensaje",dataMsg)
    return (
      <>
        {msg.map((msg, i) => {
          const type = !msg.send ? "rightMessage" : "leftMessage";
          if (!msg) {
            return <div>No hay ningún mensaje</div>;
          } else {
            return (
              <div style={{ width: "100%" }} key={i}>
                <div className={type}>{msg.message}</div>
              </div>
            );
          }
        })}
      </>
    );
  };
  const handleSendMessage = () => {
    const user_id = Cookies.get("user_id");
    if (!user_id) {
        user_id = 0
    } 
    const dataSend = {
      "room_id":Cookies.get("roomId"),
      "message":values.message,
      "user_id":user_id, 
      "send":0
    }
    generalsocketchat.emit("chat-response", dataSend)
    // setDataMsg([{"send":0,"message":"hola meeeeeeennn"}])
    setShowMsgs(renderFormChat(values.login))
  };
  const handleWriteMessage = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleOpenChat = () => {
    const chatContent = document.querySelector(".generalChat");
    chatContent.classList.remove("hiddenChat");
    chatContent.classList.add("containerChats");
    const user_id = Cookies.get("user_id");
    if (!user_id) {
      setValues({ ...values, login: false });
      // renderFormChat(room)
    } else {
      setValues({ ...values, login: true });
      // renderFormChat(room)
    }
    setShowMsgs(renderFormChat(values.login))
  };
  const handleCloseChat = () => {
    const chatContent = document.querySelector(".generalChat");
    chatContent.classList.add("hiddenChat");
    chatContent.classList.remove("containerChats");
  };
  const renderFormChat = (type) => {
    console.log("mensajes en render", dataMsg)
    const roomId = Cookies.get("roomId");
    if (dataError == true) {
      return (
        <div>
          Lamentamos los inconvenientes, en el momento no estamos en
          funcionamiento
          <button onClick={(setDataError(true), handleOpenChat())}>
            Validar nuevamente
          </button>
        </div>
      );
    }
    if (type === true && roomId) {
      const data = {
        'room_id': roomId,
      };
      generalsocketchat.emit("get-chat", data);
      return showMsg(dataMsg);
    } else if (type === false && roomId) {
      const data = {
        'room_id': roomId,
      };
      generalsocketchat.emit("get-chat", data);
      return showMsg(dataMsg);
    } else {
      return <Form logedIn={values.login} validateRoom={handleOpenChat} />;
    }
    // }
  };
  return (
    <>
      <GeneralSocketChat />
      <div className="generalChat hiddenChat">
        <div className="headChat">
          <p>Usuario</p>
          <CloseRounded onClick={handleCloseChat} />
        </div>

        <div className="containerMessages">{showMsgs}</div>

        <div className="sendMessage">
          <TextareaAutosize
            id="outlined-multiline-static"
            label="Escribir mensaje"
            rows={1}
            rowsMax={2}
            variant="outlined"
            value={values.message}
            onChange={handleWriteMessage("message")}
          />
          <Send onClick={handleSendMessage} />
        </div>
      </div>
      <Fab className="buttonChat" variant="extended" onClick={handleOpenChat}>
        <SmsIcon />
        Hablar con un asesor
      </Fab>
    </>
  );
}
