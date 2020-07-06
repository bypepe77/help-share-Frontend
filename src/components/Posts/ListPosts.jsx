import React, { Component } from 'react';
import "../../css/styles.css";
import UserImage from "../../images/default.jpg";
import { Link, withRouter  } from "react-router-dom";
import { ellipsisHorizontal, heartSharp, heartOutline, chatbubbleOutline, shareSocialOutline} from "ionicons/icons";
import { IonIcon } from '@ionic/react';
import Moment from "react-moment"
import { ExistLink } from "./post_functions";
import ActionPost from "./ActionPost";
import { withAuth } from "../../Context/AuthContext";
import postServices from "../../Services/postService";

class ListPosts extends Component {
        state = {
            likes: "",
            liked: "",
        }
        componentDidMount(){
            const { post } = this.props;
            this.setState({likes: [...post.likes]})
            this.checkIfUserDidLike()
            
        }
        checkIfUserDidLike = () =>{
            const { user } = this.props;
            const liked = this.props.post.likes.includes(user._id);
            this.setState({
                liked: liked ? true : false,
            });
        }
        handleLike = async  () =>{
            const { post, user } = this.props;
            const { liked } = this.state;
            const makeCall = liked ? postServices.createUnlike(post._id, user.username) : postServices.createLike(post._id, user.username);
            try {
                const makeLike = await makeCall;
                this.setState({
                    likes: [...makeLike.likes],
                    liked: !liked,
                });
            } catch (error) {
                console.log("Error like o unlike");
            }
        }
        handleRedirect = () =>{
            const { post } = this.props;
            this.props.history.push(`/detail/${post._id}`);
        }
        
    render() {
        const { post } = this.props;
        const { likes, liked } = this.state;
        const DateToFormat = post.created_at;
        return (
            <div>
                <div className="post-background" onClick={this.handleRedirect}>
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
                                    <IonIcon icon={ellipsisHorizontal} onClick={() => {console.log("Click")}} className="icon-user-actions"/>
                                </div>
                            </div>
                            <div>
                                {ExistLink(post.text)}
                                <div className="card-footer">
                                    <div className="like-wrapper">
                                        <div className="option">
                                            {liked ? <IonIcon icon={heartSharp} className="like-active" onClick={this.handleLike}/> : <IonIcon icon={heartOutline} onClick={this.handleLike} className="like-deactivated"/>}
                                            <span className="span-likes">{likes.length} Me gusta</span>
                                        </div>
                                        <div className="option">
                                            <IonIcon icon={chatbubbleOutline} className="comment-icon" />
                                            <span className="span-likes">{likes.length}</span>
                                        </div>
                                        <div className="option">
                                            <IonIcon icon={shareSocialOutline} className="share-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
           </div>
        );
    }
}

export default withAuth(withRouter(ListPosts))
