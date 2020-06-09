import React, { Component, useState } from 'react';
import { IonApp,IonModal,  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add } from  'ionicons/icons';
import { withAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Bottom from "../Menu/Bottom";
import { DivAddPost } from "../css/index";
import { NavLink } from 'react-router-dom';

class Home extends Component {
    state = {
        ShowModal: false,
    }
    modalController = () =>{
        const {ShowModal} = this.state;
        this.setState({
            ShowModal: !ShowModal,
        })
    }

    render() {
        const { ShowModal } = this.state;
        return (
            <IonPage>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Home</IonTitle>
                     </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Home</p>
                    <DivAddPost>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{marginBottom: "60px"}}>
                            <IonFabButton onClick={this.modalController}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    </DivAddPost>
                        <IonModal isOpen={ShowModal}>
                            <p>Publicacion</p>
                        <IonButton onClick={this.modalController}>Cerrar</IonButton>
                     </IonModal>
                </IonContent>
            </IonPage>
           
        );
    }
}

export default withAuth(Home);