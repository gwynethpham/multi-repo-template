import React, {Component, Fragment} from 'react';
import {Button, View, StyleSheet,Image} from 'react-native'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SectionListBasics from './src/module/layout/SectionListBasics.js'
import IScrolledDownAndWhatHappenedNextShockedMe from './src/module/layout/IScrolledDownAndWhatHappenedNextShockedMe.js'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'hihi',
  };
  render() {
    return (
      <Fragment> 
        <Button title="Go to SectionListBasics"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button title ="Go to isScrolled" style={styles.button}
        onPress={()=> this.props.navigation.navigate('Iscroll')}
        />
     <Image
        source={require('./assets/images/bg.png')}
        style={{width: 400, height: 400}}
      />
      </Fragment>
    );
  }
}
const logo =require('./assets/images/argonlogo.png')
const styles = StyleSheet.create({
  container: {
    flexDirection : 'row-reverse'
  },
  button : {
    color: '#fff',
    backgroundColor: 'red',
    marginTop: 'auto'
  }
})
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: SectionListBasics},
  Iscroll : {screen : IScrolledDownAndWhatHappenedNextShockedMe}
});

const App = createAppContainer(MainNavigator);

export default App;
