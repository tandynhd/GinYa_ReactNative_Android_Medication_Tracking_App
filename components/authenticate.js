import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from "recoil";
import firebase from './firebase';
import { authenticatePage } from "../pages/Atoms";
import { useRecoilState } from "recoil";


class Login extends React.Component{
    constructor() {
        super();
        this.state = {
        email: '',
          password: '',
          isLoading: false,
          signin:true,
        }
      }
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      userLogin = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({
              isLoading: false,
              email: '',
              password: ''
            })
            this.props.navigation.navigate('Dashboard')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }
      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        }
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              placeholderTextColor='#497174'
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor='#497174'
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />
            <Button
              color="#3740FE"
              title="Sign in"
              onPress={() => this.userLogin()}
            />
            <Text
              style={styles.loginText}
              onPress={() => this.setState({signin: false})}>
              Don't have account? Click here to signup
            </Text>
          </View>
        );
      }
    }

class SignUp extends React.Component{

    constructor() {
        super();
        this.state = {
          displayName: '',
          email: '',
          password: '',
          isLoading: false,
          signin:false
        }
      }
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signup!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.state.displayName
            })
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '',
              password: ''
            })
            this.props.navigation.navigate('Login')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
      }
      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        }
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Name"
              placeholderTextColor='#497174'
              value={this.state.displayName}
              onChangeText={(val) => setDisplayName(val)}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              placeholderTextColor='#497174'
              value={this.state.email}
              onChangeText={(val) => this.updateInputVal(val, 'email')}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              placeholderTextColor='#497174'
              value={this.state.password}
              onChangeText={(val) => this.updateInputVal(val, 'password')}
              maxLength={15}
              secureTextEntry={true}
            />
            <Button
              color="#3740FE"
              title="Sign up"
              onPress={() => this.registerUser()}
            />
            <Text
              style={styles.loginText}
              onPress={() => this.setState({signin: true})}>
              Already Registered ? Click here to login
            </Text>
            </View>
        );
        }
    }

export default function App() {
    const [authPageState, setAuthPageState] = useRecoilState(authenticatePage);

    return (
    <RecoilRoot>
        {(!authPageState)? <SignUp authPageState={authPageState}/>: <Login />}
    </RecoilRoot>

);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
},
inputStyle: {
    width: '100%',
    marginBottom: 15,
    color:"#3A8891",
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,


},
loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
},
preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
}
});