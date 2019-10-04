import React, {Component} from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class MainScreenNavigator extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Messenger</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
                 <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}} />
                <Text>Chat App to talk some awesome people!</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}} />
                <Text>Chat App to talk some awesome people!</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png"}} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
