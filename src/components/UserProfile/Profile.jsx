import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonMenuButton, IonMenu,IonList,IonItem, IonRouterOutlet, IonMenuToggle, IonApp, IonPage } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";
import Menu from "../Menu/Menu";
class Profile extends Component {
    render() {
        return (
          <IonApp id="main">
            <Menu />
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="end">
                            <IonMenuButton autoHide={false} menu="main"/>
                        </IonButtons>
                        <IonTitle>Perfil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                
                
                
          </IonApp>
        );
    }
}

export default Profile;