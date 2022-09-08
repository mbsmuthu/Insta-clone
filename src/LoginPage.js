import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LoginPage extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      
    }


    componentDidMount(){
        this.inputRef.current.focus();
    }
  render() {
    
    return (
      <><div className="login-page">
      <img className="login-logo" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="instagram-logo"></img>
      <input className="login-username" type="text" ref={this.inputRef} placeholder='Phonenumber, Username or e-mail address' required></input>
      <input className="login-password" type="password" placeholder='Password' required></input>
      <Link to="/mainpage"><button className="login-btn">Login</button></Link>
      <p>OR</p>
      <p className="login-withfb">Login with Facebook</p>
      <p className="login-rememberpasswd">Forgotten your password?</p>
    </div></>
    )
  }
}

export default LoginPage