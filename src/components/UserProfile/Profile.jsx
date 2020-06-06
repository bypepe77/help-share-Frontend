import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonMenuButton, IonMenu,IonList,IonItem, IonRouterOutlet, IonMenuToggle, IonApp, IonPage } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";
import profileServices from "../../Services/profileService";
import Menu from "../Menu/Menu";
class Profile extends Component {
    state = {
        posts: [],
        profile: {},
        loading: true,
        isFollowing: null,
        error: undefined,
    }

    async componentDidMount(){
        const { username } = this.props.match.params;
        const { user } = this.props; 
        const userProfile = await profileServices
            .listUserProfile(username)
            .catch(error => {
                this.setState({
                    error: "El perfil que estas buscando no existe o no esta disponible",
                    loading: false
                });
             });
        this.setState({
            profile: userProfile.userProfile,
            posts: userProfile.posts,
        });
    }
    render() {
        const { profile } = this.state;
        console.log(profile.surname);
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
                <IonContent>
                   
                </IonContent>
                
                
          </IonApp>
        );
    }
}

export default withAuth(Profile);