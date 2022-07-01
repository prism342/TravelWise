import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = () => {
  const {textStyle, topicStyle, buttonStyle} = styles;

  const initialState = {
    react: false,
    next: false,
    vue: false,
    angular: false,
  };

  const [state, setState] = React.useState(initialState);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#A9A9A9'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.wrapper}
      scrollEnabled={false}>
      <Text style={topicStyle}>Create New Account</Text>

      <Text style={textStyle}>Username</Text>

      <View style={{alignSelf: 'stretch'}}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          borderColor="#38b6ff"
          color="#004aad"
        />
      </View>

      <Text style={textStyle}>Email</Text>

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

      <Text style={textStyle}>Password</Text>

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

      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <View style={styles.checkboxWrapper}>
          <CheckBox
            value={state.react}
            tintColors={{true: '#38b6ff', false: '#004aad'}}
            onValueChange={value =>
              setState({
                ...state,
                react: value,
              })
            }
          />
        </View>

        <Text style={{color: '#004aad', marginLeft: 5, alignSelf: 'center'}}>
          I agree with
        </Text>

        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            Actions.register();
          }}>
          <Text
            style={{
              color: '#004aad',
              marginLeft: 5,
              alignSelf: 'center',
              textDecorationLine: 'underline',
            }}>
            Terms and Conditions
          </Text>
        </TouchableOpacity>
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
            Sign Up
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;

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
    marginTop: 10,
    marginBottom: 10,
  },

  topicStyle: {
    fontSize: 28,
    color: '#004aad',
    textAlign: 'left',
    padding: 6,
    marginBottom: 25,
    fontWeight: 'bold',
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
