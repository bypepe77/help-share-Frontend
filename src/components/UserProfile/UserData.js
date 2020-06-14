import React from "react"
import Post from "../Posts/Post";

const userProfile = (profile, posts) =>{
    return (
        <div className="user-Profile">
            <p>{profile[0].name}</p>
            <p>{profile[0].surname}</p>
            <div className="user-Posts">
                <Post posts={posts}/>
            </div>
        </div>
    )
}
export {
    UserError,
    userProfile
}