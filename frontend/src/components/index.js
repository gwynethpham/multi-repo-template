import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import TabButtonNavigator from './TabButtonNavigator/TabButtonNavigator';
import Login from './SignIn/Login';
import Register from './SignIn/Register'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
  	setTimeout(()=>{
  		this.props.navigation.navigate('HomeLayout');
  	}, 1500)
  }

  // Fetch the token from storage then navigate to our appropriate place
  // _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('userToken');

  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  // };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const AuthStack = createStackNavigator(
	{ 
		Login: Login,
		Register : Register, 
	},
	{
		initialRouteName : 'Login',
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
);
const SwitchNavigator =  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      HomeLayout: TabButtonNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'HomeLayout',
    }
  )
export default createAppContainer(SwitchNavigator)