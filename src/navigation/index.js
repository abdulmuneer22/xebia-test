import React, { Component } from "react";
import { Scene, Router, Modal } from "react-native-router-flux";
import SplashScreen from "../containers/Splash";
import Login from "../containers/Login";
import Home from "../containers/Home";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="splashscreen"
            component={SplashScreen}
            hideNavBar={true}
            direction="fade"
          />

          <Scene
            key="login"
            component={Login}
            hideNavBar={true}
            direction="fade"
          />

          <Scene
            initial={true}
            key="home"
            component={Home}
            hideNavBar={true}
            direction="fade"
          />
        </Scene>
      </Router>
    );
  }
}

export default Navigation;
