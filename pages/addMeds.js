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
import { Alert } from "react-native";

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
//  const [taskRepeat, setTaskRepeat] = useState("Daily");
//  const [taskCategory, setTaskCategory] = useState("Eye");
//  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskList, setTaskList] = useRecoilState(tasksList);
  const [activeRep, setActiveRep] = useState("Daily");
  const [activeCat, setActiveCat] = useState("Eye");
  const [activePri, setActivePri] = useState("Mid");

  const setNotification = () => {
    Notifications.scheduleNotification(date, taskName, taskDesc);
    console.log(date);
    hour1 = JSON.stringify(date).slice(12,14);
    hour = (parseInt(hour1)+7) + "";
    minutes = JSON.stringify(date).slice(15,17);
    time = hour+minutes;
    setTaskList((oldTasks) => [
          ...oldTasks,
          {
              "id": taskList.length+1,
             "noteTitle": taskName,
              "noteValue": taskDesc,
              "noteTime": time,
              "repeat": activeRep,
              "category": activeCat,
              "priority": activePri,
              "done":false

            },
        ].sort((a, b) => {
                         return a.noteTime - b.noteTime;
                       }));
    Alert.alert("Task Added", taskName+" : "+taskDesc);
    console.log(taskList);
  };

//  const [text, setText] = React.useState("");

  return (
    <>
    <View style = {{flex:1}}>
        <ScrollView>
            <View style={{ padding: 5, marginVertical: 5, marginHorizontal: 10, backgroundColor: '#E8F0F2', borderRadius: 10, elevation: 5}}>
                <Text style={{color: 'black', fontWeight: 'bold' }}> Task Name and Description</Text>
                  <TextInput
                    label="Task Name"
                    mode="outlined"
                    style={{ marginVertical: 2, marginHorizontal: 5, backgroundColor: "white", color: "black" }}
                    onChangeText = {text => setTaskName(text)}
                    value = {taskName}
                  />

                  <TextInput
                      label="Task Description"
                      mode="outlined"
                      multiline
                      style={{ marginVertical: 2, marginHorizontal: 5, backgroundColor: "white", color: "black"}}
                      onChangeText = {text => setTaskDesc(text)}
                      value = {taskDesc}
                    />
            </View>
            <View style={styles.container1} >
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5, textAlign: 'left' }}>Task Time</Text>
                <DatePicker mode="datetime" date={date} onDateChange={setDate} />
            </View>
            <View style={styles.container} name="Repeat Notification">
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Repeat Notification Every</Text>
                <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap" }}>
                    <Button style={activeRep=="Daily"?styles.buttonActive:styles.button} title="day" mode='elevated' textColor={activeRep=="Daily"?"black":"white"} onPress={() => setActiveRep("Daily")}>
                        Day
                    </Button>
                    <Button style={activeRep=="Weekly"?styles.buttonActive:styles.button} title="week" mode="elevated" textColor={activeRep=="Weekly"?"black":"white"} onPress={() => setActiveRep("Weekly")}>
                        Week
                    </Button>
                    <Button style={activeRep=="Monthly"?styles.buttonActive:styles.button} title="month" mode="elevated" textColor={activeRep=="Monthly"?"black":"white"} onPress={() => setActiveRep("Monthly")}>
                        Month
                    </Button>
                    <Button style={activeRep=="Default"?styles.buttonActive:styles.button} title="+" mode="elevated" textColor={activeRep=="Default"?"black":"white"} onPress={() => setActiveRep("Default")}>
                       +
                    </Button>
                </View>
            </View>
            <View style={styles.container} name="Select Category">
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Task Category</Text>
                <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
                    <Button style={activeCat=="Eye"?styles.buttonActive:styles.button} title="Eye" icon="eye" mode='elevated' textColor={activeCat=="Eye"?"black":"white"} onPress={() => setActiveCat("Eye")}>
                        Eye
                    </Button>
                    <Button style={activeCat=="Ear"?styles.buttonActive:styles.button} title="Ear" icon="volume-high" mode="elevated" textColor={activeCat=="Ear"?"black":"white"} onPress={() => setActiveCat("Ear")}>
                        Ear
                    </Button>
                    <Button style={activeCat=="Head"?styles.buttonActive:styles.button} title="Head" icon="head-flash" mode="elevated" textColor={activeCat=="Head"?"black":"white"} onPress={() => setActiveCat("Head")}>
                        Head
                    </Button>
                    <Button style={activeCat=="Ankle"?styles.buttonActive:styles.button} title="Ankle" icon="foot-print" mode="elevated" textColor={activeCat=="Ankle"?"black":"white"} onPress={() => setActiveCat("Ankle")}>
                       Ankles
                    </Button>
                    <Button style={activeCat=="Hip"?styles.buttonActive:styles.button} title="Hip" icon="account" mode="elevated" textColor={activeCat=="Hip"?"black":"white"} onPress={() => setActiveCat("Hip")}>
                       Hip
                    </Button>
                    <Button style={activeCat=="Default"?styles.buttonActive:styles.button} title="+" mode='elevated' textColor={activeCat=="Default"?"black":"white"} onPress={() => setActiveCat("Default")}>
                       +
                    </Button>
                </View>
            </View>
            <View style={styles.container} name="Task Priority">
                <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>
                    Task Priority
                </Text>
                <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
                    <Button style={activePri=="Low"?styles.buttonActive:styles.button} title="low" mode='contained-tonal' textColor={activePri=="Low"?"black":"white"} onPress={() => setActivePri("Low")}>
                        Low
                    </Button>
                    <Button style={activePri=="Mid"?styles.buttonActive:styles.button} title="mid" mode="elevated" textColor={activePri=="Mid"?"black":"white"} onPress={() => setActivePri("Mid")}>
                        Mid
                    </Button>
                    <Button style={activePri=="High"?styles.buttonActive:styles.button} title="high" mode="elevated" textColor={activePri=="High"?"black":"white"} onPress={() => setActivePri("High")}>
                        High
                    </Button>
                    <Button style={activePri=="Default"?styles.buttonActive:styles.button} title="+" mode="elevated" textColor={activePri=="Default"?"black":"white"} onPress={() => setActivePri("Default")}>
                       +
                    </Button>
                </View>
            </View>
            <Button style={{margin: 5, backgroundColor: "#001D6E"}} textColor="white" fontWeight="bold" title="Set notification" mode="elevated" onPress={setNotification}> Set Notification </Button>
        </ScrollView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container1: {
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
    },
    container: {
        flex:1,
        marginVertical: 5, marginHorizontal: 10,
        backgroundColor: '#E8F0F2',
        borderRadius: 10,
        padding: 5,
        elevation: 5
    },
    button: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "#C9CCD5",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "left",
    },
     buttonActive: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "#39A2DB",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "left",
    }
})
