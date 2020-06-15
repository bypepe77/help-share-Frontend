import React, { Component } from 'react';
import { IonContent, IonHeader, IonLabel, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonMenuButton, IonMenu,IonList,IonItem, IonRouterOutlet, IonMenuToggle, IonApp , IonSpinner,  IonPage } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";
import profileServices from "../../Services/profileService";
import Menu from "../Menu/Menu";
import { userProfile } from "./UserData.js"
import { DivUserProfile, DivSpinner } from "../../css/index";
import "../../css/styles.css";

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
        try {
            const userProfile = await profileServices.listUserProfile(username);
            this.setState({
                profile: userProfile.userProfile,
                posts: userProfile.posts,
                loading: false
            })
        } catch (error) {
            this.setState({
                error: "El perfil que estas buscando no existe o no esta disponoible.",
                loading: false
            })
        }
    }
    render() {
        const { profile, error, loading, posts } = this.state;
        console.log(posts)
        return (
          <IonPage>
            <IonRouterOutlet id="main"></IonRouterOutlet>
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
                    {error  && <div className="error"> <p>{error}</p></div> }
                    {loading && <DivSpinner> <IonSpinner name="dots" /> </DivSpinner>}
                    {!error && !loading && <DivUserProfile>{userProfile(profile, posts)}</DivUserProfile>}
                </IonContent>
          </IonPage>
        );
    }
}

export default withAuth(Profile);