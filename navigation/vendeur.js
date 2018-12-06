import React from 'react';
import { Platform, Image, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Home from '../components/vendeur/define';
import Qrcode from '../components/vendeur/qrcode';
import Success from '../components/vendeur/success';
import Wallet from '../components/vendeur/wallet';
import Om from '../components/vendeur/walletom';
import Wari from '../components/vendeur/walletwari';
import Joni from '../components/vendeur/walletjoni';
import Tigo from '../components/vendeur/wallettigo';
import Emoney from '../components/vendeur/wallete';
import Historique from '../components/vendeur/historique';


const HomeStack = createStackNavigator({
  //Home: HomeScreen,
  wallet: {screen: Wallet},
  walletom: {screen: Om},
  walletwari: {screen: Wari},
  walletjoni: {screen: Joni},
  wallettigo: {screen: Tigo},
  wallete: {screen: Emoney},
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Wallet',
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <Image source={require('../image/wallet-focus.png')} style={{height: '100%', width: '30%', resizeMode: 'center'}}/> : <Image source={require('../image/wallet.png')} style={{height: '100%', width: '30%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};

const LinksStack = createStackNavigator({
  //Links: LinksScreen,
  define: {screen: Home},
  qrcode: {screen: Qrcode},
  succes: {screen: Success},
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Paiement',
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <View style={{height: 100, width: 100, borderRadius: 120, backgroundColor: '#fff', paddingTop: 5, paddingLeft: 25, borderWidth: 1, borderColor: '#000'}}><Image source={require('../image/paiement-focus.png')} style={{height: 50, width: 50, resizeMode: 'center'}}/></View> : <View style={{height: 100, width: 100, borderRadius: 120, backgroundColor: '#fff', paddingTop: 5, paddingLeft: 25, borderWidth: 1, borderColor: '#000'}}><Image source={require('../image/paiement.png')} style={{height: 50, width: 50, resizeMode: 'center'}} /></View>
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};




const SettingsStack = createStackNavigator({
  Settings:{screen: Historique},
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Historique',
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <Image source={require('../image/history-focus.png')} style={{height: '100%', width: '30%', resizeMode: 'center'}}/> : <Image source={require('../image/history.png')} style={{height: '100%', width: '30%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
