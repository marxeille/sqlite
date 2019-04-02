// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";

export default class CreateHeroView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>CreateHeroView Screen</Text>
      </View>
    );
  }
}
