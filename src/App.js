import React, { Component } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import Post from "./Post";
import Navbar from "./Navbar";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <>
        <div className="App">
          <LoginPage />
          <Navbar />
          <Modal />
        </div>
      </>
    );
  }
}

export default App;
