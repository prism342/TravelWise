import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();

const WelcomeScreen = ({navigation}) => {
  const {
    wrapper,
    textStyle,
    logoStyle: iconStyle,
    buttonStyle,
    subTextStyle,
    flexBox,
  } = styles;

  return (
    <SafeAreaView flex={1}>
      <View style={wrapper}>
        <View style={flexBox}>
          <Image style={iconStyle} source={require('../images/logo.png')} />
        </View>

        <View style={flexBox}>
          <View style={styles.textStyle}>
            <Text style={textStyle}>Hello Traveler!</Text>
          </View>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <LinearGradient
              colors={['#43D4FF', '#38ABFD', '#2974FA']}
              style={buttonStyle}>
              <Text style={{color: '#ffffff', textTransform: 'uppercase'}}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={subTextStyle}>OR</Text>

          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <LinearGradient
              colors={['#43D4FF', '#38ABFD', '#2974FA']}
              style={buttonStyle}>
              <Text style={{color: '#ffffff', textTransform: 'uppercase'}}>
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },

  flexBox: {
    flex: 1,
  },

  textStyle: {
    fontSize: 22,
    color: '#004aad',
    textAlign: 'left',
    paddingLeft: 10,
    marginTop: 10,
  },

  subTextStyle: {
    fontSize: 15,
    color: '#004aad',
    paddingLeft: 10,
    paddingTop: 35,
    alignSelf: 'center',
  },

  logoStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  buttonStyle: {
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
