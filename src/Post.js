import React, { Component } from 'react';
// import {AiOutlineHeart} from "react-icons/fa";
// let comment = "";
export class Post extends Component {
    constructor(props) {
      super(props)
     this.state = {
        follow: false,
        postArray: [],
        comment:'',
     }
     
    }

    handleClick = () => {
        this.setState({follow: !this.state.follow});
    }

    handleInputChange = (e) => {
      // comment = e.target.value;
      this.setState({comment:e.target.value})
    }

    posthandler = (e) => {
      // return <p className="post-footer-message"><strong>Muthu</strong>`${comment}`</p>
      // console.log(e.target.value)
      // const temp = [...this.state.postArray];
      // temp.push(this.state.comment);
      this.setState({postArray:[...this.state.postArray, this.state.comment], comment:""})
    }
    
  render() {
    const {username, location, caption, imageUrl} =  this.props;
    console.log(this.state)
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
             <button className="follow-btn" onClick={this.handleClick}>{ this.state.follow ? "Unfollow" : "Follow" }</button>
           </div>
        </div>
        
        <img className="post-mainpic" src={imageUrl} alt="sample"></img>

        <div className="post-footer">
           <p className="post-footer-message"><strong>{username}</strong>{caption}</p>
           {this.state.postArray &&
           this.state.postArray.map(post=>{
            return <p className='post-footer-commentbox'><strong>Muthu</strong>{post}</p>
           })
          
           }
           
           <div className="post-footer-comment">
                <input type="text" value={this.state.comment} onChange={(e)=>{this.handleInputChange(e)}} className="post-footer-input" placeholder="Add a comment..."/>
                <p className="post-footer-button" onClick={(e)=>{this.posthandler(e)}}>Post</p>
           </div>

           {/* <AiOutlineHeart/>      */}
        </div>   
    </div>
    </>
      
    )
  }
}

export default Post