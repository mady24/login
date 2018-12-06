import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';


class Accueil extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Accueil',
    headerTitle: (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
      <Text style={{fontSize: 25}}>Accueil</Text>
      <Image source={require('../../image/logo2.png')} style={{height: 50, marginLeft: 160}}/>
    </View>
    ),
  };
  render(){
      const { navigate } = this.props.navigation;
    return(
      <View style={{flexDirection: 'column', justifyContent:'center', backgroundColor: '#FFF', height: '100%'}}>
        <Text style={{fontSize: 10, alignSelf: 'center'}}>Bonjour XXXXX</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 20, marginLeft: '25%'}}>Bienvenue sur</Text><Text style={{fontSize: 20, fontWeight: '800'}}> Change</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '40%'}}>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Links') }>
            <Image source={require('../../image/rsz_ic_camera_alt_24px.png')} style={{width: '70%', height: '60%', resizeMode: 'center'}}/>
            <Text style={{fontSize: 15}}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Paiement') }>
            <Image source={require('../../image/rsz_paiement-focus.png')} style={{width: '70%', height: '60%', resizeMode: 'center'}}/>
            <Text style={{ fontSize: 15}}>Paiement</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: '40%'}}>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('Qrcode') }>
            <Image source={require('../../image/rsz_qr-focus.png')} style={{width: '70%', height: '60%', resizeMode: 'center'}}/>
            <Text style={{fontSize: 15}}>Qr Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', alignItems: 'center', marginTop: '20%'}} onPress={ () => navigate('History') }>
            <Image source={require('../../image/rsz_history-focus.png')} style={{width: '70%', height: '60%', resizeMode: 'center'}}/>
            <Text style={{fontSize: 15}}>Historique</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Accueil;
