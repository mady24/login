import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.\
    this.timeoutHandle = setTimeout(()=>{
    this.props.navigation.navigate(userToken ? 'Client' : 'Auth')
  }, 5000);
  };

  // Render any loading content that you like here
  render() {
      const resizeMode = 'center';

      return (
        <Image
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            resizeMode,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-start',
          }}
          source={require('../image/logob.png')}
        />
      );
  }
}

export default AuthLoadingScreen;
