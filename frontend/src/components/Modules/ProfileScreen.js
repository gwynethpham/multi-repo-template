import React, {Component} from "react";
// import { StatusBar, View, Text } from "react-native";
import { Button, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class ProfileScreen extends Component {
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
                        <Title>My Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>


                </Content>
            </Container>
        );
    }
}
