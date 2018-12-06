import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Preface from '../components/preface';
import FirstStep from '../components/firstStep1';
import SecondStep from '../components/SecondStep1';
import ThirdStep from '../components/ThirdStep1';
import FirstStep2 from '../components/firstStep2';
import SecondStep2 from '../components/SecondStep2';
import ThirdStep2 from '../components/ThirdStep2';
import SignIn from '../components/conne';
import SignUp from '../components/regist';
import SignIn1 from '../components/conne1';
import SignUp1 from '../components/regist1';




const HomeStack = createStackNavigator({
  Home: {
    screen: Preface,
  },
  FirstStep1: {
    screen: FirstStep
  },
  SecondStep1: {
    screen: SecondStep
  },
  ThirdStep1:{
    screen: ThirdStep
  },
  FirstStep2: {
    screen: FirstStep2
  },
  SecondStep2: {
    screen: SecondStep2
  },
  ThirdStep2:{
    screen: ThirdStep2
  },
  SignIn:{
    screen: SignIn
  },
  SignUp:{
    screen: SignUp
  },
  SignIn1:{
    screen: SignIn1
  },
  SignUp1:{
    screen: SignUp1
  },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
