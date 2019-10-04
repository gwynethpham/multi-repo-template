import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Register from './Register'

const SignIn = createStackNavigator(
	{
		Login : Login,
		Register : Register,
	},
	{
		initialRoute : 'Login'
	}
)
export default createAppContainer(SignIn);