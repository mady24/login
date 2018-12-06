import React from 'react';
import { Platform, Image, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Accueil from '../components/client/accueil';
import Scan from '../components/client/scan';
import Resume from '../components/client/resume';
import Choose from '../components/client/choose';
import ViaOm from '../components/client/ViaOm';
import ConfirmViaOm from '../components/client/ConfirmeViaOm';
import Success from '../components/client/success';
import History from '../components/client/history';
import Qrcode from '../components/client/qrcode';

const HomeStack = createStackNavigator({
  Home:{
    screen: Accueil,
  },
  /*wallet: {screen: Wallet},
  walletom: {screen: Om},
  walletwari: {screen: Wari},
  walletjoni: {screen: Joni},
  wallettigo: {screen: Tigo},
  wallete: {screen: Emoney},*/
});

HomeStack.navigationOptions = {
  tabBarLabel: '',
  tabBarVisible: false,
  tabBarIcon: ({ tintColor }) => (
     <Image source={require('../image/acceuil.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {
    activeTintColor: '#FEDE4F',
    showLabel: false,
  }
};

const PaiementStack = createStackNavigator({
  Paiement: {screen: Resume},
  Choose: {screen: Choose},
  ViaOm: {screen: ViaOm},
  ConfirmViaOm: {screen: ConfirmViaOm},
  Success: {screen: Success},
  /*wallettigo: {screen: Tigo},
  wallete: {screen: Emoney},*/
});

PaiementStack.navigationOptions = {
  tabBarLabel: false,
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <Image source={require('../image/paiement-focus.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}}/> : <Image source={require('../image/paiement.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};

const ScanStack = createStackNavigator({
  Links: {screen: Scan},
  /*define: {screen: Home},
  qrcode: {screen: Qrcode},
  succes: {screen: Success},*/
});

ScanStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <View style={{height: 100, width: 100, borderRadius: 120, backgroundColor: '#fff', paddingTop: 10, paddingLeft: 20, borderWidth: 1, borderColor: '#000'}}><Image source={require('../image/ic_camera_alt_24px.png')} style={{height: 50, width: 60, resizeMode: 'center'}}/></View> : <View style={{height: 100, width: 100, borderRadius: 120, backgroundColor: '#fff', paddingTop: 10, paddingLeft: 20, borderWidth: 1, borderColor: '#000'}}><Image source={require('../image/ic_camera_alt_24px!.png')} style={{height: 50, width: 60, resizeMode: 'center'}} /></View>
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};




const QrStack = createStackNavigator({
  Qrcode: {screen: Qrcode},
});

QrStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <Image source={require('../image/qr-focus.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}}/> : <Image source={require('../image/qr.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};

const SettingsStack = createStackNavigator({
  History: {screen: History},
});

SettingsStack.navigationOptions = {
  tabBarLabel: null,
  tabBarIcon: ({ focused, tintColor }) => (
    focused ? <Image source={require('../image/history-focus.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}}/> : <Image source={require('../image/history.png')} style={{height: '100%', width: '50%', resizeMode: 'center'}} />
  ),
  tabBarOptions: {activeTintColor: '#FEDE4F'}
};

export default createBottomTabNavigator({
  HomeStack,
  PaiementStack,
  ScanStack,
  QrStack,
  SettingsStack,
});
