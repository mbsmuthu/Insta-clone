import React, { Component } from "react";
import { Link } from "react-router-dom";


export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      userName: "",
      password: "",
    };
    this.inputRef = React.createRef();
  }

  // handleLoginButton = () => {
  //   console.log(this.props.setLogin)
  //   this.props.setLogin()
  //   window.location.href="/mainpage"

  //   }
  

  handleUserName = (event) => {
    this.setState({ userName: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleInvalidCredentials = () => {
    if (this.state.userName === "" || this.state.password === "") {
      alert("Please enter all the values");
    } else if (this.state.userName !== "muthu") {
      alert("Invalid username");
    } else if (
      this.state.userName === "muthu" &&
      this.state.password !== "12345"
    ) {
      alert("Invalid password");
    } 
  };

  componentDidMount() {
    this.inputRef.current.focus();
    
  }

 
  

  render() {
    // console.log(this.props.setLogin)
    return (
      <>
        <div className="login-page">
          <img
            className="login-logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
            alt="instagram-logo"
          ></img>
          <input
            onChange={this.handleUserName}
            className="login-username"
            type="text"
            ref={this.inputRef}
            placeholder="Phonenumber, Username or e-mail address"
          ></input>
          <input
            onChange={this.handlePassword}
            className="login-password"
            type="password"
            placeholder="Password"
          ></input>

          {(this.state.userName === "Muthu" &&
          this.state.password === "12345") ? (
            
             <Link to="/mainpage">
              <button onClick={()=>{this.props.setLogin(this.state.userName)}} className="login-btn">
                Login
              </button>
            </Link> 
            
          ) : (
            <button
              className="login-btn"
              onClick={this.handleInvalidCredentials}
            >
              Login
            </button>
          )}
          <p>OR</p>
          <p className="login-withfb">Login with Facebook</p>
          <p className="login-rememberpasswd">Forgotten your password?</p>
        </div>
      </>
    );
  }
}

export default LoginPage;
