import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import Post from "./Post";
import Navbar from "./Navbar";
import Modal from "./Modal";
import {Routes, Route} from "react-router-dom";
import Mainpage from "./Mainpage";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/mainpage" element={<Mainpage />}></Route>
            
          </Routes>
          {/* <LoginPage />
          <Navbar />
          <Modal /> */}
        </div>
      </>
    );
  }
}

export default App;
