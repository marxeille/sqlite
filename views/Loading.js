import React from "react";
import { View, Text } from "react-native";
import { loading } from "../styles/styles";

export default class Loading extends React.Component {
  render() {
    const viewStyles = [loading.container, { backgroundColor: "orange" }];
    const textStyles = {
      color: "white",
      fontSize: 40,
      fontWeight: "bold"
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>Splash Screen</Text>
      </View>
    );
  }
}
