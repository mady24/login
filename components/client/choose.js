import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View, TouchableOpacity, ScrollView } from 'react-native';


class Choose extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
    headerTitle: (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
      <Text style={{fontSize: 25}}>Faire un paiement</Text>
      <Image source={require('../../image/logo2.png')} style={{height: 50, marginLeft: 160}}/>
    </View>
    ),
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{backgroundColor: '#FFF', flex: 3}}>
      <Text style={{color: '#000', fontSize: 10}}>
        Nous avons toujours le choix!
      </Text>
          <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>


        <View style={{alignItems: 'center'}}>
        <Text style={{color: '#000', fontSize: 30}}>
          Choisissez votre Wallet
        </Text>
        <ScrollView>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('ViaOm') }>
            <Image source={require('../../image/unnamed.png')} style={{width: '70%', height: '70%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('') }>
            <Image source={require('../../image/Logo_tigo-Cash.png')} style={{width: '70%', height: '70%'}}/>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Links') }>
            <Image source={require('../../image/jonijoni.png')} style={{width: '70%', height: '70%'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Links') }>
            <Image source={require('../../image/logo-wari2.png')} style={{width: '70%', height: '70%'}}/>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Links') }>
            <Image source={require('../../image/e-money.png')} style={{width: '70%', height: '70%'}}/>
          </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        </View>

      </View>
    );
  }
  }



  const styles = StyleSheet.create({
    container: {
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

  export default Choose;
