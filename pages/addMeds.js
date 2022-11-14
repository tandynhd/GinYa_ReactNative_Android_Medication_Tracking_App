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
import { useRecoilState } from "recoil";
import { tasksList } from "./Atoms"

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

export default function AddMedsPage() {
  const [date, setDate] = useState(new Date());
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskList, setTaskList] = useRecoilState(tasksList);
//  console.log(taskList);


  const setNotification = () => {
    Notifications.scheduleNotification(date, taskName, taskDesc);
    hour1 = JSON.stringify(date).slice(12,14);
    hour = (parseInt(hour1)+7) + "";
    minutes = JSON.stringify(date).slice(15,17);
    time = hour+minutes;
    setTaskList((oldTasks) => [
          ...oldTasks,
          {
             "noteTitle": taskName,
              "noteValue": taskDesc,
              "noteTime": time

            },
        ].sort((a, b) => {
                         return a.noteTime - b.noteTime;
                       }));
  };

//  const [text, setText] = React.useState("");

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
