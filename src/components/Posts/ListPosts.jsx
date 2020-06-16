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
    const ExistLink = (text) =>{
       const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
       const getUrl =  text.match(urlRegex, (url) =>{
           return url
       })
       const deleteUrl = text.replace(urlRegex, "");
       if(getUrl){
             return ( 
                <div>
                    <p className="post-text">{deleteUrl}</p>
                    <ReactTinyLink
                        cardSize="small"
                        showGraphic={true}
                        maxLine={3}
                        minLine={3}
                        url={getUrl.toString()}
                    />
                </div>
            )
         }else{
             return <p className="post-text">{deleteUrl}</p>
        }
    }
    return (
        <div className="post-card">
            <div className="user-info" >
                <img src={UserImage} width="40px" height="40px"/>
                <Link to={`/profile/${post.username.username}`}>
                    <p className="username-size">{post.username.username}</p>
                </Link>
                <div className="post-date">
                    <Moment fromNow date={DateToFormat}></Moment>
                </div>
                <div className="user-actions">
                    <IonIcon icon={ellipsisHorizontal} onClick={() => {console.log("click")}} class="icon-user-actions"/>
                </div>
            </div>
            <div>
                {ExistLink(post.text)}
            </div>
        </div>
      );
}


export default ListPosts;