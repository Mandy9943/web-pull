import React, { Component } from 'react';
import "./ButtonSocialLogin.css";
import gg from "../../../assets/img/iconos/google.svg";
import fb from "../../../assets/img/iconos/facebook.svg";
import { social } from "../../../lib/auth"
import FacebookLogin from 'react-facebook-login'

class ButtonGoogle extends Component {


    componentDidMount() {
        this.googleSDK();
    }
 
    prepareLoginButton = () => {
 
    this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
        (googleUser) => {
 
          let profile = googleUser.getBasicProfile();
          const error = social (
            profile.getName().split(" ")[0], 
            profile.getName().split(" ")[1], 
            profile.getEmail(), 2, 
            profile.getId(), 
            googleUser.getAuthResponse().id_token
          )

          if (error) {
              this.setState({
                  error
              });
              return false;
          }
          
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
              <img alt="Google" src={gg}/>  <p>Continua con Google</p>
            </button>
        )
    }
}























class ButtonFacebook extends Component {
  constructor(props) {  
    super(props);  
    this.state = {  
  
    };  
  }  
  signup(res) {  
    const responseFacebook = {  
      Name: res.name,  
      email: res.email,  
      token: res.accessToken,  
      Image: res.picture.data.url,  
      ProviderId: 'Facebook'  
    }  
                  
    const error = social (
      res.name.split(" ")[0], 
      res.name.split(" ")[1], 
      res.email, 3, 
      res.id, 
      res.accessToken
    )


      if (error) {
        this.setState({
            error
        });
        return false;
      }
  
  };  

    render() {
               const responseFacebook = (response) => {  
                        var res = response.profileObj;  
                        this.signup(response);  

                      }  
        return (<>
            <FacebookLogin  className="button buttonFacebook" 
                            cssClass="button buttonFacebook"
                            appId="311507753333551"  
                            autoLoad={false}  
                            fields="name,email,picture"  
                            callback={responseFacebook}
                            >

               <img alt="Facebook" src={fb}/> <p>Continua con Facebook</p>
            </FacebookLogin>
            </>
        )
    }
}

export {ButtonGoogle, ButtonFacebook};