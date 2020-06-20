import React from 'react';
import "../../css/styles.css";
import UserImage from "../../images/default.jpg";
import { Link } from "react-router-dom";
import { ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from '@ionic/react';
import Moment from "react-moment"
import { ReactTinyLink } from 'react-tiny-link'

const ListPosts = (props) =>{
    const { post } = props;
    const DateToFormat = post.created_at;
    
    return (
        <div className="post-card">
            <div className="user-info" >
                <img src={UserImage} width="56px" height="56px"/>
                <div className="user-link">
                    <Link to={`/profile/${post.username.username}`} >
                        <p className="username-size">{post.username.username}</p>
                    </Link>
                </div>
                <div className="post-date">
                    <Moment fromNow date={DateToFormat}></Moment>
                </div>
                <div className="user-actions">
                    <IonIcon icon={ellipsisHorizontal} onClick={() => {console.log("click")}} className="icon-user-actions"/>
                </div>
            </div>
            <div>
                {ExistLink(post.text)}
            </div>
        </div>
      );
}


export default ListPosts;