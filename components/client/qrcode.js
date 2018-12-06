import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

class Qrcode extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
    headerTitle: (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
      <Text style={{fontSize: 25}}>Qr Code</Text>
      <Image source={require('../../image/logo2.png')} style={{height: 50, marginLeft: 250}}/>
    </View>
    ),
  };
  render() {
      const { navigate } = this.props.navigation;
      let pic = {
          uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/01161130/E-Money-PNG-Transparent-Image.png'
        };
      let pic1 = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/220px-Qrcode_wikipedia_fr_v2clean.png'
        };
      return (
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text>Bonjour XXXXXX</Text>
          </View>
            <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>
            <View style={{height: '30%'}}>
            <Image source={require('../../image/qrcode.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>
            </View>
          <View>
            <Text style={{alignSelf: 'center', fontSize: 25}}>N°3456</Text>
          </View>
          <View style={{alignSelf: 'center', width: '50%', marginTop: '5%'}}>
            <Text style={{fontSize: 20}}>
            Dernier QR Code
            </Text>
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

export default Qrcode;
