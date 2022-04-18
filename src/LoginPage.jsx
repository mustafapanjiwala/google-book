import React,{useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
// import Home from "./Home"
import "./Login.css"
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  let navigate=useNavigate();
  const clientId = "608589213952-g2bufmt1ptn8ubr2mgm50g1ck9h49m9o.apps.googleusercontent.com"
  const [showLoginButton,setShowLoginButton] = useState(true)
  const [showLogoutButton,setShowLogoutButton] = useState(false)
  const onLoginSuccess = (res) =>{
    console.log("Login Success: ",res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
    navigate("/home")
  }
  const onFailureSuccess = (res) =>{
    console.log("Login Failed :",res);
    
  }
  const onSignOutSuccess = () =>{
    alert("You've been signed out successfully")
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  }
  // if(onLoginSuccess){
  //     return <Home />
  // }
return (
  <section id="hero">
        <div className="container full-height">
            <div
                className="row align-items-center justify-content-center full-height col-md-6 col-12 mx-auto my-auto logbox">
                <div className="loginbox">
                  <h1>login for Google Books</h1>
                    {
                        showLoginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login"
                            onSuccess={onLoginSuccess}
                            onFailure={onFailureSuccess}
                            cookiePolicy={'single_host_origin'}
                        /> : null
                    }
                    {   showLogoutButton ?
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={onSignOutSuccess}
                        >
                        </GoogleLogout> : null
                    }
                </div>
                </div>
                </div>
                </section>
)
}

export default LoginPage