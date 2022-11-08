import SelCat from '../components/addMedicines/SelectCat';
import type {Node} from 'react';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import Notifications from '../components/Notifications';
import SelRep from '../components/addMedicines/SelectRepeat';
import TaskPri from '../components/addMedicines/TaskPriority';
import { TextInput } from 'react-native-paper';
//import tasksJSON from "./tasks.json"

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
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const setNotification = () => {
    Notifications.scheduleNotification(date, taskName, taskDesc);
//    const newTask = {
//        "id":5,
//        "noteTitle": taskName,
//        "noteValue": taskDesc,
//        "noteTime": "0900"
//
//      };
//    const fs = require("fs");
//    let tasksJSON = fs.readFileSync("tasks.json","utf-8");
//    let tasksJSON2 = JSON.parse(tasksJSON);
//    tasksJSON2.push(newTask);
//    tasksJSON = JSON.stringify(tasksJSON2);
//    fs.writeFileSync("tasks.json", tasksJSON, "utf-8")

  };

  const _goBack = () => {console.log('Went back')};
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [text, setText] = React.useState("");

  return (
    <>
    <View style = {{flex:1}}>
        <ScrollView>
            <View style={{ padding: 5, marginVertical: 5, marginHorizontal: 10, backgroundColor: '#dcdcdc', borderRadius: 10, elevation: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold' }}> Medication Name and Description</Text>
                  <TextInput
                    label="Task Name"
                    mode="outlined"
                    style={{ marginVertical: 2, marginHorizontal: 5, backgroundColor: "#f8f8ff", color: "black" }}
                    onChangeText = {text => setTaskName(text)}
                    value = {taskName}
                  />

                  <TextInput
                      label="Task Description"
                      mode="outlined"
                      multiline
                      style={{ marginVertical: 2, marginHorizontal: 5, backgroundColor: "#f8f8ff", color: "black"}}
                      onChangeText = {text => setTaskDesc(text)}
                      value = {taskDesc}
                    />
            </View>
            <View style={styles.container} >
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5, textAlign: 'left' }}>Choose Medication Time</Text>
                <DatePicker style={{borderRadius: 25}} mode="datetime" date={date} onDateChange={setDate} />
            </View>
            <SelRep />
            <SelCat />
            <TaskPri />
            <Button style={{margin: 5, backgroundColor: "lightskyblue"}} textColor="black" fontWeight="bold" title="Set notification" mode="elevated" onPress={setNotification}> Set Notification </Button>
        </ScrollView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    container2: {
         justifyContent: 'center',
         alignItems: 'center',
    },
    wrapper: {
        height: 60,
    }
})
