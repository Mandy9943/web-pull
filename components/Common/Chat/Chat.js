import React, { Component } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Bread from "./../BreadCrumbs";
import Header from "./../Header";
import Footer from "./../Footer";
// import { getChat, sendMsg } from '../../../services/chatApi';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_user: `KieroUser_${this.props.data.myID}`,
      send: 0,
      user: this.props.data.myID,
      store: 0,
      order: 0,
      messages: []
    }
    
  }

  async componentDidMount() {
    var url_string = location.href;
    var url = new URL(url_string);
    var store = url.searchParams.get("store");
    var order = url.searchParams.get("order");   
    this.setState({store:store,order:order})
  }

  render() {
    return (
      <>
      <Header/>
        
        <div className="chat-wrap" >
    <h5>{ this.props.data.name }</h5>
          <div className="msg">
          {/* { allMessages } */}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="chat-input">
            
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input hidden type="file" id="file" />
              <div className="chat-wrap-button">
                {/* <label htmlFor="file">
                  <FontAwesomeIcon icon={faPaperclip} />
                </label> */}
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Chat;
