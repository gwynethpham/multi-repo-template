import { StyleSheet} from 'react-native';

const loginStyle = StyleSheet.create({
	container : {
		justifyContent: 'center',
		paddingTop : 10,
		backgroundColor : '#ffffff'
	},
	textInput : {
		backgroundColor: '#fff',
		padding : 10, 
		marginTop: 10,
		color : 'red',
		borderRadius: 4,
		borderWidth : 0.5,
		borderColor: '#d6d7da',
	},
	btnSignUp : {
	    	marginTop: 10
	    }
});
const homeScreenStyle = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent: 'center'
	},
	colorText : {
		color : 'white',
		fontWeight: 'bold'
	},
	headerHome : {
		backgroundColor: 'red',
		color: 'white',
		justifyContent: 'center',
		alignContent : 'center',
		margin: '0 auto',
//		headerLeft : {
//			color : 'white',
//			backgroundColor: 'white',
//			justifyContent: 'center',
//		},
//		headerBody: {
//			color : 'white',
//			fontWeight: 'bold',
//
//		}

	},

});
export {loginStyle, homeScreenStyle}