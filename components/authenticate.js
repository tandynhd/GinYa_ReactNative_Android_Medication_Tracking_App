import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Login from"./login"
import Signup from"./signup"
import firebase from './firebase';
import { StyleSheet, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { RecoilRoot } from "recoil";

export default function Authenticate() {

      return (
      <RecoilRoot>
        {(true)? <Login />: <Signup/>}
    </RecoilRoot>

  );
}
