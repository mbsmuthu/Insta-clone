import React, { Component } from 'react';
// import {AiOutlineHeart} from "react-icons/fa";
let comment = "";
export class Post extends Component {
    constructor(props) {
      super(props)
     this.state = ({
        follow: false,
     })
     
    }

    handleClick = () => {
        this.setState({follow: !this.state.follow});
    }

    handleInputChange = (e) => {
      comment = e.target.value;
      console.log(comment);
    }

    posthandler = () => {
      
    }
    
  render() {
    const {username, location, caption, imageUrl} =  this.props;
    return (<>
    <div className="post-container">
        <div className="post-header">
            <div className="post-header-left">
                <img className="post-displaypic" src="https://via.placeholder.com/600/92c952" alt="sample"></img>
                <div className="post-details">
                    <h4 className="post-username">{username}</h4>
                    <p className="post-location">{location}</p>
                </div>
            </div>
           <div className='post-header-right'>
             <button className="follow-btn" onClick={()=>this.handleClick}>{ this.state.follow ? "Unfollow" : "Follow"}</button>
           </div>
        </div>
        
        <img className="post-mainpic" src={imageUrl} alt="sample"></img>

        <div className="post-footer">
           <p className="post-footer-message"><strong>{username}</strong>{caption}</p>
           <div className="post-footer-comment">
                <input type="text" onChange={(e)=>{this.handleInputChange(e)}} className="post-footer-input" placeholder="Add a comment..."/>
                <p className="post-footer-button" onClick={this.posthandler}>Post</p>
           </div>

           {/* <AiOutlineHeart/>      */}
        </div>   
    </div>
    </>
      
    )
  }
}

export default Post