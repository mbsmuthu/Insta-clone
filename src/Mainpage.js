import React, { Component } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'

export class Mainpage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showModal:false
      }
    }
  handleAddPostClick = () => this.setState({showModal: true });
  handleCloseClick = () => this.setState({showModal: false });

  render() {
    console.log(this.state.postClick)
    return (
      <div>
        <Navbar showModal = {this.state.showModal}/>
        <Modal />
        <button onClick={this.handleAddPostClick} className="navbar-addfile-btn">Add post</button>

      </div>
    )
  }
}

export default Mainpage