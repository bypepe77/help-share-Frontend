import React from 'react';
import "../../css/styles.css";
import UserImage from "../../images/default.jpg";
import { Link } from "react-router-dom";
const ListPosts = (props) =>{
    const { post } = props;
    return (
        <div className="post-card">
            <div className="user-info" >
                <img src={UserImage} width="40px" height="40px"/>
                <Link to={`/profile/${post.username.username}`}>
                    <p className="username-size">{post.username.username}</p>
                </Link>
            </div>
            <div>
                <p className="post-text">{post.text}</p>
            </div>
        </div>
      );
}


export default ListPosts;