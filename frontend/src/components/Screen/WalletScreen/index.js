import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBar from '../../Modules/SideBar';
import HomeWallet from "./HomeWallet";
import MainScreenNavigator from "../../Modules/ChatScreen";
import ProfileScreen from "../../Modules/ProfileScreen";

const Wallet = createDrawerNavigator(
    {
        Alarm: { screen: HomeWallet },
        Notification: { screen: MainScreenNavigator },
        Myaccount: { screen: ProfileScreen },
        Help : { screen : ProfileScreen}

    },
    {
        contentComponent: props => <SideBar {...props} />
    }
)

export default createAppContainer(Wallet);
