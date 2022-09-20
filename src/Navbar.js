import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }
componentWillUnmount(){
  console.log("Navbar page unmount")
}
  render(props) {
    // console.log(this.props)
    return (
      <div className="navbar-container">
        <img
          className="navbar-logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt="instagram-logo"
        ></img>
        <button onClick={this.props.openModal} className="navbar-addfile-btn">
          Add post
        </button>
        <Link to="/">
          <button onClick={this.props.setLogout} className="navbar-logout-btn">
            Logout
          </button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
