import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonMenuButton, IonMenu,IonList,IonItem, IonRouterOutlet, IonMenuToggle, IonApp, IonPage } from '@ionic/react';

class Menu extends Component {
    render() {
        return (
            
            <IonMenu contentId="main" menuId="main" side="end">
            <IonHeader>
                <IonToolbar color="primary">
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <Link to="/home">
                        <IonMenuToggle>
                            <IonItem button>
                                <IonIcon slot="start" name="home"></IonIcon>
                                <IonLabel>Ajustes</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </Link>
                <IonMenuToggle>
                    <NavLink style={{textDecoration: 'none'}} to="/list">
                        <IonItem button>
                            <IonIcon slot="start" name="list" />
                            <IonLabel>List</IonLabel>
                        </IonItem>
                    </NavLink>
                </IonMenuToggle>
                </IonList>
            </IonContent>
            </IonMenu>
        );
    }
}

export default Menu;