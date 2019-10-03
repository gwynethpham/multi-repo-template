import React from 'react';
import {View, Text} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DefaultLayout from './module/layout/layout';
import IScrolled from './module/layout/IScrolled'

const AppNavigator = createStackNavigator(
	{
		Home : DefaultLayout,
		IScrolled : IScrolled

	}, 
	{
		initialRouteName : 'Home',
		defaultNavigationOptions: {
	      headerStyle: {
	        backgroundColor: '#f4511e',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)

export default AppNavigator;