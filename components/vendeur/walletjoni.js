import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

class Joni extends React.Component {
  static navigationOptions = {
    title: 'Joni Joni',
  };
  _onPressButton(){
  Alert.alert('You tapped the button!')

}
  render() {
      const { navigate } = this.props.navigation;
        let pic1 = {
            uri: 'https://cdn6.aptoide.com/imgs/5/2/6/5268ec541aed55d2b8d733be35ff5862_icon.png?w=240'
          };
      return (
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image source={pic1} style={{width: 210, height: 210}}/>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text>solde est de:</Text>
            <Text>25.684 fcfa</Text>
          </View>
        </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 2,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 100,
    backgroundColor: 'steelblue',
  },
  container2: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 200,
    backgroundColor: 'skyblue',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  buttonContainer: {
    margin: 20,
    marginTop: 30,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    marginTop: 50,
  }
});

export default Joni;
