import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Category = props => {
    const { category } = props.match.params;

    useEffect(() =>{
        console.log("Mounting");
    });
    return (
        <IonPage>
            <IonHeader>
                 <IonToolbar>
                    <IonTitle>{category}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>{category}</h1>
            </IonContent>
        </IonPage>
    );
};

export default Category;