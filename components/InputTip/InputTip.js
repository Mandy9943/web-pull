import React, { Component } from 'react';
import Link from 'next/link';
import "./InputTip.css";


export default class InputTip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            {this.props.msg &&  this.props.msg != "" &&
                <div className="message-danger">
                    {this.props.msg}
                </div>
            }
            </>
        )
    }
}
