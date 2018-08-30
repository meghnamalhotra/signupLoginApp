/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Signin} from './signIn'
import{Signup} from './signUp'
import{User} from './main'
import{Prof} from './profile'
import{Settings} from './settings'
import {
  createStackNavigator,createBottomTabNavigator
} from 'react-navigation';

class tabContainer extends Component{
  render()
  {
    return(
<TabNavigation/>
    );
  }
}
const App = createStackNavigator({
  Home: { screen: Signin },
  Profile: { screen: Signup },
  Tab: {screen:tabContainer}
  // Profile2:{screen:Prof},
  // User1:{screen:User}
},{
  initialRouteParams:{
    email:'meghnamalhotra5@gmail.com',
    password:'meghu1234'
  }
});
 const TabNavigation=createBottomTabNavigator({
  User:{screen:User},
  Prof:{screen:Prof},
  Settings:{screen:Settings}
 })

 export default App;

