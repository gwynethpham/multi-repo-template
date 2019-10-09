import React, { Component } from "react";
import HomeScreen from "../Modules/HomeScreen.js";
import MainScreenNavigator from "../Modules/ChatScreen";
import ProfileScreen from "../Modules/ProfileScreen";
import SideBar from "../Modules/SideBar";
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
