import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonMenuButton, IonMenu,IonList,IonItem, IonRouterOutlet, IonMenuToggle, IonApp , IonSpinner,  IonPage } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";
import profileServices from "../../Services/profileService";
import Menu from "../Menu/Menu";
import { UserError, userProfile } from "./UserData.js"
import { DivUserProfile, DivSpinner } from "../../css/index";
class Profile extends Component {
    state = {
        posts: [],
        profile: {},
        loading: true,
        isFollowing: null,
        error: null,
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
        if(userProfile){
            this.setState({
                profile: userProfile.userProfile,
                posts: userProfile.posts,
                loading: false,
            });
        }

    }
    render() {
        const { profile, error, loading } = this.state;
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
                    {error  &&  UserError(error) }
                    {loading && <DivSpinner> <IonSpinner name="dots" /> </DivSpinner>}
                    {!error && !loading && <DivUserProfile>{userProfile(profile)}</DivUserProfile>}
                </IonContent>
          </IonApp>
        );
    }
}

export default withAuth(Profile);