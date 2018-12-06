import React from 'react';
import{View, Text, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import PhoneInput from 'react-native-phone-input';

class SignIn extends React.Component {
  static navigationOptions = {
    header: null
  };
  render(){
    const resizeMode = 'center';
    const {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor: '#F4BF45', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', alignSelf: 'center', marginTop: '5%'}}>
          Connexion
        </Text>
        <Image
          style={{
            marginTop: '5%',
            marginLeft: '25%',
            width: '50%',
            height: '20%',
            resizeMode,
          }}
          source={require('../image/logo1.png')}
        />
        <TouchableOpacity style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '5%', backgroundColor: '#0000CD'}}
          onPress={ () => navigate('SignIn') }>
          <Text style={{color: '#FFF', alignSelf: 'center', fontSize: 20}}>
            Facebook
          </Text>
        </TouchableOpacity>
        <Image source={require('../image/or.png')} style={{alignSelf: 'center', marginTop: '5%', marginBottom: '5%'}}/>
        <PhoneInput style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '5%', backgroundColor: '#FFF'}}
        ref='phone'
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '5%', backgroundColor: '#FFF'}}
          secureTextEntry={true}
          placeholder="Password"
          keyboardType= 'numeric'
        />
      <TouchableOpacity style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '15%', backgroundColor: '#FFF'}}
          onPress={ () => navigate('Client') }>
          <Text style={{color: '#000', alignSelf: 'center', fontSize: 20}}>
            Se connecter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigate('SignUp') } style={{marginTop: '5%'}}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>
            S'inscrire
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
