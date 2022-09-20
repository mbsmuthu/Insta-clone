import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import {Routes, Route, Navigate} from "react-router-dom";
import Mainpage from "./Mainpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    
      username:null
      
    };
  }

 

    setLoginStatus= (a) => {
      // console.log("Before setstate:", this.state.isLoggedIn)
      this.setState({isLoggedIn:true, username:a})
      // console.log(("After setState:", this.state.isLoggedIn))
      
    }

    setLogoutStatus = () => {
      this.setState({isLoggedIn:false});
    }
  render() {
    console.log(this.state.isLoggedIn)
    return (
      <>
        <div className="App">
          <Routes>

            <Route path="/" element={<LoginPage isLogin={this.state.isLoggedIn} setLogin={this.setLoginStatus}/>}></Route>
            
              {this.state.isLoggedIn && <Route path="/mainpage" element={<Mainpage setLogout={this.setLogoutStatus} username={this.state.username}/>}></Route>
            }
            
            <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
            
            
          </Routes>
          
        </div>
      </>
    );
  }
}

export default App;
