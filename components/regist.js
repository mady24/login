import React from 'react';
import{View, Text, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import PhoneInput from 'react-native-phone-input';

class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  };
  render(){
    const resizeMode = 'center';
    const {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor: '#FFF', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', alignSelf: 'center', marginTop: '5%'}}>
          Inscription Client
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
        <TouchableOpacity style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '8%', marginTop: '5%', backgroundColor: '#0000CD'}}
          onPress={ () => navigate('SignIn') }>
          <Text style={{color: '#FFF', alignSelf: 'center', fontSize: 20}}>
            Facebook
          </Text>
        </TouchableOpacity>
        <Image source={require('../image/or.png')} style={{alignSelf: 'center', marginTop: '5%', marginBottom: '5%'}}/>
        <TextInput
          style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '2%', backgroundColor: '#FFF'}}
          placeholder="Nom d'utilisateur"
        />
        <PhoneInput style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '2%', backgroundColor: '#FFF'}}
        ref='phone'
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '2%', backgroundColor: '#FFF'}}
          secureTextEntry={true}
          placeholder="Password"
          keyboardType= 'numeric'
        />
        <TextInput
          style={{borderWidth: 1, borderColor: '#000', height: '6%', width: '80%', marginLeft: '10%', marginTop: '2%', backgroundColor: '#FFF'}}
          placeholder="Profession"
        />
      <TouchableOpacity style={{borderWidth: 1, borderColor: '#F4BF45', height: '6%', width: '80%', marginLeft: '10%', marginTop: '6%', backgroundColor: '#F4BF45'}}
          onPress={ () => navigate('SignUp') }>
          <Text style={{color: '#FFF', alignSelf: 'center', fontSize: 20}}>
            S'inscrire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigate('SignIn') } style={{marginTop: '5%'}}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;
