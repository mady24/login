import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

class Wari extends React.Component {
  static navigationOptions = {
    title: 'Wari',
  };
  _onPressButton(){
  Alert.alert('You tapped the button!')

}
  render() {
      const { navigate } = this.props.navigation;
        let pic1 = {
            uri: 'data:image/png;base64,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'
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

export default Wari;
