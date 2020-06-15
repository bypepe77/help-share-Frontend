import React from 'react';
import {IonPage, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar} from '@ionic/react';

const Settings = () =>{
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Ajustes</p>
                </IonContent>
            </IonPage>
        );
}

export default Settings;