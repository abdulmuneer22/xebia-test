import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SearchBox from '../../components/SearchBox'

export class Home extends Component {
  render() {
    return (
      <View
      style={{
        flex : 1,
        backgroundColor : 'white'
      }}
      >
        <SearchBox />
      </View>
    )
  }
}

export default Home