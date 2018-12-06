import React from 'react';
import {View, Image, Text, Button} from 'react-native';

class FirstStep2 extends React.Component {
  static navigationOptions = {
    headerTitle: (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>

      <Image source={require('../image/logo2.png')} style={{height: 50, marginLeft: 220, resizeMode: 'center'}}/>
    </View>
    ),
  };
  render(){
    const resizeMode = 'center';
    const text = 'I am some centered text';
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
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
          source={require('../image/firststep.png')}
        />
      <View style={{flexDirection: 'row', marginTop: '5%', alignItems: 'center'}}>
          <Text
            style={{
              marginLeft: '45%',
              textAlign: 'center',
              color: '#000',
              fontSize: 15,
            }}
          >
        Wallet
          </Text>
        </View>
        <View style={{flexDirection: 'column', marginTop: '10%', alignItems: 'center'}}>
            <Text
              style={{
                marginLeft: '7%',
                textAlign: 'center',
                color: '#000',
                fontSize: 20,
              }}
            >
            Acceptez tous types de
            </Text>
            <Text
              style={{
                marginLeft: '2%',
                textAlign: 'center',
                color: '#000',
                fontSize: 20,

              }}
            >
            paiements électroniques.
            </Text>
          </View>
          <View style={{flexDirection: 'column', marginTop: '30%', alignItems: 'center'}}>
              <Button
                onPress={ () => navigate('SecondStep2') }
                title="Continuer"
                color="#F4BF45"
              >
              <Text style={{color: '#000'}}></Text>
              </Button>
            </View>
        </View>
      </View>
    );
  }
}

export default FirstStep2;
