import React, { Component } from 'react';
import {IonModal, IonButtons, IonBackButton,  IonContent, IonHeader, IonSpinner, IonPage, IonTitle, IonText, IonToolbar, IonToggle, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonFab, IonIcon , IonFabButton} from '@ionic/react';
import { add, moon } from  'ionicons/icons';
import { Link } from "react-router-dom";
import { withAuth } from "../Context/AuthContext";
import { DivAddPost } from "../css/index";
import { categories, PostStatus } from "../Helpers/Home/H_home";
import TextArea from "./Modal/TextArea";
import "../css/scroll.css";
import postServices from "../Services/postService";
import PhotoCategory from "../images/cambio_climatico.jpg"

class Home extends Component {
    state = {
        ShowModal: false,
        posts: [],
        userPosts: [],
        loading: true,
        error: undefined,
    }

    async componentDidMount(){
        try {
            const posts = await postServices.listAllPost()
            this.setState({
                posts,
                loading: false
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: "En estos momentos no ha sido posible cargar las publicaciones."
            });
        }
    }
    modalController = () =>{
        const {ShowModal} = this.state;
        this.setState({
            ShowModal: !ShowModal,
        })
    }
      addPost = publications =>{
        const {ShowModal} = this.state;
            this.setState({
                ShowModal: !ShowModal,
                posts: publications,
            })
      }

    render() {
        const { posts, error, loading, ShowModal } = this.state;
        const { user } = this.props;
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
                                        <Link  to={`/category/${listCategory}`}>
                                            <img src={PhotoCategory}/>
                                        </Link>
                                        <p>{listCategory}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        {loading && (
                            <div className="loading">
                                <IonSpinner name="dots" />
                            </div>
                        )}
                        {!error ? (!loading && PostStatus(posts)
                             ) : (
                                <div>
                                    <p>{error}</p>
                                </div>
                         )}
                    </div>
                    <DivAddPost>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{marginBottom: "62px",  position: "fixed"}}>
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
                                    <TextArea addPost={this.addPost} username={user}/>
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