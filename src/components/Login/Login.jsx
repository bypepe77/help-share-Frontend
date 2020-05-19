import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { withAuth } from "../../Context/AuthContext";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "" || password === "") {
      alert("Los campos no pueden estar vacíos");
    } else {
      this.props.handleLogin({
        username,
        password,
      });
    }
  };
  render() {
      const { username, password } = this.state;
      console.log("user" , username)
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonInput value={username} placeholder="Nombre de usuario" onIonChange={this.handleChange} name="username"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput value={password} placeholder="Contraseña" name="password" onIonChange={this.handleChange} type="password"></IonInput>
                    </IonItem>
                    <IonButton color="primary" expand="full" onClick={this.handleFormSubmit}>Iniciar sesión</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
  }
}

export default withAuth(Login);