import React, { Component, useState } from 'react';
import {IonModal, IonButtons, IonBackButton,  IonContent, IonHeader, IonPage, IonTitle, IonText, IonToolbar, IonToggle, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add, moon } from  'ionicons/icons';
import { withAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Bottom from "../Menu/Bottom";
import { DivAddPost } from "../css/index";
import { NavLink } from 'react-router-dom';
import { categories, PostStatus } from "../Helpers/Home/H_home";
import TextArea from "./Modal/TextArea";
import "../css/scroll.css";
import postServices from "../Services/postService";
import Post from "./Posts/Post";
class Home extends Component {
    state = {
        ShowModal: false,
        posts: [],
        userPosts: [],
        loading: true,
        error: undefined,
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
    toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
      };

    render() {
        const { ShowModal } = this.state;
        const { posts, error, loading } = this.state;
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
                    <IonList className="ion-margin-top">
                        <IonItem>
                            <IonIcon slot="start" icon={moon} />
                            <IonLabel>Dark Mode</IonLabel>
                            <IonToggle
                                slot="end"
                                name="darkMode"
                                onIonChange={this.toggleDarkModeHandler}
                            />
                        </IonItem>
                    </IonList>
                    <div>
                        {!error ? (!loading && PostStatus(posts)
                             ) : (
                                <div>
                                    <p>{error}</p>
                                </div>
                         )}
                    </div>
                    <DivAddPost>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{marginBottom: "62px"}}>
                            <IonFabButton onClick={this.modalController}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    </DivAddPost>
                        <IonModal isOpen={ShowModal}>
                            <IonHeader>
                                <IonToolbar>
                                    <IonButtons slot="start">
                                        <IonBackButton defaultHref="home" color="dark"/>
                                    </IonButtons>
                                     <IonTitle>Add post</IonTitle>
                                </IonToolbar>
                            </IonHeader>
                            <IonContent>
                                <IonText color="dark">
                                    <p>Publicacion label</p>
                                    <TextArea addPost={this.modalController}/>
                                </IonText>
                            </IonContent>
                            <IonButton onClick={this.modalController}>Cerrar</IonButton>
                     </IonModal>
                </IonContent>
            </IonPage>
           
        );
    }
}

export default withAuth(Home);