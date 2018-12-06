import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';

class Preface extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    const resizeMode = 'center';
    const text = 'I am some centered text';
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
        <Image
          style={{
            backgroundColor: '#ccc',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'flex-start',
            opacity: .5,
          }}
          source={require('../image/bg.png')}
        />
        </View>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
        <Image
          style={{
            marginTop: '10%',
            marginLeft: '25%',
            width: '50%',
            height: '25%',
            resizeMode,
          }}
          source={require('../image/logob.png')}
        />
      <View style={{flexDirection: 'row', marginTop: '15%', alignItems: 'center'}}>
          <Text
            style={{
              marginLeft: '7%',
              textAlign: 'center',
              color: '#FFF',
              fontSize: 30,
            }}
          >
          Bienvenue sur
          </Text>
          <Text
            style={{
              marginLeft: '2%',
              textAlign: 'center',
              color: '#FFF',
              fontSize: 30,
              fontWeight: '900',
            }}
          >
          Change
          </Text>
        </View>
        <View style={{flexDirection: 'column', marginTop: '10%', alignItems: 'center'}}>
            <Text
              style={{
                marginLeft: '7%',
                textAlign: 'center',
                color: '#FFF',
                fontSize: 30,
              }}
            >
            Payer en toute
            </Text>
            <Text
              style={{
                marginLeft: '2%',
                textAlign: 'center',
                color: '#FFF',
                fontSize: 30,

              }}
            >
            simplicité et rapidement
            </Text>
          </View>
          <View style={{flexDirection: 'column', marginTop: '30%', alignItems: 'center'}}>
              <Button
                onPress={ () => navigate('FirstStep1') }
                title="Je suis client"
                color="#000"
              >
              <Text style={{color: '#000'}}></Text>
              </Button>
            <TouchableOpacity onPress={ () => navigate('FirstStep2')}>
              <Text
                style={{
                  marginTop: '5%',
                  textAlign: 'center',
                  color: '#FFF',
                  fontSize: 15,
                  fontWeight:'500',
                }}
              >
              Je suis vendeur
              </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default Preface;
