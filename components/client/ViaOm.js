import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View, TouchableOpacity } from 'react-native';


class ViaOm extends React.Component {
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
      <View style={styles.container}>

          <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>


        <View style={{alignItems: 'center'}}>
        <Text style={{color: '#000', marginTop: '5%', fontSize: 30}}>
          Continuez votre paiement
        </Text>
        <Image source={require('../../image/unnamed.png')}/>
    <Button
            onPress={ () => navigate('ConfirmViaOm') }
            title="Payer"
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

  export default ViaOm;
