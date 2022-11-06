import type {Node} from 'react';
import React, { useState } from 'react';
import { Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import Notifications from './Notifications';
import AppBar from './AppBar';
import FooterBar from './FooterBar';
import SelCat from './SelectCat';
import { TextInput } from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Ginya() {
  const [date, setDate] = useState(new Date())

  const setNotification = () => {
    Notifications.scheduleNotification(date);
  };

  const _goBack = () => {console.log('Went back')};
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [text, setText] = React.useState("");

  return (
    <>
    <AppBar />
    <View style={{ padding: 10}}>
          <TextInput
            label="Task Name"
            left={<TextInput.Icon name="account" />}
            mode="outlined"
            style={{ margin: 10 }}
          />

          <TextInput
              label="Task Description"
              left={<TextInput.Icon name="account" />}
              mode="outlined"
              multiline
              style={{ margin: 10 }}
            />

        <View style={styles.container2}>
            <SelCat />
        </View>

        <View style={styles.container} >
             <Text variant="titleLarge">Choose Medication Time</Text>
             <DatePicker date={date} onDateChange={setDate} />
             <View style={styles.wrapper} />
             <Button title="Set notification" onPress={setNotification} />
        </View>
    </View>
    <FooterBar />
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
         justifyContent: 'center',
         alignItems: 'center',
    },
    wrapper: {
        height: 60,
    }
})
