import React, {Component} from 'react';
import { Header, Title, Left, Icon, Right,Body, Button, Container} from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
class HeaderScreen extends Component {
	render() {
		return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) } >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent onPress={()=> this.props.navigation.navigate('Dash Board')} >
                            <Title>Wallet Home</Title>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent  >
                            <Icon name="chatboxes" />
                        </Button>
                    </Right>
                </Header>
            </Container>
		)
	}
}

export default HeaderScreen;
