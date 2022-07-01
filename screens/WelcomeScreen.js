import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = () => {
  const {
    wrapper,
    textStyle,
    logoStyle: iconStyle,
    buttonStyle,
    subTextStyle,
  } = styles;

  return (
    <View style={wrapper}>
      <Image style={iconStyle} source={require('../images/logo.png')} />
      <View style={styles.textStyle}>
        <Text style={textStyle}>Hello Traveller!</Text>
      </View>

      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          // Actions.home();
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
          // Actions.home();
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

  textStyle: {
    fontSize: 22,
    color: '#004aad',
    textAlign: 'left',
    paddingLeft: 10,
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
    margin: 50,
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
