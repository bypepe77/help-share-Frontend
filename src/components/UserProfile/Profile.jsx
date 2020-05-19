import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";
class Profile extends Component {
    render() {
        return (
            <IonContent>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Profile</IonTitle>
                     </IonToolbar>
                </IonHeader>
                <p>aaaa</p>
            </IonContent>
        );
    }
}

export default Profile;