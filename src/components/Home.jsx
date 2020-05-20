import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { withAuth } from "../Context/AuthContext";


class Home extends Component {
    render() {
        return (
            <IonContent>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Home</IonTitle>
                     </IonToolbar>
                </IonHeader>
            </IonContent>
        );
    }
}

export default withAuth(Home);