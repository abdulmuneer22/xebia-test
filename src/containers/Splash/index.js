import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import {colors} from '../../constants'

export class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      Actions.login();
    }, 2000);
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: colors.PURPLE,
          flex: 1,
          justifyContent : 'center',
          alignItems : 'center'
        }}
      >
        <Text
        style={{
          fontSize : 18,
          color : 'white'
        }}
        > Demo App </Text>
      </View>
    );
  }
}

export default SplashScreen;
