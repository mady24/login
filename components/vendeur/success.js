import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

class Success extends React.Component {
  static navigationOptions = {
    title: 'Recevoir un paiement',
  };
  _onPressButton(){
  Alert.alert('You tapped the button!')

}
  render() {
      const { navigate } = this.props.navigation;
      let pic = {
          uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/01161130/E-Money-PNG-Transparent-Image.png'
        };
      let pic1 = {
          uri: 'https://png.pngtree.com/svg/20170401/nine_rich_wallet_success_icon_112949.png'
        };
      return (
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text>Félicitation et à Bientôt!</Text>
          </View>
          <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image source={pic1} style={{width: 100, height: 100}}/>
          </View>
          <View style={{alignItems: 'center', fontSize: 25}}>
            <Text>Le paiement a été</Text>
            <Text>effectué avec succès!</Text>
          </View>
          <View style={{marginTop: '5%', alignItems: 'center', width: '50%', marginLeft: '25%'}}>
          <Button
            onPress={() => navigate('define') }
            title="Accueil"
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

export default Success;
