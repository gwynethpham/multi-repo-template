import React, {useEffect, useState} from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

function AuthLoadingScreen(props) {
	useEffect(()=>{
		this._fetchTokenAsync();
	}, []);

	 // Fetch the token from storage then navigate to our appropriate place
	_fetchTokenAsync = async () => {
		//Get user from redux store
	  	const {user} = props;
	    const userToken = await AsyncStorage.getItem(user.token);

	    // This will switch to the App screen or Auth screen and this loading
	    // screen will be unmounted and thrown away.
	    props.navigation.navigate(userToken ? 'HomeLayout' : 'Auth');
	};
	return (
      <View>
        <ActivityIndicator size="large" color="#0000ff"/>
        <StatusBar barStyle="default" />
      </View>
    );
}