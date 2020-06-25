import React, { useState } from 'react';
import { IonPage, IonContent, IonItem,  IonTextarea  } from '@ionic/react';
import {ButtonWritePost} from "../../css/index";
import postServices from "../../Services/postService";

const TextArea = (props) => {
    const [state, setText] = useState({text: ""});

    const handleInputChange = (e) =>{
        setText({
            [e.target.name] : e.target.value,
        })
    }
    const sendData = async (e) =>{
        const { addPost, username } = props;

        e.preventDefault()
        try {
            const post = await postServices.createPost(username.username, state.text);
            if(post){
                const publications = await postServices.listAllPost();
                if(publications){
                    addPost(publications);
                }
            }

        } catch (error) {
            console.log("Error al crear el post");
        }
    }
    return(
        <IonPage>
            <IonContent>
                <form onSubmit={sendData}>
                    <IonItem>
                        <IonTextarea name="text" onIonChange={handleInputChange} />
                        { state.text.length > 0 ? <ButtonWritePost>Publicar</ButtonWritePost> : <ButtonWritePost disabled={true}>Publicar</ButtonWritePost> }  
                    </IonItem>
                </form>
            </IonContent>
        </IonPage>
    );
  
  }
  export default TextArea;