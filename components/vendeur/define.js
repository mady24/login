import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, TextInput, Alert, Button, View, TouchableOpacity } from 'react-native';


class Home extends React.Component {
  _onPressButton(){
  Alert.alert('You tapped the button!')
  }
  static navigationOptions = {
    title: 'Recevoir un paiement',
  };
  constructor(props){
    super(props)
    this.state = {
      TextInput_Value:'',
    }
  }
  render(){
    let pic = {
        uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/01161130/E-Money-PNG-Transparent-Image.png'
      };
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text>Un payement de plus!</Text>
        </View>

          <Image source={require('../../image/logo1.png')} style={{ alignSelf: 'center', marginTop: '2%'}}/>


        <View style={styles.alternativeLayoutButtonContainer}>
        <TextInput
        style={{height: 40, width: 250, borderWidth: 1, borderColor: '#000'}}
        onChangeText={data => this.setState({TextInput_Value: data})}
        placeholder="Entrer la somme a payer!"
        keyboardType= 'numeric'
      />
    <TouchableOpacity
            onPress={this._onPressButton}
            >
            <Image source={require('../../image/ic_mic_24px.png')}/>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('qrcode', {Prix: this.state.TextInput_Value}) }
            >
            <Image source={require('../../image/generate.png')} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: '1%', alignItems: 'center'}}>
          <Text >Générer un QR Code</Text>
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

  export default Home;
