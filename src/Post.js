import React, { Component } from "react";
import {
  FaRegHeart,
  FaComment,
  FaPaperPlane,
  FaBookmark,
  FaHeart,
} from "react-icons/fa";
import { notification, Space, Tooltip } from "antd";
import "antd/dist/antd.css";

const openNotificationWithIcon = (type) => {
  if (type === "success") {
    notification[type]({
      message: "Success",
      description: "New Comment added",
    });
  } else if (type === "warning") {
    notification[type]({
      message: "Alert",
      description: "Comment deleted",
    });
  }
};
// let comment = "";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: false,
      commentArray: [],
      comment: "",
      likeIcon: this.props.liked,
      contentEditable: false,
    };
    this.commentRef = React.createRef();
    // this.listRef=null;
    this.editRef = React.createRef();
  }
  handleCommentFocus = () => {
    this.commentRef.current.focus();
    this.setState({ contentEditable: !this.state.contentEditable });
  };
  handleClick = () => {
    this.setState({ follow: !this.state.follow });
  };

  handleInputChange = (e) => {
    // comment = e.target.value;

    this.setState({ comment: e.target.value });
  };
  setlistRef = (ref) => {
    this.listRef = ref;
  };

  commentHandler = (e) => {
    // return <p className="post-footer-message"><strong>Muthu</strong>`${comment}`</p>
    // console.log(e.target.value)
    // const temp = [...this.state.commentArray];
    // temp.push(this.state.comment);
    if (this.state.comment !== "") {
      this.setState({
        commentArray: [...this.state.commentArray, this.state.comment],
        comment: "",
      });
    }
  };

  handleEnterKeyPress = (e) => {
    this.setState({ comment: e.target.value });
    if (this.state.comment !== "") {
      this.setState({
        commentArray: [...this.state.commentArray, this.state.comment],
        comment: "",
      });
    }
  };
  handleLikeIconClick = () => {
    this.setState({ likeIcon: !this.state.likeIcon });
  };

  handleDeleteComment = (i) => {
    console.log("firstdel", i);
    let newC = this.state.commentArray.filter((comment, index) => i !== index);
    console.log(newC);
    // e.stopPropagation();

    this.setState({ commentArray: newC });
  };

  handleEdit = (e, i) => {
    console.log(e.currentTarget.disabled);
    console.log(e.currentTarget.nextSibling.innerText);
    e.currentTarget.isEnabled="false";
    e.currentTarget.nextSibling.isEnabled = "true";
    // console.log(this.state.commentArray);
    const updatedArray = [...this.state.commentArray];
    // updatedArray[i] = '';
    // this.setState({ commentArray: updatedArray});
    // this.editRef.current.focus();

    // this.setState({contentEditable:!this.state.contentEditable});

    // this.commentRef.current.focus();
    // this.commentRef.current.value=updatedArray[i];

    // console.log(this.editRef.current.isContentEditable)
    // this.editRef.current.isContentEditable=true;
    console.log(updatedArray[i]);

    // console.log(e.target)
    // this.setState({ contentEditable: !this.state.contentEditable });
    // if(e.target.previousSibling.previousSibling.contentEditable==="false"){
    //   e.target.previousSibling.previousSibling.contentEditable="true";
    //   e.target.innerText="Post";
    // }else{
    //   e.target.previousSibling.previousSibling.contentEditable="false";
    //   e.target.innerText="Edit";
    // }
    console.log(i);
    this.commentRef.current.focus();
    this.commentRef.current.value = `${updatedArray[i]}`;
    // updatedArray[i]="";

    // this.setState({commentArray:updatedArray});

    // this.setState({})
    // console.log(this.state.commentArray.map((comment, index)=>{
    //   return comment;
    // }))

    // e.target.innerText="Post":"Edit";

    // this.editRef.current.contentEditable=true;
    // console.log("edit");
    // console.log(i)
    // this.state.commentArray[i].
    // this.state.commentArray.map((comment, index)=>comment[i])
    // console.log(e.target.previousSibling.previousSibling.contentEditable);
  };
  //  shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.commentArray.length!==nextState.commentArray.length){
  //     return true;
  //   }
  // console.log("Nextprops:", nextProps);

  // return true;
  //  }
  handleUpdateComment = (e, i) => {
    
    if(this.commentRef.current.value!==""){
      const newCom = [...this.state.commentArray];
      newCom[i] = this.commentRef.current.value;
    this.setState({ commentArray: newCom, comment: "" });

    }
    

    // updatedArray[i]=this.commentRef.current.value;
    // this.setState({commentArray:updatedArray});
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("Prev:",prevState.commentArray.length);
    // console.log("Current:",this.state.commentArray.length);
    //
    // if(prevState.commentArray.length<this.state.commentArray.length){
    // const x = this.listRef.current;

    //     console.log("first")
    // return this.listRef.scrollHeight-this.listRef.scrollTop;

    return this.state.commentArray.length - prevState.commentArray.length;
  }
  // return null;
  // }
  // console.log("Previous props:", prevProps);
  // console.log("Previous state:", prevState);
  // console.log("Snapshot:", snapshot)
  //
  // this.listRef.current.autofocus=true;

  // }
  // static getDerivedStateFromProps(props, state){
  //   return ({likeIcon:props.liked})
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Snapshot:", snapshot);

    // console.log("Listref:",this.listRef.current.lastChild)
    // if(snapshot!==null){
    //   console.log("second")
    // const list = this.listRef.current;

    //   console.log("CDI scrolltop:", this.listRef.scrollTop);
    //   console.log( "CDI Scrollheight:", this.listRef.scrollHeight);
    //   this.listRef.scrollTop = this.listRef.scrollHeight - snapshot;
    //   console.log("Scrolltop:",this.listRef.scrollTop)
    // }
    // this.listRef.current.autofocus=true;

    {
      if (snapshot === 1) {
        <Space>{openNotificationWithIcon("success")}</Space>;
      } else if (snapshot === -1) {
        <Space>{openNotificationWithIcon("warning")}</Space>;
      }
    }
  }

  render() {
    const { username, location, caption, imageUrl, liked } = this.props;
    // console.log(this.state);
    return (
      <>
        <div className="post-container">
          <div className="post-header">
            <div className="post-header-left">
              <img
                className="post-displaypic"
                src="https://via.placeholder.com/600/92c952"
                alt="sample"
              ></img>
              <div className="post-details">
                <h4 className="post-username">
                  <strong>{username}</strong>
                </h4>
                <p className="post-location">{location}</p>
              </div>
            </div>
            <div className="post-header-right">
              <button className="follow-btn" onClick={this.handleClick}>
                {this.state.follow ? "Unfollow" : "Follow"}
              </button>
              <button
                className="btn-deletePost"
                onClick={() => this.props.handleDeletePost(this.props.index)}
              >
                Delete
              </button>
            </div>
          </div>

          <img className="post-mainpic" src={imageUrl} alt="sample"></img>

          <div className="post-footer">
            <div className="icon-container">
              <span onClick={this.handleLikeIconClick}>
                {this.state.likeIcon ? (
                  <Tooltip placement="bottom" title="Unlike">
                    <FaHeart size={25} />
                  </Tooltip>
                ) : (
                  <Tooltip placement="bottom" title="Like">
                    <FaRegHeart size={25} />
                  </Tooltip>
                )}
              </span>
              <span onClick={this.handleCommentFocus}>
                <Tooltip placement="bottom" title="Comment">
                  <FaComment size={25} />
                </Tooltip>
              </span>
              <Tooltip placement="bottom" title="Share">
                <FaPaperPlane size={25} />
              </Tooltip>
              <Tooltip placement="bottom" title="Save">
                <FaBookmark size={25} className="i-bookmark" />
              </Tooltip>
            </div>
            {this.state.likeIcon && (
              <div>Liked by {this.props.currentUser}</div>
            )}
            <p className="post-footer-message">
              <strong>{username}</strong>
              {caption}
            </p>
            <div className="comments-section">
              {this.state.commentArray &&
                this.state.commentArray.map((post, index) => {
                  return (
                    <p className="post-footer-commentbox">
                      <strong>{this.props.currentUser}</strong>

                      <p
                        // contentEditable={this.state.contentEditable}
                        ref={this.editRef}
                      >
                        {post}
                      </p>

                      <button onClick={() => this.handleDeleteComment(index)}>
                        Delete
                      </button>
                      <button onClick={(e) => this.handleEdit(e, index)}>
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          this.handleUpdateComment(e, index);
                        }}
                      >
                        Update
                      </button>
                    </p>
                  );
                })}
            </div>

            <div className="post-footer-comment">
              <input
                type="text"
                value={this.state.comment}
                ref={this.commentRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    // e.preventDefault();
                    this.handleEnterKeyPress(e);
                  }
                }}
                onChange={(e) => {
                  this.handleInputChange(e);
                }}
                className="post-footer-input"
                placeholder="Add a comment..."
              />
              <div
                className="post-footer-button"
                onClick={(e) => {
                  this.commentHandler(e);
                }}
              >
                Post
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
