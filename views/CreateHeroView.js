// In App.js in a new project

import React from "react";
import { View, TextInput, Button } from "react-native";
import Hero from "../models/Hero";
import styles from "../styles/styles";

export default class CreateHeroView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: new Hero()
    };
    this.onCreateHero = this.onCreateHero.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName = (name: string) => {
    let hero = this.state.hero;
    hero.heroName = name;
    this.setState(hero);
    console.log("on change to " + name);
  };

  onCreateHero = () => {
    console.log("created hero " + this.state.hero.heroName);
    return true;
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={[styles.input, styles.generalFontSize]}
          placeholder="Hero name..."
          onChangeText={text => this.changeName(text)}
          onSubmitEditing={this.createHero}
          value={this.state.hero.heroName}
        />
        <Button
          onPress={this.onCreateHero}
          title="Create"
          color="#841584"
          accessibilityLabel="Click to create a new hero"
        />
      </View>
    );
  }
}
