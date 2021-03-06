import React from "react";
import { Switch } from "react-router-dom";
import AnonRoute from "./components/Login/AnonRoute";
import PrivateRoute from "./components/Login/PrivateRoute";
import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthContext";
import Home from "./components/Home";
import Profile from "./components/UserProfile/Profile";
import Bottom from "./Menu/Bottom";
import Settings from "./components/Settings/Settings";
import Category from "./components/Category/Category";
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
import PostDetail from "./components/Posts/PostDetail";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
              <Switch>
                <AnonRoute exact path="/" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/profile/:username" component={Profile} />
                <PrivateRoute exact path="/settings" component={Settings} />
                <PrivateRoute exact path="/category/:category" component={Category} />
                <PrivateRoute exact path="/detail/:postid" component={PostDetail} />
              </Switch>
            <Bottom></Bottom>
      </AuthProvider>
    </>
  );
};

export default App;
