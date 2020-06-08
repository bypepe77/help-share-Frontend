import React, { Component } from 'react';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add } from  'ionicons/icons';
import { withAuth } from "../Context/AuthContext";
import Bottom from "../Menu/Bottom";
import { DivAddPost } from "../css/index";

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
                    <DivAddPost>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton style={{marginBottom: "60px"}}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    </DivAddPost>
                </IonContent>
            </IonApp>
        );
    }
}

export default withAuth(Home);