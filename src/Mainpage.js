import React, { Component } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'
export class Mainpage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Modal />
      </div>
    )
  }
}

export default Mainpage