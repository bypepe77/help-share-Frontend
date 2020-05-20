import React, { Component } from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import {
    home,
    person,
    triangle,
    calendar,
    personCircle,
    map,
    informationCircle,
  } from "ionicons/icons";
import PrivateRoute from "../components/Login/PrivateRoute";
import Home from "../components/Home";
import Profile from "../components/UserProfile/Profile";
import { withAuth } from "../Context/AuthContext";
class Bottom extends Component {
    render() {
        const { user } = this.props;
        return (
            <>
              <IonTabs>
                  <IonRouterOutlet>
                    <PrivateRoute exact path="/tab:(home)" component={Home} />
                    <PrivateRoute exact path="/tab:(profile)/:username" component={Profile} />
               </IonRouterOutlet>
                <IonTabBar slot="bottom">
                <IonTabButton tab="schedule" href="/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                    <IonBadge color="primary">6</IonBadge>
                </IonTabButton>
                <IonTabButton tab="speakers" href={`/profile/${user.username}`}>
                    <IonIcon icon={person} />
                    <IonLabel>Perfil</IonLabel>
                </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </>
        );
    }
}

export default withAuth(Bottom);