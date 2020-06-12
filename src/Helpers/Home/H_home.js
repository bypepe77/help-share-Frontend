import React from "react"
import Post from "../../components/Posts/Post";

const categories = ["TestSlide1", "TestSlide2", "TestSlide3", "TestSlide4", "TestSlide5", "TestSlide6", "TestSlide7", "TestSlide8"];

const PostStatus = (posts) =>{
    if(posts.length === 0 ){
        return(
            <div>
                <p>No hay ninguna publicación que mostrar.</p>
            </div>
        )
    }else{
        return(
            <div>
                <Post posts={posts} />
            </div>
        )
    }
}
export {
    categories,
    PostStatus
}