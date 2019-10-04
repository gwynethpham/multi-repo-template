import React, {Component} from "react";
import { StatusBar } from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component {
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
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate("ProfileScreen")} >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
