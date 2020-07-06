import React, { useState , useEffect }  from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import postServices from '../../Services/postService';
import Post from "./Post";

const PostDetail = (props) => {
    const [state, setState] = useState({
        loading: true,
        post: [],
        comments: [],
        error: "",
    })
    const getPost = async () =>{
        try {
         const posts = await postServices.postDetail(props.match.params.postid);
         console.log("posts", posts);
         setState({
             loading: false,
             post: [posts.postDetail],
             comments: posts.postComments,

         })
        } catch (error) {
            console.log("error")
            setState( prev => ({
                ...prev,
                loading: false,
                error: "Esta publicación no esta disponible",
            }))
        }
    }
    useEffect(() => {
        getPost();
       }, []);
    return (
        <IonPage>
               <IonHeader>
                 <IonToolbar>
                    <IonTitle>Publicación</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Post posts={state.post} />
                <p>Comentarios</p>
                {state.comments ? <Post posts={state.comments} /> : <p>No ahy respuestas a esta publicación</p> }
            </IonContent>
        </IonPage>
    )
}


export default PostDetail