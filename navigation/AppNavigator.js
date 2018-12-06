import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../components/AuthLoadingScreen';
import Authenticate from './Authenticate';
//import MainTabNavigator from './MainTabNavigator';
import client from './client';
import vendeur from './vendeur';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: Authenticate,
    Client: client,
    Vendeur: vendeur,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
