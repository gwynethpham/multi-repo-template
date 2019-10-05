import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux'
import  {screenActions} from '../../store/actions/screenActions.js'
import  {userActions} from '../../store/actions/userActions.js';
import { Button } from "native-base";

function Register(props) {
	const [firstName, setFirstName] =useState('');
	const [lastName, setLastName] =useState('');
	const [email, setEmail] =useState('');
	const [password, setPassword] =useState('');
	const [valid ,setValid] = useState(false);
	  
	  // const [toggle, setToggle] = useState(false);
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
	const _handleRegister = () => {

	  	 const data = { firstName, lastName, email, password};
	  	 if( firstName && lastName && email && password){
	  	 	props.onHandleRegister(data);
		  	setFirstName(''); setLastName(''); setEmail(''); setPassword(''); setValid(false);
		  	props.navigation.navigate('Login');
	  	 }
	  	 else {
	  	 	setValid(true);
	  	 }
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
 
    return (
      <View style={styles.container}>

        <TextInput style={styles.textInput} placeholder="Enter first name" maxLength={20} value={firstName} onChangeText={(e)=> setFirstName(e)} />
        {/*{firstName && valid &&  <Text style ={{color : 'red'}}> Please! Enter your first name</Text>}*/}

        <TextInput style={styles.textInput} placeholder="Enter last name" maxLength={20} value={lastName} onChangeText={(e)=> setLastName(e)} />
        {/*{firstName && valid &&  <Text style ={{color : 'red'}}> Please! Enter your last name</Text>}*/}

	    <TextInput style={styles.textInput} placeholder="Email" onChangeText={validate} value={email} />
	    {/*{firstName && valid &&  <Text style ={{color : 'red'}}> Please! Enter your Email</Text>}*/}

	    <TextInput secureTextEntry={true}  style={styles.textInput}  placeholder="Enter your password than 8 word" maxLength={20} value={password} onChangeText={(e)=> setPassword(e)} />
	    {/*{password && password.length > 8 && valid &&  <Text style ={{color : 'red'}}>Enter your password than 8 word</Text>}*/}

	    <Button full rounded primary style={{ marginTop: 10 }} onPress={_handleRegister} >
             <Text style={{color : 'white', fontWeight: 'bold'}}>Register</Text>
        </Button>
	
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
    // addPopup: (screen) => dispatch(screenActions.addPopup(screen)),
    onHandleRegister : (data) => dispatch(userActions.register(data))
});
export default connect(null,mapDispatchToProps)(Register);



