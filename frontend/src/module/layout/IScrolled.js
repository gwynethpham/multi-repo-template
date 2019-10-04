import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, View, Button } from 'react-native';

 const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20,
      backgroundColor: 'red'
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });


export default class IScrolled extends Component {
   _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
      return (
        <ScrollView>
          <Text> 
            Detail screen
          </Text>
          <Text style={{fontSize:12}}>Scroll me plz</Text>
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
          
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton}
                title="This looks great!"
              />
              <Button
                backgroundColor="#841584"
                onPress={this._onPressButton}
                title="OK!"
                color="#841584"
              />
            </View>
            <Button title="Back Home " onPress={()=>this.props.navigation.navigate('Home')} />
          </View>
        </ScrollView>
    );
  }
}

