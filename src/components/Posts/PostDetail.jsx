import React, { useState , useEffect }  from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from "@ionic/react";
import { arrowBack } from  'ionicons/icons';
import {withRouter} from 'react-router-dom';
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
         setState({
             loading: false,
             post: [posts.postDetail],
             comments: posts.postComments,

         })
        } catch (error) {
            setState( prev => ({
                ...prev,
                loading: false,
                error: "Esta publicación no esta disponible o ha sido eliminada",
            }))
        }
    }
    const goBack = () =>{
        props.history.goBack();
    }
    useEffect(() => {
        getPost();
       }, []);
    return (
        <IonPage>
               <IonHeader>
                 <IonToolbar>
                    <div>
                         <IonIcon icon={arrowBack}  className="back-arrow" onClick={goBack}/> 
                    </div>
                    <IonTitle>Publicación</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {!state.error ? 
                    <>
                        <Post posts={state.post} />
                        <p>Comentarios</p>
                        {state.comments ? <Post posts={state.comments} /> : <p>No hay respuestas a esta publicación</p> }
                    </>
                : 
                    <div className="error-postDetail">
                        <p>{state.error}</p>
                     </div>
                }
            </IonContent>
        </IonPage>
    )
}


export default withRouter(PostDetail)