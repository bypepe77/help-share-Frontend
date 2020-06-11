import React, { useState } from 'react';
import { IonPage, IonContent, IonItem,  IonTextarea, IonInput  } from '@ionic/react';

const TextArea = (props) => {
    const [text, setText] = useState("");

    const handleInputChange = (e) =>{
        setText({
            [e.target.name] : e.target.value
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
                        <IonTextarea name="text" onIonChange={handleInputChange} />
                        <IonInput type="submit" value="Publicar"/>
                    </IonItem>
                </form>
            </IonContent>
        </IonPage>
    );
  
  }
  export default TextArea;