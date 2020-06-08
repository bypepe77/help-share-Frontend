import React, { Component } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { withAuth } from "../Context/AuthContext";
import Bottom from "../Menu/Bottom";

class Home extends Component {
    render() {
        return (
            <IonApp>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Home</IonTitle>
                     </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Home</p>
                </IonContent>
            </IonApp>
        );
    }
}

export default withAuth(Home);