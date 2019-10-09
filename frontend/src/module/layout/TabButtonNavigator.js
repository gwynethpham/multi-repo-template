// import React from 'react';
// import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import AppNavigator from '../../index.js'
// import HomeScreenRouter from './Home.js'
//
//
// const HomeDefault= createAppContainer(HomeScreenRouter);
// const Settings = createAppContainer(AppNavigator);
// class HomeScreen extends React.Component {
//   render() {
//     return (
//         <HomeDefault />
//     );
//   }
// }
//
// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <Settings />
//     );
//   }
// }
//
// class IconWithBadge extends React.Component {
//   render() {
//     const { name, badgeCount, color, size } = this.props;
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               position: 'absolute',
//               right: -6,
//               top: -3,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }
//
// const HomeIconWithBadge = props => {
//   return <IconWithBadge {...props} badgeCount={3} />;
// };
//
// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
//   let iconName;
//   if (routeName === 'Home') {
//     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//     // We want to add badges to home tab icon
//     IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Settings') {
//     iconName = `ios-options${focused ? '' : '-outline'}`;
//   }
//
//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={25} color={tintColor} />;
// };
// const TabButtonNavigator = createBottomTabNavigator(
//     {
//       Home: { screen: HomeScreen },
//       Settings: { screen: SettingsScreen },
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   )
// // export default createAppContainer(TabButtonNavigator);
