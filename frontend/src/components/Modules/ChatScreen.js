import React, {Component} from "react";
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Button, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';

export default class MainScreenNavigator extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                    <Text> Chat</Text>
                    <View style={{marginTop: 22 , alignItems : 'center', alignContent: 'center'}}>
                        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{marginTop: 22, backgroundColor : 'red'}}>
                                <Text>Hello World!</Text>
                                <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </Modal>
                    </View>
                </Content>
            </Container>
        );
    }
}
