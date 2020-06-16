import React from "react"
import Post from "../../components/Posts/Post";
import "../../css/styles.css"

const categories = ["Categoría1", "Categoría2", "Categoría3", "Categoría4", "Categoría5", "Categoría6", "Categoría7", "Categoría8"];

const PostStatus = (posts) => {
    if(posts.length === 0 ){
        return(
            <div>
                <p>No hay ninguna publicación que mostrar.</p>
            </div>
        )
    }else{
        return(
            <div className="container-home">
                <Post posts={posts} />
            </div>
        )
    }
}
export {
    categories,
    PostStatus
}