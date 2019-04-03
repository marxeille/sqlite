// In App.js in a new project

import React from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ToastAndroid,
  Keyboard
} from "react-native";
import Hero from "../models/Hero";
import styles from "../styles/styles";
import Loading from "./Loading";
import { updateHero } from "../controllers/HeroController";

export default class UpdateHeroView extends React.Component {
  constructor(props) {
    super(props);
    let hero = new Hero();
    hero.heroName = this.props.navigation.state.params.item.name;
    hero.heroId = this.props.navigation.state.params.item.id;
    this.state = {
      hero,
      isLoading: false
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName = (name: string) => {
    let hero = this.state.hero;
    if (!hero) {
      return;
    }

    if (name != "") {
      let newHero = Object.assign({}, hero, { heroName: name });
      this.setState({
        hero: newHero
      });
    }
  };

  onUpdateHero = () => {
    const { params } = this.props.navigation.state;
    this.setState({
      isLoading: true
    });
    updateHero(this.state.hero)
      .then(({ result, message }) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
        if (result) {
          if (this.state.event) this.state.event.emit("onUpdateHero");
          params.initListHeroes();
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
        <Text>
          Update Hero {this.props.navigation.state.params.item.name} with the id{" "}
          {this.props.navigation.state.params.item.id}
        </Text>
        <TextInput
          style={[styles.input, styles.generalFontSize]}
          placeholder="Hero name..."
          onChangeText={text => this.changeName(text)}
          onSubmitEditing={this.onUpdateHero}
          value={this.state.hero.heroName}
        />
        <Button
          onPress={this.onUpdateHero}
          title="Update"
          color="#841584"
          accessibilityLabel="Click to Update a new hero"
        />
      </View>
    );
  }
}
