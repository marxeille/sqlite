// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Create Hero"
          onPress={() => this.props.navigation.navigate("CreateHeroView")}
        />
      </View>
    );
  }
}
