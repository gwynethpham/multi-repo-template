import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "./ChatScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import SideBar from "./SideBar.js";
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
