import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Actions} from 'react-native-router-flux'

export class SplashScreen extends Component {
    componentDidMount = () => {
      setTimeout(() => {
        Actions.login()
      }, 2000);
    }
    



  render() {
    return (
      <View
      style={{
        backgroundColor : 'red',
        flex : 1
      }}
      >
        <Text> Splash </Text>
      </View>
    )
  }
}

export default SplashScreen