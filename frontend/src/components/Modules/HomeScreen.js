import React, {Component} from "react";
import {Alert, Modal, TouchableHighlight, View} from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component {
    state ={
        modalVisible : false
    }
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
                        <Button transparent onPress={()=> this.props.navigation.navigate('Home')} >
                            <Title>HomeScreen</Title>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.setState({modalVisible : true})} >
                            <Icon name="chatboxes" />
                        </Button>
                    </Right>
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

                    <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}
                           onRequestClose={() => {
                               Alert.alert('Modal has been closed.');
                           }}>
                        <View style={{marginTop: 22, backgroundColor : 'red'}}>
                            <Text>Hello World!</Text>
                            <TouchableHighlight onPress={() => this.setState({modalVisible : !this.state.modalVisible})}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                </Content>
            </Container>
        );
    }
}
