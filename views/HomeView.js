// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ToastAndroid,
  Keyboard
} from "react-native";
import { getAllHeroes } from "../controllers/HeroController";
import { EventEmitter } from "events";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: []
    };
    this.event = new EventEmitter();
  }

  componentDidMount() {
    this.initListHeroes();
    this.event.addListener("onCreateHero", () => this.initListHeroes());
    this.event.addListener("onUpdateHero", () => this.initListHeroes());
    this.event.addListener("onDeleteHero", () => this.initListHeroes());
  }

  initListHeroes() {
    getAllHeroes()
      .then(({ result, message }) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
        if (result) {
          let heroes = [];
          var len = result.length;
          for (let i = 0; i < len; i++) {
            console.log(result.item(i));
            heroes.push(result.item(i));
          }
          this.setState({ heroes });
          Keyboard.dismiss();
        }
      })
      .catch(error => console.log(error));
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Button
        onPress={() =>
          this.props.navigation.navigate("UpdateHero", {
            item,
            event: this.event
          })
        }
        title="Update"
        color="#841584"
        accessibilityLabel="Click to create a new hero"
      />
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hero List</Text>
        <FlatList
          data={this.state.heroes}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Button
          title="Create Hero"
          onPress={() =>
            this.props.navigation.navigate("CreateHeroView", {
              event: this.event
            })
          }
        />
      </View>
    );
  }
}
