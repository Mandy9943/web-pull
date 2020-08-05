import React, { Component } from 'react';
import "./ButtonSocialLogin.css";
import gg from "../../../assets/img/iconos/google.svg";
import fb from "../../../assets/img/iconos/facebook.svg";


class ButtonGoogle extends Component {


    componentDidMount() {
        this.googleSDK();
    }
 
    prepareLoginButton = () => {
 
    console.log(this.refs.googleLoginBtn);
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        //CALL TO API HERE.
 
 
        }, (error) => {
            console.log(JSON.stringify(error, undefined, 2));
        });
 
    }
 
    googleSDK = () => {
 
        window['googleSDKLoaded'] = () => {
          window['gapi'].load('auth2', () => {
            this.auth2 = window['gapi'].auth2.init({
              client_id: '977782751155-vu2trn0dcrucm52ibf00br81ap7jcnme.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
              scope: 'profile email'
            });
            this.prepareLoginButton();
          });
        }
     
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
     
    }

    render() {
        return (
            <button className="button buttonGoogle loginBtn loginBtn--google" ref="googleLoginBtn" data-onsuccess={this.onSignIn}>
              <img alt="Google" src={gg}/>  <p>Registrate con Google</p>
            </button>
        )
    }
}























class ButtonFacebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebook_error: ""
        }
    }
    componentDidMount() {
        window.fbAsyncInit = function() {
          FB.init({
            appId      : 'APP_ID_HERE.',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.1'
          });
          
          FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
          }.bind(this));
        }.bind(this);
        
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
      
      testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
        });
      }
      

      statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
          this.testAPI();
        } else if (response.status === 'not_authorized') {
          console.log('Please log into this app.');
        } else {
         console.log('Please log into Facebook.');
        }
      }
      
      checkLoginState() {
        FB.getLoginStatus(function(response) {
          this.statusChangeCallback(response);
        }.bind(this));
      }
      
      handleClick = () => {
        FB.login(this.checkLoginState());
      }


    render() {

        return (<>
            <button className="button buttonFacebook" onClick={this.handleClick}>
               <img alt="Facebook" src={fb}/> <p>Registrate con Facebook</p>
            </button>
            </>
        )
    }
}

export {ButtonGoogle, ButtonFacebook};