import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <img className="navbar-logo" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="instagram-logo"></img>
        <Link to="/"><button className='navbar-logout-btn'>Logout</button></Link>
        <button onClick={this.handleAddPostClick} className="navbar-addfile-btn">Add post</button>
      </div>
    )
  }
}

export default Navbar