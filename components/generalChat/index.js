import React, { useState, useEffect } from 'react';
import {Sms as SmsIcon,
        CloseRounded,
        Send} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './style.css'
import GeneralSocketChat from '../services/socker-general-chat';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function GeneralChat() {
    const [values, setValues] = useState({
        message:''
    });

    const handleSendMessage = () => {
        console.log(values.message);
    }

    const handleWriteMessage = (prop) => (event) =>  {
        setValues({ ...values, [prop]: event.target.value });
    }
	return (
		<>
        <GeneralSocketChat/>
            <div className="containerChat">

                <div className="headChat">
                    <p>Usuario</p>
                    <CloseRounded/>
                </div>

                <div className="containerMessages">
                    <div className="rightMessage">
                        holaaaaaaaa cómo estás? porque demoras tanto?
                    </div>
                    <div className="leftMessage">
                        holaaaaaaaa cómo estás? no demoro nada, es que hablas
                    </div>
                    <div className="rightMessage">
                        holaaaaaaaa cómo estás? porque demoras tanto?
                    </div>
                </div>

                <div className="sendMessage">
                    <TextareaAutosize
                        id="outlined-multiline-static"
                        label="Escribir mensaje"
                        rows={2}
                        rowsMax={4}
                        variant="outlined"
                        value={values.message}
                        onChange={handleWriteMessage('message')}
                    />
                    <Send onClick={handleSendMessage}/>
                </div>

            </div>

			<Fab variant="outline" className="buttonChat">
                <SmsIcon />
                Hablar con un asesor
            </Fab>
		</>
	);
}
