import React, { Component } from 'react';

const ListPosts = (props) =>{
    const { post } = props;
    console.log(post.username.username);
    return (
        <>
            <p>{post.username.username}</p>
            <p>{post.text}</p>
        </>
      );
}


export default ListPosts;