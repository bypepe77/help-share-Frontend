import React from 'react';
import "../../css/styles.css";

const ListPosts = (props) =>{
    const { post } = props;
    return (
        <div className="post-card">
            <div className="user-info">
                <p>{post.username.username}</p>
            </div>
            <p>{post.text}</p>
        </div>
      );
}


export default ListPosts;