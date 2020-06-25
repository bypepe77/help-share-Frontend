import React, { Component } from 'react';
import {IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { home, person } from "ionicons/icons";
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import { DivMenu } from "../css/index";
import "../css/styles.css";

class Bottom extends Component {
    render() {
        const { user } = this.props;
        return (
            <>
               {
                  user && ( 
                    <DivMenu>
                        <div style={{width: "50%"}} className="background-color">
                            <Link to="/home">
                                <IonTabButton >
                                    <IonIcon icon={home} className="icon-menu" />
                                    <IonLabel className="icon-menu">Home</IonLabel>
                                    <IonBadge>6</IonBadge>
                                </IonTabButton>
                            </Link>
                        </div>
                        <div style={{width: "50%", color: "black"}} className="background-color">
                            <Link to={`/profile/${user.username}`}>
                                <IonTabButton >
                                    <IonIcon icon={person} className="icon-menu"/>
                                    <IonLabel className="icon-menu">profile</IonLabel>
                                </IonTabButton>
                            </Link>
                        </div>

                    </DivMenu>
                  )
               }
            </>
        );
    }
}

export default withAuth(Bottom);