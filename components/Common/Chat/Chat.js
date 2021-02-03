import React, { Component } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Bread from "./../BreadCrumbs";
import Header from "./../Header";
import Footer from "./../Footer";
import { getChat, sendMsg } from '../../../services/chatApi';

class Chat extends Component {

  constructor(props) {

    super(props);
    this.state = {
      messages: [],
      last: 0,
      time: "",
      value: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  async componentDidMount() {

    this.setState({messages: this.props.data.messages, last:this.props.data.last})

    try {
      setInterval(async () => {
        const res = await getChat(this.props.data.user_id ,this.props.data.jwt )
        let data = await res.data
        if(data.data){
            this.setState({last:data.last})
            this.setState({messages:data.data})
        }


        this.setState({ time: Date.now() });

      }, 2000);
    } catch(e) {
      console.log(e);
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    sendMsg(this.state.value, this.props.data.user_id, this.props.data.jwt);
    this.setState({value:""})
    event.preventDefault();
  }


  render() {
    const allMessages = this.state.messages.map((msg,i) => {
    const creator = this.props.data.chat_uid == this.props.data.myID
    const type = msg.from=="m" ?  "none" : ((creator && msg.from == "u") || (!creator && msg.from == "s" ) ? "out" : "in");
    const cn0 = "chat-wrap-"+type;
    const cn1 = "chat-msg-"+type;
      return <div key={i} className={ cn0 }>
      <div className={ cn1 }>
        { msg.msg }
        <span className="hours">{ msg.date.split(" ")[1] }</span>
      </div>
    </div>;

    });


    return (
      <>
      <Header/>
        
        <div className="chat-wrap" >
    <h5>{ this.props.data.name }</h5>
          <div className="msg">
          { allMessages }
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="chat-input">
            
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input hidden type="file" id="file" />
              <div className="chat-wrap-button">
                <label htmlFor="file">
                  <FontAwesomeIcon icon={faPaperclip} />
                </label>
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
