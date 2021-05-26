import React, { useState, useEffect } from 'react';
import {Sms as SmsIcon,
        CloseRounded,
        Send} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './style.css'
import GeneralSocketChat from '../services/socker-general-chat';
import Cookies from 'js-cookie';
import Form from './Components/form.js'

export default function GeneralChat() {
    const [values, setValues] = useState({
        message:'',
        openChats:'',
        closeButtons:'',
        dataLogin:[],
        login:false
    });

    const handleSendMessage = () => {
        console.log(values.message);
    }
    const handleWriteMessage = (prop) => (event) =>  {
        setValues({ ...values, [prop]: event.target.value });
    }
    const handleOpenChat = () =>{
        const chatContent = document.querySelector('.generalChat');
        chatContent.classList.remove('hiddenChat');
        chatContent.classList.add('containerChat');
        const user_id =Cookies.get('user_id');
        if(!user_id){
            setValues({ ...values, login: false });
            renderFormChat(false)
          
        }else{
            setValues({ ...values, login: true });
            renderFormChat(true)
        }
    }
    const handleCloseChat = () => {
        const chatContent = document.querySelector('.generalChat');
        chatContent.classList.add('hiddenChat');
        chatContent.classList.remove('containerChat');
    }
    const renderFormChat = (type) =>{
        console.log(type)
        // if (type === true){
        //     return(
        //             <>
        //                 <div className="rightMessage">
        //                     holaaaaaaaa cómo estás? porque demoras tanto?
        //                 </div>
        //                 <div className="leftMessage">
        //                     holaaaaaaaa cómo estás? no demoro nada, 
        //                 </div>
        //                 <div className="rightMessage">
        //                     holaaaaaaaa cómo estás? porque demoras tanto?
        //                 </div>
        //                 <div className="rightMessage">
        //                     holaaaaaaaa cómo estás? porque demoras tanto?
        //                 </div>
        //                 <div className="rightMessage">
        //                     holaaaaaaaa cómo estás? porque demoras tanto?
        //                 </div>
        //                 <div className="rightMessage">
        //                     holaaaaaaaa cómo estás? porque demoras tanto?
        //                 </div>
        //                 <div className="leftMessage">
        //                     holaaaaaaaa cómo estás? no demoro nada, 
        //                 </div>
        //                 <div className="leftMessage">
        //                     holaaaaaaaa cómo estás? no demoro nada, 
        //                 </div>
        //                 <div className="leftMessage">
        //                     holaaaaaaaa cómo estás? no demoro nada, 
        //                 </div>
        //                 <div className="leftMessage">
        //                     holaaaaaaaa cómo estás? no demoro nada,  nasa
        //                 </div>
        //             </>
        //     )
        // } else if (type == false) {
            return(
            <Form logedIn = {values.login}/>
                )
        // } 
    }
	return (
		<>
            <GeneralSocketChat/>
            <div className="generalChat hiddenChat">

                <div className="headChat">
                    <p>Usuario</p>
                    <CloseRounded onClick={handleCloseChat}/>
                </div>

                <div className="containerMessages">

                {renderFormChat(values.login)}
                    
                </div>

                <div className="sendMessage">
                    <TextareaAutosize
                        id="outlined-multiline-static"
                        label="Escribir mensaje"
                        rows={1}
                        rowsMax={2}
                        variant="outlined"
                        value={values.message}
                        onChange={handleWriteMessage('message')}
                    />
                    <Send onClick={handleSendMessage}/>
                </div>

            </div>
			<Fab className="buttonChat" variant="extended" onClick={handleOpenChat}>
                <SmsIcon />
                Hablar con un asesor
            </Fab>
		</>
	);
}
