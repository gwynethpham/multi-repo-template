import React, {Component, Fragment, useState} from "react";
import {Alert, TouchableHighlight, View,Image,TouchableOpacity ,TextInput} from "react-native";
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right, H1, H2, H3 } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import Modal from "react-native-modal";
import {homeScreenStyle} from '../../css/style';
const imageQc = require('../../../assets/homeScreen/QC.jpg');
const QR_code = require('../../../assets/homeScreen/QR_code.png');
const airplane = require('../../../assets/homeScreen/airplane.jpg');
const iconCloseMessage = require('../../../assets/homeScreen/home-21.png');
const iconOpenMessage = require('../../../assets/homeScreen/home-22.png');

const HomeScreen = (props) => {
    const {navigate,dispatch} = props.navigation;
    const [modalVisible, setModalVisible] = useState(false);
    const [toggleBtnMessage, setToggleBtnMessage] = useState(false);
    const [message , setMessage ] =useState('');
    const _onHandleToggleBtn = () => {
        setToggleBtnMessage(!toggleBtnMessage)
    };
    const _onHandleMessage = () => {
        console.log('message', message) ;
    }
        return (
            <Container>
                <Header style={{backgroundColor: 'red',
                    color: 'white',
                    justifyContent: 'center',
                    alignContent : 'center'}}>
                    <Left>
                        <Button transparent onPress={() => dispatch(DrawerActions.openDrawer())} >
                            <Icon name="menu"  style={{color : 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent onPress={()=> navigate('Home')} style={{'width' : 200}}>
                            <Text > <H1 style={homeScreenStyle.colorText}> Blood </H1> <H3 style={homeScreenStyle.colorText}>wallet</H3> </Text>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent onPress={() =>  setModalVisible(!modalVisible)} >
                            <Icon name="chatboxes" style={{color : 'white'}}/>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <View style={{justifyContent: 'center', alignContent: 'center', flexDirection: 'row', paddingTop : 20}}>
                        <View style={{ flexDirection: 'column',justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                            <Text style={{flexDirection: 'row', justifyContent: 'center',marginBottom: 5, color: 'red', fontWeight: 'bold'}}> Phạm Minh Tấn </Text>
                            <Image square source={QR_code} style={{width: 150, height: 150}}/>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent: 'center', alignContent: 'center', paddingTop:10}}>
                        <Text> 123245yjdfskf24324sdfhsjy2xxxxx....</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent: 'center', alignContent: 'center',paddingTop: 10}}>
                        <Text> Wellcome to the Blood Wallet </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop : 20}}>
                        <Text><H1 style={{color : 'red', fontWeight: 'bold'}}>150.000</H1> <Text >Blood</Text></Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center' ,marginTop: 10}}>
                        <View style={{ borderColor: '#ddd', width: 180, height : 70,borderWidth: 1, padding: 15, borderBottomLeftRadius : 10, borderTopLeftRadius: 10}}>
                            <Text>Total Assets</Text>
                            <Text><H1 style={{color : 'red',fontWeight: 'bold'}}>149.000</H1> <Text >Blood</Text></Text>
                        </View>
                        <View style={{ borderColor: '#ddd', width: 180, height : 70,borderWidth: 1, padding: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10}}>
                            <Text>Available</Text>
                            <Text><H1 style={{color : 'red',fontWeight: 'bold'}}>1.000</H1> <Text >Blood</Text></Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center' ,marginTop: 10}}>
                        <View style={{ flexDirection : 'row',justifyContent: 'center',alignItems: 'center',backgroundColor: 'red', borderColor: '#ddd', width: 180, height : 70,borderWidth: 1, padding: 15, margin: 10, borderRadius : 10}}>
                             <Image square source={airplane} resizeMode={'contain'} style={{width: 50, height: 50}} />
                             <Text style={{color : 'white' ,marginLeft : 5}}>내용을</Text>
                        </View>
                        <View style={{ flexDirection : 'row',justifyContent: 'center',alignItems: 'center',backgroundColor:'red', borderColor: '#ddd', width: 180, height : 70,borderWidth: 1, padding: 15, margin: 10, borderRadius : 10}}>
                            <Image square source={imageQc}
                                   resizeMode={'contain'}
                                   style={{width: 40, height: 40}} />
                            <Text style={{color : 'white',marginLeft : 5}}>내용을</Text>
                        </View>
                    </View>
                    <View style={{position : 'absolute', bottom: -100, left: 350}}>
                        {toggleBtnMessage && <View style={{borderColor: "#ddd", borderWidth:1, borderRadius : 10,
                            backgroundColor : 'white', padding: 15, position : 'relative', right:12, zIndex: 9}}>
                            <View style={{ borderColor : 'none' , backgroundColor: 'none'}}>
                                <Button onPress={()=> setModalVisible(true)}  transparent>
                                    <Image  square source={airplane}
                                           resizeMode={'contain'} style={{width: 40, height: 40, marginBottom : 10}} />
                                </Button>

                            </View>
                            <Button transparent>
                                <Image square source={imageQc}
                                       resizeMode={'contain'}
                                       style={{width: 40, height: 40 }} />
                            </Button>
                        </View>}
                        <TouchableOpacity  onPress={_onHandleToggleBtn}  style={{marginTop:10}}>
                            <Image source={!toggleBtnMessage ? iconCloseMessage : iconOpenMessage} />
                        </TouchableOpacity>
                    </View>
                    <Modal isVisible={modalVisible}>
                        <Container>
                            <Header style={{backgroundColor : 'red'}}>
                                <Left style={{width : 400, alignItems: 'center'}}>
                                    <Button transparent>
                                        <Text style={{color : 'white'}}> WellCome To Chat </Text>
                                    </Button>
                                </Left>
                                <Right>
                                    <Button transparent onPress={() =>  setModalVisible(!modalVisible)} >
                                       <Icon name={'close'} style={{color : '#fff'}}/>
                                    </Button>
                                </Right>
                            </Header>
                            <View style={{flex : 1, flexDirection: 'row', position: 'absolute', bottom : 0}}>
                            <TextInput style={{borderColor: '#ddd', borderWidth : 1, borderRadius: 5,position: 'absolute', bottom : 0}}
                                       value={message}
                                       placeholder="Type here to translate!"
                                       onChangeText={(text) => setMessage(text)}/>
                            <Button onPress={_onHandleMessage} style={{position: 'absolute', bottom : 0}}>
                                <Text>submit</Text>
                            </Button>
                        </View>
                        </Container>
                    </Modal>

                </Content>
            </Container>
        );
}
export default HomeScreen;
