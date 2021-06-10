import React, { useState, useEffect } from "react";
import { Sms as SmsIcon, CloseRounded, Send } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./style.css";
import GeneralSocketChat from "../Services/socker-general-chat";
import Cookies from "js-cookie";
import Form from "./components/form.js";
import { generalsocketchat } from "../Services/socker-general-chat";
import { showNotification } from "../Services/socket.js";

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
  const endMessage = React.useRef(null);
  const [pointData, setPointData] = useState(false);

  useEffect(() => {
    generalsocketchat.on("response_open_chat", function (msg) {
      Cookies.set("roomId", msg.room_id);
      Cookies.set("room", msg.room);
      // console.log("validando sala", msg.room);
      setTimeout(() => {
        // console.log("sala validada");
        handleOpenChat();
      }, 1000);
      // console.log("mensaje", msg);
    });
    generalsocketchat.on("notifications", function (msg) {
      // console.log("notificación", msg);
      if (msg.error == true) {
        setDataError(msg.error);
      }
      if (msg.type == "get-chat" && msg.archive == true) {
        Cookies.remove("roomId");
        Cookies.remove("room");
      }
    });
    generalsocketchat.on("response_get_chat", function (msg) {
      setDataMsg(msg.chats.messages);
      // console.log("new_msg_12", msg);
      // console.log("mnsjaes al entrar", dataMsg);
    });
    generalsocketchat.on("response_chat", function (msg) {
      // console.log("new_msg", msg.messages.messages);
      setDataMsg(msg.messages.messages);
      endMessage.current.scrollIntoView({ block: "end", behavior: "smooth" });
      const openPublicChat = document.querySelector(".openPublicChat");
      if(openPublicChat){
        // console.log("está dentro de la sala")
      }else{
        showNotification()
        // console.log("no está en la sala")
      }
    });
    generalsocketchat.on("response_archive", function (msg) {
      // console.log("respuesta", msg);
      if (msg.type == "archive" && msg.chat.error == false) {
        // console.log("estamos borrando su sala");
        setTimeout(() => {
          // console.log("sala borrada con éxito")
          Cookies.remove("roomId");
          Cookies.remove("room");
          handleOpenChat()
          },5000)
      }
    });
  }, []);

  const handleRenderButton = () => {
    if (!pointData) {
   return(<></>)
            } else {
              return (<div className="sendMessage">
              <TextareaAutosize
                id="outlined-multiline-static"
                label="Escribir mensaje"
                rows={1}
                rowsMax={2}
                variant="outlined"
                value={values.message}
                onInput={handleWriteMessage("message")}
              />
              <Send onClick={handleSendMessage} />
            </div>)
            }
  }

  const showMsg = (msg) => {
    // console.log("entró el mensaje", dataMsg);
    setTimeout(() => {
      endMessage.current.scrollIntoView({ block: "end" });
    }, 50);
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
  const emitGetPublicChat = (data) => {
    // console.log("data", data, "estado", pointData);
    const datas = {
      room_id: Cookies.get("roomId"),
    };
    if (pointData) {
    } else {
      
      generalsocketchat.emit("join", { room: Cookies.get("room") });
      generalsocketchat.emit("get-chat", datas);
      setPointData(true);
    }
  };
  const handleSendMessage = () => {
    var user_ids = Cookies.get("user_id");
    if (!user_ids) {
      var user_ids = 0;
    }
    const dataSend = {
      room_id: Cookies.get("roomId"),
      message: values.message,
      user_id: user_ids,
      send: 0,
    };
    generalsocketchat.emit("chat-response", dataSend);
    setValues({ ...values, message: "" });
  };
  const handleWriteMessage = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleOpenChat = () => {
    setPointData(false)
    const chatContent = document.querySelector(".generalChat");
    chatContent.classList.remove("hiddenChat");
    chatContent.classList.add("containerChats");
    chatContent.classList.add("openPublicChat");
    const user_id = Cookies.get("user_id");
    if (!user_id) {
      return setValues({ ...values, login: false });
      // renderFormChat(room)
    } else {
      return setValues({ ...values, login: true });
      // renderFormChat(room)
    }
    // setShowMsgs(renderFormChat(values.login))
  };
  const handleCloseChat = () => {
    const chatContent = document.querySelector(".generalChat");
    chatContent.classList.add("hiddenChat");
    chatContent.classList.remove("containerChats");
    chatContent.classList.remove("openPublicChat");
  };
  const renderFormChat = () => {
    // console.log("mensajes en render", dataMsg);
    const roomId = Cookies.get("roomId");
    const data = {
      room_id: Cookies.get("roomId"),
    };

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
    if (roomId) {
      emitGetPublicChat(data);
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

        <div className="containerMessages">
          {renderFormChat()}
          <div ref={endMessage} style={{ height: 5 }}></div>
        </div>

        {handleRenderButton()}
      </div>
      <Fab className="buttonChat" variant="extended" onClick={handleOpenChat}>
        <SmsIcon />
        Hablar con un asesor
      </Fab>
    </>
  );
}
