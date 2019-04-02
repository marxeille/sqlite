import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeView from "../views/HomeView";
import UpdateHeroView from "../views/UpdateHeroView";
import CreateHeroView from "../views/CreateHeroView";
import React, { Component } from "react";

const StackHero = createStackNavigator(
  {
    Home: { screen: HomeView },
    UpdateHero: { screen: UpdateHeroView },
    CreateHeroView: { screen: CreateHeroView }
  },
  {
    initialRouteName: "Home"
  }
);

const StackHeroContainer = createAppContainer(StackHero);

export default class App extends Component<Props> {
  render() {
    return <StackHeroContainer />;
  }
}
