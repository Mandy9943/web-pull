import React, { Component } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Bread from "./../BreadCrumbs";
import Nav from "../../Common/Nav";
import Footer from "./../Footer";
import {socket} from "../../Services/socket"
 
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_user: `KieroUser_${this.props.data.myID}`,
      send: 0,
      user: this.props.data.myID,
      store: 0,
      order: 0,
      messages: null,
      value_message: '',
    }
  }
  
  componentDidMount() {
    console.log(localStorage.getItem('socket'))
    var url_string = location.href;
    var url = new URL(url_string);
    var store = url.searchParams.get("store");
    var order = url.searchParams.get("order");   
    this.setState({store:store,order:order})
    console.log(store, order)
    socket.emit('join', {room: `kieroUser_${this.state.user}`})
    socket.emit('get_chat_user_by_order', {order: order, room:`kieroUser_${this.state.user}`});
    
    console.log(this.state.user)
    
    socket.on("response_join_chat", data => {
      console.log(data);
    });
    
    socket.on("response_user_chat", data => {
      console.log('response_user_chat: ',data);
    });
    
    socket.on("new_response_user", data => {
      this.setState({messages:(data.response)})
    });
    
    socket.on("response_room_chats", data => {
      this.setState({messages:(data.rooms)})
    });
    
  } 
  
  setValue (val) {
    this.setState({value_message:val})
  }
  
  handleSubmit() {
    var obj = {   
      room_user: `kieroUser_${this.state.user}`, // KieroUser_ + user_id para poder crear la sala del usuario 
      send:0, // esto indica que quien esta enviando el mensaje es el usuario
      user:this.state.user, // el id del usuario que esta enviando el mensaje
      store:this.state.store, // id de la tienda a la que pertenece el producto
      order:this.state.order, // id de la orden por la cual el usuario puede escribir 
      data: this.state.value_message // mensaje que el usuario envia 
    }
    socket.emit('new_room',obj );
    this.setState({value_message:''})
  }
  
  render() {   
    if (this.state.messages) {
      this.allMessages = (this.state.messages).map((msg,i) => {
        const type =(!msg.send ? "out" : "in");
        const cn0 = "chat-wrap-"+type;
        const cn1 = "chat-msg-"+type;
        return <div key={i} className={ cn0 }>
          <div className={ cn1 }>
            { msg.message }
            <span className="hours">{ (msg.created_at.split(" ")[1]).split('.')[0] }</span>
          </div>
        </div>;
    
  });
} else {
  this.allMessages = ''
}
return (
  <>
      <Nav dataId={this.props.data.myID} />
        
        <div className="chat-wrap" >
        <h5>{ this.props.data.name }</h5>
          <div className="msg">
          { this.allMessages }
          </div>
            <div className="chat-input">
            
              <input type="text" value={this.state.value_message} onChange={( {target : {value} } ) => this.setValue(value)} />
              <div className="chat-wrap-button">
                {/* <label htmlFor="file">
                  <FontAwesomeIcon icon={faPaperclip} />
                </label> */}
                <button onClick={() => this.handleSubmit()} type="submit">Enviar</button>
              </div>
            </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Chat;
