import SelCat from '../components/addMedicines/SelectCat';
import type {Node} from 'react';
import React, { useState } from 'react';
import { Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import Notifications from '../components/Notifications';
import SelRep from '../components/addMedicines/SelectRepeat';
import TaskPri from '../components/addMedicines/TaskPriority';
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

export default function Homepage() {
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
    <View style = {{flex:1}}>
        <ScrollView>
            <View style={{ padding: 10}}>
                  <TextInput
                    label="Task Name"
                    mode="outlined"
                    style={{ margin: 5 , backgroundColor: "aliceblue", color: "black"}}
                  />

                  <TextInput
                      label="Task Description"
                      mode="outlined"
                      multiline
                      style={{ margin: 5 , backgroundColor: "aliceblue", color: "black"}}
                    />
            </View>
            <SelRep />
            <SelCat />
            <View style={styles.container} >
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Choose Medication Time</Text>
                <DatePicker date={date} onDateChange={setDate} />
                <Button title="Set notification" onPress={setNotification} />
            </View>
            <TaskPri />
        </ScrollView>
        </View>
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
