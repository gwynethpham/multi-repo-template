import React, {Component} from 'react';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from "native-base";
import HeaderScreen from "../../Modules/HeaderScreen";
export default class HomeWallet extends Component {
  
    render() {
        return (
            <Container>
            <HeaderScreen {...this.props} />
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text> Wallet Home</Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}