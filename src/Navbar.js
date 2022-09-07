import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <img className="navbar-logo" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="instagram-logo"></img>
        <div className="navbar-search">Search</div>
        <button onClick={this.handleAddPostClick} className="navbar-addfile-btn">Add post</button>
      </div>
    )
  }
}

export default Navbar