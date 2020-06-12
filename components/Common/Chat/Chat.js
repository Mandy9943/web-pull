import React, { Component } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Bread from "./../BreadCrumbs";
class Chat extends Component {
  render() {
    return (
      <>
        <Bread />
        <div className="chat-wrap">
          <div>
            <div className="chat-wrap-in">
              <div className="chat-msg-in">
                Officia cillum culpa pariatur velit quis occaecat do
                reprehenderit consectetur Lorem esse velit. Aliquip officia
                excepteur laborum anim laboris. Reprehenderit dolor aliquip
                Lorem dolor officia. Veniam consectetur voluptate proident
                mollit voluptate eiusmod. Ipsum culpa incididunt sit velit. Duis
                magna cupidatat ea reprehenderit enim eu voluptate ex ut nulla
                sit mollit reprehenderit.
              </div>
            </div>
            <div className="chat-wrap-out">
              <div className="chat-msg-out">
                Lorem ipsum anim occaecat occaecat deserunt officia anim
                exercitation nostrud quis consectetur exercitation.
              </div>
            </div>
            <div className="chat-wrap-out">
              <div className="chat-msg-out">
                Lorem ipsum anim occaecat occaecat deserunt officia anim
                exercitation nostrud quis consectetur exercitation.
              </div>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" />
            <input hidden type="file" id="file" />
            <div className="chat-wrap-button">
              <label htmlFor="file">
                <FontAwesomeIcon icon={faPaperclip} />
              </label>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Chat;
