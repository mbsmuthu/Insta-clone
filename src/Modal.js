import React, { Component } from "react";
import Post from "./Post";
import { notification, Space } from 'antd';
import 'antd/dist/antd.css';

const openNotificationWithIcon = (type) => {
  if(type==="success"){
    notification[type]({
      message: 'Success',
      description:
        'New post added',
    })
  }
  if(type==="warning"){
    notification[type]({
      message: 'Warning',
      description:
        'Post deleted',
    })
  }
 
}


let filepath = "";
let message = "";

const defaultPostsState = [
    {
      username: "Nivash",
      location: "Sydney, Australia",
      caption: "Hi everyone! It was a pleasant Evening at Sydney",
      imageUrl:
        "https://images.adsttc.com/media/images/5037/e2fe/28ba/0d59/9b00/0241/newsletter/stringio.jpg?1414218779",
       liked:true 
    },
    {
      username: "Subash",
      location: "Birmingham, UK",
      caption: "Rain...Coffee...Rahman",
      imageUrl:
        "https://image.shutterstock.com/image-photo/hanging-lightbulb-glowing-open-source-600w-463051603.jpg",
        liked:false
    },
    {
      username: "Saravana",
      location: "Seattle, US",
      caption: "Was a wonderful trip to Manali",
      imageUrl:
        "https://editorial01.shutterstock.com/wm-preview-1500/13055295a/c72f8ae8/Shutterstock_13055295a.jpg",
       liked:true 
    }
  ];

export class Modal extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      
      posts: defaultPostsState,
    };
  }

  handleFileChange = (e) => {
    filepath = URL.createObjectURL(e.target.files[0]);
  };
  handleComments = (e) => {
    message = e.target.value;
  };

  handlePost = () => {
    // console.log(this.state.posts);
    // console.log(filepath, message);
    
          
      this.setState({posts:[...this.state.posts, {username:this.props.username, location: "India", caption: `${message}`,imageUrl:`${filepath}`}]});
    this.props.closeModal();
    
  }
  handleDelete = (i) =>{
    const newArr  = this.state.posts.filter((post, index)=>{
      return index !== i;
    })
    // console.log(newArr)
    this.setState({posts:newArr})
    // openNotificationWithIcon("warning")
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Previous props:", prevProps);
    console.log("Previous state:", prevState);
    // console.log("Snapshot:", snapshot)
    return prevState.posts.length-this.state.posts.length;
  }
  // static getDerivedStateFromProps(props, state){
  //   console.log("Derived props:",props)
  //   console.log("Derived state:",state)
  // }
  componentDidUpdate(prevProps, prevState, snapshot){
    
    
    {
      if(snapshot===-1){
<Space>
    {openNotificationWithIcon('success')}

    {/* <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> */}
  </Space>
      }else if(snapshot===1){
        <Space>
    {openNotificationWithIcon('warning')}

    {/* <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> */}
  </Space>
      }
    }

  
  }

  
  


  
  render() {
    // console.log(this.state)
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map((post, index) => {
            return (
              <Post
                username={post.username}
                location={post.location}
                caption={post.caption}
                imageUrl={post.imageUrl}
                currentUser={this.props.username}
                index={index}
                handleDeletePost={this.handleDelete}
                liked={post.liked}
              />
            );
          })}

        {this.props.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.props.closeModal}>
                &times;
              </span>
              <label>Select an image to post:</label>
              <input
                type="file"
                onChange={this.handleFileChange}
                className="input"
                style={{ border: "1px solid black", padding: "1rem" }}
              />
              <label>Add caption:</label>
              <input
                type="text"
                onChange={(e) => this.handleComments(e)}
                className="modal-comment-box"
                placeholder="Enter caption"
              ></input>

              <button onClick={this.handlePost} className="navbar-addfile-btn">Post</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
