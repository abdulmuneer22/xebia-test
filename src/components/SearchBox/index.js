import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { metrics } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const InputBox = ({ onChange, isPassword, placeHolder }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderBottomColor: "rgba(1,1,1,0.2)",
        borderColor : 'transparent',
        marginVertical: 10,
        flexDirection: "row",
        alignItems : 'center',
        paddingHorizontal : 2,
        paddingBottom : 10
      }}
    >
      <View
      style={{
          marginLeft : 5
      }}
      >
      <Ionicons name="md-search" size={32} color="green"/>
      </View>

      <TextInput
        placeholder={placeHolder}
        placeholderTextColor="rgba(1,1,1,0.3)"
        underlineColorAndroid="rgba(1,1,1,0)"
        style={{
          width: metrics.WIDTH * 0.8,
          height: 40,
          color: "black",
          marginHorizontal : 10
        }}
        onChangeText={v => onChange(v)}
      />
    </View>
  );
};

export class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKey : ""
        }
    }
    

  render() {
    return (
      <View
        style={{
          width: metrics.WIDTH,
          //backgroundColor: "red",
          marginTop: 25,
          alignSelf: "center"
        }}
      >
        <InputBox
        placeHolder="Start typing ... eg Luke Skywalker"
        onChange = {(k) => {
            this.setState({
                searchKey : k
            })
        }}
        />
      </View>
    );
  }
}

export default SearchBox;
