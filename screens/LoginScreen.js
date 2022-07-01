import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Actions} from 'react-native-router-flux';

const LoginScreen = () => {
  const {textStyle, logoStyle: iconStyle, buttonStyle} = styles;

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#A9A9A9'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.wrapper}
      scrollEnabled={false}>
      <Image style={iconStyle} source={require('../images/logo.png')} />

      <View style={styles.textStyle}>
        <Text style={textStyle}>Email</Text>
      </View>

      <View style={{alignSelf: 'stretch'}}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          borderColor="#38b6ff"
          color="#004aad"
        />
      </View>

      <View style={styles.textStyle}>
        <Text style={textStyle}>Password</Text>
      </View>

      <View style={{alignSelf: 'stretch'}}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
          borderColor="#38b6ff"
          color="#004aad"
        />
      </View>

      <TouchableOpacity
        style={buttonStyle}
        onPress={() => {
          // Actions.home();

          checkTextInput;
        }}>
        <LinearGradient
          colors={['#43D4FF', '#38ABFD', '#2974FA']}
          style={buttonStyle}>
          <Text style={{color: '#ffffff', textTransform: 'uppercase'}}>
            Login
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    //flexDirection: 'column',
  },

  textStyle: {
    fontSize: 14,
    color: '#004aad',
    textAlign: 'left',
    padding: 6,
  },

  logoStyle: {
    alignSelf: 'center',
    margin: 45,
    width: 300,
    height: 280,
  },

  buttonStyle: {
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  input: {
    borderRadius: 50,
    borderColor: '#0071FF',
    borderWidth: 4,
    fontSize: 14,
    textAlign: 'left',
    padding: 15,
    margin: 0,
    justifyContent: 'center',
  },
});
