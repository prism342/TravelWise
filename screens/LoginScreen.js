import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const {
    wrapper,
    textStyle,
    logoStyle: iconStyle,
    buttonStyle,
    topBox,
    middleBox,
    bottomBox,
    input,
  } = styles;

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      flex={1}>
      <View style={wrapper}>
        <View style={topBox}>
          <Image style={iconStyle} source={require('../images/logo.png')} />
        </View>

        <View style={middleBox}>
          <Text style={textStyle}>Email</Text>

          <View style={{alignSelf: 'stretch'}}>
            <TextInput
              style={input}
              placeholder="Enter your email"
              placeholderTextColor="#A9A9A9"
              keyboardType="email-address"
              borderColor="#38b6ff"
              color="#004aad"
            />
          </View>
        </View>

        <View style={middleBox}>
          <Text style={textStyle}>Password</Text>

          <View style={{alignSelf: 'stretch'}}>
            <TextInput
              style={input}
              placeholder="Enter your password"
              placeholderTextColor="#A9A9A9"
              secureTextEntry={true}
              borderColor="#38b6ff"
              color="#004aad"
            />
          </View>
        </View>

        <View style={bottomBox}>
          <TouchableOpacity style={buttonStyle} onPress={() => {}}>
            <LinearGradient
              colors={['#43D4FF', '#38ABFD', '#2974FA']}
              style={buttonStyle}>
              <Text style={{color: '#ffffff', textTransform: 'uppercase'}}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },

  topBox: {
    flex: 0.5,
    justifyContent: 'flex-start',
  },

  middleBox: {
    flex: 0.1,
  },

  bottomBox: {
    justifyContent: 'flex-end',
  },

  textStyle: {
    fontSize: 13,
    color: '#004aad',
    textAlign: 'left',
    paddingBottom: 6,
    paddingLeft: 6,
    fontWeight: 'bold',
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
    marginBottom: 10,
    marginTop: 10,
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
    marginBottom: 15,
  },
});
