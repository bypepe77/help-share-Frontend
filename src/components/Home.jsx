import React, { Component } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add } from  'ionicons/icons';
import { withAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Bottom from "../Menu/Bottom";
import { DivAddPost } from "../css/index";
import { NavLink } from 'react-router-dom';

class Home extends Component {
    handleClick = () => {
        console.log("click");
        this.props.history.push("/profile/mario77");
    }
    render() {
        return (
            <IonPage>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Home</IonTitle>
                     </IonToolbar>
                </IonHeader>
                <IonContent>
                    <p>Home</p>
                        <DivAddPost onClick={ () => console.log("Clicked") } >
                            s
                        </DivAddPost>
                </IonContent>
            </IonPage>
           
        );
    }
}

export default withAuth(Home);