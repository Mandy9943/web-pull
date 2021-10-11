import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { Component } from 'react';
import { useRouter } from "next/router";

class MyDocument extends Document {
    constructor(props) {
		super(props);
		this.state = { urlNow: 'kiero.co' };
	}
    componentDidMount() {
        this.setState({ urlNow: window.location.href });
    }
    render() {
        return (
            <Html lang="es"> 
                <Head />
                {/* <link rel="canonical" href={this.state.urlNow}/> */}
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
  }
}

export default MyDocument;