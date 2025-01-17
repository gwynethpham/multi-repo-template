import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux'
import  {screenActions} from '../../store/actions/screenActions.js'
import  {userActions} from '../../store/actions/userActions.js';
import { Button } from "native-base";

Login.navigationOptions = {
	title: 'Please sign in'
}

function Login(props) {
	  const [username, setUserName] =useState('');
	  const [password, setPassword] =useState('');
	  const [email, setEmail] =useState('');

	  // const [toggle, setToggle] = useState(false);
	  const styles = StyleSheet.create({
	    container: {
	      justifyContent: 'center',
	      marginTop: 50,
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
	  const _onHandleSubmit = () => {
	  	 const data = { username, password};
	  	 props.onHandleRegister(data);
	  	 // props.addPopup({name : 'showPopup'});
	  	 
	  	 setUserName('');
	  	 setEmail('');
	  	 setPassword('');
	  }
	  const validate = (text) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(reg.test(text) === false)
		{
			setEmail(text)
			return false;
		}
		else {
		  setEmail(text);
		}
	  }
	const _signInAsync = async () => {
	    // await AsyncStorage.setItem('userToken', 'abc');
	    if(username && password) props.navigation.navigate('HomeLayout');
	    else alert('Please! Your enter userName or password')
	 };
 
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Your name" maxLength={20} value={username} onChangeText={(e)=> setUserName(e)} />
	     {/*<TextInput style={styles.textInput} placeholder="Email ID" onChangeText={validate} value={email} />*/}
	    <TextInput secureTextEntry={true}  style={styles.textInput}  placeholder="password" maxLength={20} value={password} onChangeText={(e)=> setPassword(e)} />
	    <Button full rounded primary style={{ marginTop: 10 }} onPress={_signInAsync}>
            <Text style={{color : 'white', fontWeight: 'bold'}}>Sign in</Text>
        </Button>
	    {props.screens['showPopup'] && <Text style={{color:'red'}}> Pham Minh Tan</Text>}
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
    onHandleRegister : (data) => dispatch(userActions.register(data))
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);



