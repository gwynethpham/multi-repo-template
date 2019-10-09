import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text,Image } from 'react-native';
import { connect } from 'react-redux'
import  {screenActions} from '../../store/actions/screenActions.js'
import  {userActions} from '../../store/actions/userActions.js';
import { Button } from "native-base";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../assets/images/alert-firework.png')}
        style={{ width: 40, height: 40, position: 'absolute', left : -50}}
      />
    );
  }
}

Login.navigationOptions =({ navigation, navigationOptions }) => {
	// const {params} = navigation.state;
	return{
		headerTitle : <LogoTitle />,
		// headerRight : (
		// 	<Button onPress={navigation.getParam('increaseCount')}
		// 	title = "+1"
		// 	color = "red" />
		// ),
		headerStyle: {
  			backgroundColor: navigationOptions.headerTintColor,
		},
  		headerTintColor: navigationOptions.headerStyle.backgroundColor,
	}
}

function Login(props) {
	  // const [username, setUserName] =useState('');
	  const [password, setPassword] =useState('');
	  const [email, setEmail] =useState('');

	  const styles = StyleSheet.create({
	    container: {
	      justifyContent: 'center',
	      // marginTop: 50,
	      padding: 20,
	      backgroundColor: '#ffffff',
	    },
	    textInput : {
	      backgroundColor : '#fff',
	      padding: 10,
	      marginTop: 10,
	      color: 'red',
	      borderRadius: 4,
	      borderWidth: 0.5,
	      borderColor: '#d6d7da',
	    },
	    btnSignUp : {
	    	marginTop: 10
	    }
	  });

	const _signInAsync = async () => {
	    // await AsyncStorage.setItem('userToken', 'abc');
	    if(email && password) {
	    	const data = { email, password};
	  	 	props.onHandleCheckLogin(data);
	  	 	setEmail('');
	  	 	setPassword('');
	    	props.navigation.navigate('HomeLayout');
	    }
	    else alert('Please! Your enter userName or password')
	 };
 
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Email" maxLength={20} value={email} onChangeText={(e)=> setEmail(e)} />
	    <TextInput secureTextEntry={true}  style={styles.textInput}  placeholder="password" maxLength={20} value={password} onChangeText={(e)=> setPassword(e)} />
	    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
	    	 <Button full rounded primary style={{ marginTop: 10, width: 100 }} onPress={_signInAsync}>
	            <Text style={{color : 'white', fontWeight: 'bold'}}>Sign in</Text>
	        </Button>
	         <Button full rounded primary style={{ marginTop: 10, width: 100 }} onPress={()=>props.navigation.navigate('Register')}>
	            <Text style={{color : 'white', fontWeight: 'bold'}}>Register</Text>
	        </Button>
	    </View>
	   
      </View>
    );
}
const mapStateToProps = (state) => {
   const {screens} = state;
   return {
   	screens
   }
};
const mapDispatchToProps = (dispatch) => ({
    addPopup: (screen) => dispatch(screenActions.addPopup(screen)),
    onHandleCheckLogin : (data) => dispatch(userActions.login(data))
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);



