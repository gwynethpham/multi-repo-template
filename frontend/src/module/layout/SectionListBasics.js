import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { SectionList, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
// import FadeInView from './FadeInView.js'

class SectionListABC extends Component {
  constructor(props) {
    super(props)
    this.state = { myButtonOpacity : 1}
  }
   static navigationOptions = {
    title: 'Section',
  };
  _onPress = () => {
    alert('12312312312')
  }
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}
        onPressOut={() => this.setState({myButtonOpacity: 1})}>
        <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
        <Text>Press me!</Text>
        </View>
        </TouchableOpacity>
        <SectionList
          sections={dataSection}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button title="Go to FadIN"
        onPrees={()=>this.props.navigation.navigate('FadeInView')}
        />
        <View
            accessible={true}
            accessibilityActions={[
              {name: 'cut', label: 'cut'},
              {name: 'copy', label: 'copy'},
              {name: 'paste', label: 'paste'},
            ]}
            onAccessibilityAction={(event) => {
              switch (event.nativeEvent.actionName) {
                case 'cut':
                  Alert.alert('Alert', 'cut action success');
                  break;
                case 'copy':
                  Alert.alert('Alert', 'copy action success');
                  break;
                case 'paste':
                  Alert.alert('Alert', 'paste action success');
                  break;
              }
            }}
          />
      </View>
    );
  }
}

const MainNavigation = createStackNavigator({
  SectionListABC : {screen : SectionListABC},
  // FadeInView : {screen : FadeInView}
})

const SectionListBasics = createAppContainer(MainNavigation);

export default SectionListBasics;

const dataSection = [
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]; 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
