import React, { Component } from 'react';

const ListPosts = (props) =>{
    const { post } = props;
    return (
        <>
            <p>{post.username.username}</p>
            <p>{post.text}</p>
        </>
      );
}


export default ListPosts;