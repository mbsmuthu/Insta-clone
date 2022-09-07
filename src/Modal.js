import React, { Component } from "react";
import Post from "./Post";

let filepath = "";
let message = "";

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      posts: [
        {
          username: "Nivash",
          location: "Sydney, Australia",
          caption: "Hi everyone! It was a pleasant Evening at Sydney",
          imageUrl:
            "https://images.adsttc.com/media/images/5037/e2fe/28ba/0d59/9b00/0241/newsletter/stringio.jpg?1414218779",
        },
        {
          username: "Subash",
          location: "Birmingham, UK",
          caption: "Rain...Coffee...Rahman",
          imageUrl:
            "https://image.shutterstock.com/image-photo/hanging-lightbulb-glowing-open-source-600w-463051603.jpg",
        },
        {
          username: "Saravana",
          location: "Seattle, US",
          caption: "Was a wonderful trip to Manali",
          imageUrl:
            "https://editorial01.shutterstock.com/wm-preview-1500/13055295a/c72f8ae8/Shutterstock_13055295a.jpg",
        }
      ]
    };
  }

  handleAddPostClick = () => {
    this.setState({showModal: true });
  };
  handleCloseClick = () => {
    this.setState({showModal: false });
  };
  handleFileChange = (e) => {
    filepath = URL.createObjectURL(e.target.files[0]);
  };
  handleComments = (e) => {
    message = e.target.value;
  };

  handlePost = () => {
    console.log(this.state.posts);
    console.log(filepath, message);
    
          
      this.setState({posts:[{username:"Muthu", location: "India", caption: `${message}`,imageUrl:`${filepath}`}, ...this.state.posts]});
   
    this.handleCloseClick();
  }



  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map((post) => {
            return (
              <Post
                username={post.username}
                location={post.location}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            );
          })}
        <button onClick={this.handleAddPostClick}>Add post</button>

        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.handleCloseClick}>
                &times;
              </span>
              <label>Select an image to post:</label>
              <input
                type="file"
                onChange={(e) => this.handleFileChange(e)}
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

              <button onClick={this.handlePost}>Post</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
