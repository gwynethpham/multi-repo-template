import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AppNavigator from './AppNavigator'
import HomeScreenRouter from './HomeScreenRouter'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Wallet from '../Screen/WalletScreen'


const HomeDefault= createAppContainer(HomeScreenRouter);
const Settings = createAppContainer(AppNavigator);
class AlarmScreen extends React.Component {
    render() {
        return (
            <HomeDefault />
        );
    }
}

class WalletScreen extends React.Component {
    render() {
        return (
            <Wallet />
        );
    }
}
class TransactionsScreen extends React.Component {
    render() {
        return (
            <Settings />
        );
    }
}
class SecurityScreen extends React.Component {
    render() {
        return (
            <Settings />
        );
    }
}
class MiningScreen extends React.Component {
    render() {
        return (
            <Settings />
        );
    }
}

const TabButtonNavigator = createBottomTabNavigator(
    {
        "Dash Board": AlarmScreen,
        "Wallet": WalletScreen,
        "Transaction": TransactionsScreen,
        'Security': SecurityScreen,
        "Mining": MiningScreen,
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Dash Board":
                        iconName = <IconFontAwesome name='home' size={25} color={tintColor} />;
                        break;
                    case "Wallet":
                        iconName = <IconSimpleLineIcons name='wallet' size={25} color={tintColor} />;
                        break;
                    case "Transaction":
                        iconName = <IconFontAwesome name='exchange' size={25} color={tintColor} />;
                        break;
                    case "Security":
                        iconName = <IconMaterialIcons name='security' size={25} color={tintColor} />;
                        break;
                    case "Mining":
                        iconName = <IconMaterialCommunityIcons name='coin' size={25} color={tintColor} />;
                        break;
                }
                return iconName;
            },
            tabBarVisible: true,
        }),
        tabBarOptions: {
            activeTintColor: '#AC0000',
            inactiveTintColor: 'gray',
        },
    }
);
export default createAppContainer(TabButtonNavigator);
