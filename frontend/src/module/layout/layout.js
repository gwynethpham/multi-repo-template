import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';

DefaultLayout.navigationOptions = ({ navigation, navigationOptions }) =>{
	const {params} = navigation.state;
	return{
		headerTitle : <LogoTitle />,
		headerRight : (
			<Button onPress={navigation.getParam('increaseCount')}
			title = "+1"
			color = "red" />
		),
		headerStyle: {
  			backgroundColor: navigationOptions.headerTintColor,
		},
  		headerTintColor: navigationOptions.headerStyle.backgroundColor,
	}
};

function DefaultLayout(props) {
	const [toggle,setToggle] = useState('');
	const [count, setCount] =useState(0);
	useEffect(()=>{
		props.navigation.setParams({increaseCount : _increaseCount});
	},[count])
	const _increaseCount = () => {
		setCount(count + 1);
	}
	 const styles = StyleSheet.create({
    	container: {
	     flex: 1
	    },
	    buttonContainer: {
	      margin: 10,
	      backgroundColor: 'red'
	    },
	    alternativeLayoutButtonContainer: {
	      margin: 20,
	      flexDirection: 'row',
	      justifyContent: 'space-between'
	    }
	  });

	const cards = [
	  {
	    text: 'Card One',
	    name: 'One',
	    image: require('../../../assets/images/bg.png'),
	  },
	  {
	    text: 'Card One',
	    name: 'two',
	    image: require('../../../assets/images/bg.png'),
	  },
	  {
	    text: 'Card One',
	    name: 'One',
	    image: require('../../../assets/images/bg.png'),
	  },
	  {
	    text: 'Card One',
	    name: 'One',
	    image: require('../../../assets/images/bg.png'),
	  },
	  {
	    text: 'Card One',
	    name: 'One',
	    image: require('../../../assets/images/bg.png'),
	  },
	  {
	    text: 'Card One',
	    name: 'One',
	    image: require('../../../assets/images/bg.png'),
	  },
	];
	return (
        <Container>
	        <View style={styles.container}>
	          <DeckSwiper
	            dataSource={cards}
	            renderItem={item =>
	              <Card style={{ elevation: 3 }}>
	                <CardItem>
	                  <Left>
	                    <Thumbnail source={item.image} />
	                    <Body>
	                      <Text>{item.text}</Text>
	                      <Text note>NativeBase</Text>
	                    </Body>
	                  </Left>
	                </CardItem>
	                <CardItem cardBody>
	                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
	                </CardItem>
	                <CardItem>
	                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
	                  <Text>{item.name}</Text>
	                </CardItem>
	              </Card>
	            }
	          />
	        </View>
	         <View style={styles.buttonContainer} >
	         <Button title='inscrolled' 
		        onPress={()=> props.navigation.navigate('IScrolled')}
		        /> 
	        </View>
	      </Container>
	       
		)

}
export default DefaultLayout;
//add Image into title navigation
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

