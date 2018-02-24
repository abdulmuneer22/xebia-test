import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { metrics, colors } from "../../constants";

const Button = ({ label,onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: metrics.WIDTH * 0.8,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "white",
        paddingHorizontal: 15,
        marginVertical: 20,
        borderRadius: 6,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontFamily: "semi_bold",
          fontSize: 20
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
