import React, { Component } from 'react'
import Navbar from './Navbar'
import Modal from './Modal'
import { notification, Space } from 'antd';
import 'antd/dist/antd.css';
const openNotificationWithIcon = (type) => {
  if(type==="success"){notification[type]({
    message: 'Information',
    description:
      'Logged In',
  });}


else if(type==="info"){
  notification[type]({
    message: 'Information',
    description:
      'Logged Out',
  })}

  else if(type==="warning"){
    notification[type]({
      message: 'Warning',
      description:
        'xxxxx',
    })
  }
}


export class Mainpage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showModal:false
      }
    }
  handleAddPostClick = () => this.setState({showModal: true });
  handleCloseClick = () => this.setState({showModal: false });

  componentDidMount(){
    console.log("Mainpage mount");
    <Space>
    {openNotificationWithIcon('success')}
    {/* <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> */}
  </Space>

  }
  componentWillUnmount(){
    console.log("Mainpage unmount")
   {openNotificationWithIcon("info")}
  }

  render() {
    // console.log(this.props.currentUser)
    // console.log(this.props.setLogin)
    return (
      <div>
        

        <Navbar openModal={this.handleAddPostClick} setLogout={this.props.setLogout}/>
        <Modal showModal={this.state.showModal} closeModal={this.handleCloseClick} username={this.props.username}/>

      </div>
    )
  }
}

export default Mainpage