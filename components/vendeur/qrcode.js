import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import QRCode from 'react-native-qrcode';
//import {createStackNavigator,} from 'react-navigation';

class Qrcode extends React.Component {
  static navigationOptions = {
    title: 'Recevoir un paiement',
  };

  render() {
      const { navigate } = this.props.navigation;
        const prix = this.props.navigation.state.params.Prix
      let pic = {
          uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/01161130/E-Money-PNG-Transparent-Image.png'
        };
      let pic1 = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/220px-Qrcode_wikipedia_fr_v2clean.png'
        };
      return (
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: '2%'}}>
            <Text>Un payement de plus!</Text>
          </View>
            <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', resizeMode: 'center'}}/>
            <View style={{height: '40%', marginLeft: '25%'}}>
            <QRCode
              value={prix}
              size={200}
              bgColor='	#4B0082'
              fgColor='#FFF'/>
            </View>
          <View style={{marginTop: '5%'}}>
            <Text style={{alignSelf: 'center', fontSize: 25}}>N°3456</Text>
          </View>
          <View style={{alignSelf: 'center', width: '50%', marginTop: '5%'}}>
            <Button
              onPress={ () => navigate('succes') }
              title="Scan"
              color="#F4BF45"
              />
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
