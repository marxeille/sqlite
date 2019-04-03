// In App.js in a new project

import React from "react";
import { View, TextInput, Button, ToastAndroid, Keyboard } from "react-native";
import Hero from "../models/Hero";
import styles from "../styles/styles";
import Loading from "./Loading";
import { createHero } from "../controllers/HeroController";

export default class CreateHeroView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: new Hero(),
      isLoading: false,
      event: this.props.navigation.state.params.event
    };
    this.onCreateHero = this.onCreateHero.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  changeName = (name: string) => {
    let hero = this.state.hero;
    if (!hero) {
      return;
    }

    if (name != "") {
      hero.heroName = name;
      this.setState({
        hero
      });
    }
    console.log("on change to " + name);
  };

  onCreateHero = () => {
    console.log("created hero " + this.state.hero.heroName);
    this.setState({
      isLoading: true
    });
    createHero(this.state.hero)
      .then(({ result, message }) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
        if (result) {
          if (this.state.event) this.state.event.emit("onCreateHero");
          this.props.navigation.navigate("Home");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
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
