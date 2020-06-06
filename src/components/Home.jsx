import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { withAuth } from "../Context/AuthContext";
import Bottom from "../Menu/Bottom";

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