import React, { Component, useState } from 'react';
import { IonApp,IonModal,  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add } from  'ionicons/icons';
import { withAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Bottom from "../Menu/Bottom";
import { DivAddPost } from "../css/index";
import { NavLink } from 'react-router-dom';
import { categories } from "../Helpers/Home/H_home";
import "../css/scroll.css";
import postServices from "../Services/postService";
class Home extends Component {
    state = {
        ShowModal: false,
        posts: [],
        userPosts: [],
        loading: true,
    }

    async componentDidMount(){
        const { user } = this.props;
        postServices
        .listAllPost()
            .then(posts => {
            const userPosts = posts.filter(elem => elem.username._id === user._id);
            this.setState({
                posts,
                userPosts,
                loading: false
            });
            })
            .catch(error => {
            console.log(error);
                this.setState({
                    loading: false,
                    error: "En estos mementos no ha sido posible cargar las publicaciones"
                });
            });

    }
    modalController = () =>{
        const {ShowModal} = this.state;
        this.setState({
            ShowModal: !ShowModal,
        })
    }

    render() {
        const { ShowModal } = this.state;
        const { posts } = this.state;
        console.log(posts);
        return (
            <IonPage>
                <IonHeader>
                     <IonToolbar>
                        <IonTitle>Home</IonTitle>
                     </IonToolbar>
                </IonHeader>
                <IonContent>
                    <h5>Categorías populares</h5>
                    <div className="scroll">
                        <ul className="scroll-list">
                            {categories.map(listCategory =>{
                                return (
                                    <li key={listCategory} className="scroll-item">
                                        <p>{listCategory}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <DivAddPost>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{marginBottom: "60px"}}>
                            <IonFabButton onClick={this.modalController}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    </DivAddPost>
                        <IonModal isOpen={ShowModal}>
                            <p>Publicacion</p>
                        <IonButton onClick={this.modalController}>Cerrar</IonButton>
                     </IonModal>
                </IonContent>
            </IonPage>
           
        );
    }
}

export default withAuth(Home);