import React, { Component } from "react";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonBadge 
  } from '@ionic/react';
  import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

class Menu extends Component {
  render() {
    return (
      <>
          <IonTabButton tab="schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>
    
          <IonTabButton tab="speakers">
            <IonIcon icon={personCircle} />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>
    
          <IonTabButton tab="map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
    
          <IonTabButton tab="about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
      </>
    );
  }
}

export default Menu;
