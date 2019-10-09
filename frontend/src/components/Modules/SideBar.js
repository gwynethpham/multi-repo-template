import React, {Component}from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {Button,Text,Container,List,ListItem,Content,Icon} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image source={require('../../../assets/images/profile.jpg')}
                           style={{
                               height: 120,
                               width: "100%",
                               alignSelf: "stretch",
                               position: "absolute"
                           }}
                    />
                    <List dataArray={routes} contentContainerStyle={{ marginTop: 120 }} renderRow={data => {
                        return (
                            <ListItem  button  onPress={() => this.props.navigation.navigate(data)}  >
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}
                    />
                    <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())} >
                        <Icon name="close" />
                    </Button>
                </Content>
            </Container>
        );
    }
}
