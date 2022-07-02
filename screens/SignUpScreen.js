import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = () => {
  const {wrapper, textStyle, topicStyle, buttonStyle, box1, box2, box3, box4} =
    styles;

  const initialState = {
    react: false,
    next: false,
    vue: false,
    angular: false,
  };

  const [state, setState] = React.useState(initialState);

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled"
      flex={1}>
      <View style={wrapper}>
        <View style={box1}>
          <Text style={topicStyle}>Create New Account</Text>
        </View>

        <View style={box2}>
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
        </View>

        <View style={box2}>
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
        </View>

        <View style={box2}>
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
        </View>

        <View style={box3}>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              style={{
                marginTop: 12,
              }}
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

          <View>
            <Text
              style={{
                color: '#004aad',
                marginLeft: 5,
                alignSelf: 'center',
                marginTop: 18,
              }}>
              I agree with
            </Text>
          </View>

          <View>
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
                  marginTop: 18,
                  textDecorationLine: 'underline',
                }}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={box4}>
          <TouchableOpacity style={buttonStyle} onPress={() => {}}>
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
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },

  textStyle: {
    fontSize: 13,
    color: '#004aad',
    textAlign: 'left',
    paddingBottom: 6,
    paddingLeft: 6,
    fontWeight: 'bold',
  },

  topicStyle: {
    fontSize: 28,
    color: '#004aad',
    textAlign: 'left',
    padding: 6,
    position: 'absolute',
    bottom: 0,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  buttonStyle: {
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
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

  box1: {
    flex: 1,
  },

  box2: {
    flex: 0.1,
    marginTop: 5,
  },

  box3: {
    flex: 0.2,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  box4: {
    justifyContent: 'flex-end',
  },
});
