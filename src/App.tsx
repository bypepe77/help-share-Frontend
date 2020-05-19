import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import AnonRoute from "./components/Login/AnonRoute";
import PrivateRoute from "./components/Login/PrivateRoute";
import Login from "./components/Login/Login";
import {
  home,
  person,
  triangle,
  calendar,
  personCircle,
  map,
  informationCircle,
} from "ionicons/icons";
import AuthProvider, { withAuth } from "./Context/AuthContext";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Home from "./components/Home";
import Profile from "./components/UserProfile/Profile";
import Menu from "./Menu/Menu";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <AuthProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Switch>
                <AnonRoute exact path="/" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/profile" component={Profile} />
              </Switch>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="schedule" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
                <IonBadge color="primary">6</IonBadge>
              </IonTabButton>
              <IonTabButton tab="speakers" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Perfil</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </AuthProvider>
    </IonApp>
  );
};

export default App;
