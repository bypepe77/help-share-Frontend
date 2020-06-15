import React, { useState } from 'react';
import { IonPage, IonContent, IonItem,  IonTextarea, IonInput  } from '@ionic/react';
import {ButtonWritePost} from "../../css/index";
import postServices from "../../Services/postService";

const TextArea = (props) => {
    const [state, setText] = useState({text: ""});

    const handleInputChange = (e) =>{
        setText({
            [e.target.name] : e.target.value,
        })
    }
    const sendData = (e) =>{
        const { addPost, username } = props;

        //REFACTOR 

        e.preventDefault()
        postServices.createPost(username.username, state.text)
        .then(post =>{
            postServices.listAllPost()
            .then(publications =>{
                addPost(publications);
            })
            .catch(error =>{
                console.log("Error", error)
            })
        })
        .catch(error =>{
            console.log("Error")
        });
    
        // REFACTOR 
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