import React, { useState } from 'react';
import { IonPage, IonContent, IonItem,  IonTextarea, IonInput  } from '@ionic/react';
import {ButtonWritePost} from "../../css/index";


const TextArea = (props) => {
    const [state, setText] = useState({text: ""});

    const handleInputChange = (e) =>{
        setText({
            [e.target.name] : e.target.value,
        })
    }
    const sendData = (e) =>{
        const { addPost } = props;
        e.preventDefault()
        addPost();
    }
    return(
        <IonPage>
            <IonContent>
                <form onSubmit={sendData}>
                    <IonItem>
                        {console.log(state.text.length)}
                        <IonTextarea name="text" onIonChange={handleInputChange} />
                        { state.text.length > 0 ? <ButtonWritePost>Publicar</ButtonWritePost> : <ButtonWritePost disabled={true}>Publicar</ButtonWritePost> }  
                    </IonItem>
                </form>
            </IonContent>
        </IonPage>
    );
  
  }
  export default TextArea;