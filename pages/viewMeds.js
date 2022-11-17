import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import { Alert } from "react-native";
import { Button, Image } from "react-native";
import { tasksList } from "./Atoms";
import { useRecoilState } from "recoil";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Lottie from 'lottie-react-native';
//import Swipeable from 'react-native-gesture-handler/Swipeable';

function ViewNotes({ navigation }) {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [taskList, setTaskList] = useRecoilState(tasksList);
  const [tempRemovedList, setTempRemovedList] = useState(taskList);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setMinute(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
      setHour(new Date().getHours());
      setDate(new Date().getDate());
      setMonth(new Date().getMonth() + 1);
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
    const renderSwitch = (animation) => {
        switch (animation) {
                        case "Eye": return <Lottie source={require("../components/animations/eye.json")} autoPlay loop style={{ height: 100, width:100 }}/>;
                        case "Head": return <Lottie source={require("../components/animations/head.json")} autoPlay loop style={{ height: 100, width:100 }}/>;
                        case "Hip": return <Lottie source={require("../components/animations/hip.json")} autoPlay loop style={{ height: 100, width:100 }}/>;
                        case "Ankle": return <Lottie source={require("../components/animations/ankle.json")} autoPlay loop style={{ height: 100, width:100 }}/>;
                        case "Ear": return <Lottie source={require("../components/animations/ear.json")} autoPlay loop style={{ height: 100, width:100 }}/>;
                        case "Undo": return <Lottie source={require("../components/animations/undo.json")} autoPlay loop style={{ height: 50, width:50 }}/>;
                      }
        };

    const renderImage = (image) => {
            switch (image) {
                            case "Eye": return <Image source={require('../components/static/eye.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>;
                            case "Head": return <Image source={require('../components/static/head.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>;
                            case "Hip": return <Image source={require('../components/static/hip.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>;
                            case "Ankle": return <Image source={require('../components/static/ankle.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>;
                            case "Ear": return <Image source={require('../components/static/ear.jpg')} style={{ width: 100, height: 100, borderRadius: 10 }}/>;
                          }
            };
  const toggleItemCompletion = (item) => {
    setTempRemovedList(taskList)
    tempTaskList = taskList.slice()
      for(var i = 0; i < tempTaskList.length; i++) {
          if(tempTaskList[i].key == item.key) {
              tempTaskList.splice(i, 1);
              break;
          }
      }
      setTaskList(tempTaskList);
      };
    const createTwoButtonAlert = (item) =>
        Alert.alert(
          "Task Completed",
          "Remove Task From List?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => toggleItemCompletion(item) }
          ]
        );


  return (
    <>
      <View style={styles.container}>
      <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <Text style={styles.listTitle}>
          Date - {date}/{month}/{year}{" "}
        </Text>
        <Text style={styles.listTitle}>
          Time - {hour}:{minute}:{seconds}
        </Text>
        </View>
        {taskList.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any tasks, Great Job!</Text>
          </View>
        ) : (
        <>
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
            <View >
                <TouchableOpacity onPress={() => createTwoButtonAlert(item)} style={{justifyContent:"center"}}>
                <View style={[styles.TaskList]}>
                      <Text style={item.noteTime.slice(0, 2) <= hour? item.noteTime.slice(2, 4) < minute? styles.listTitlePassed: styles.listTitle: styles.listTitle} >
                          {item.noteTime.slice(0, 2) +
                          ":" +
                          item.noteTime.slice(2, 4) +
                          " - " +
                          item.noteTitle}
                      </Text>
                      <Text style={{fontSize:20}}>{item.noteValue}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-around", paddingVertical: 5}}>
                        <Text >Repeat: {item.repeat}</Text>
                        <Text >Category: {item.category}</Text>
                        <Text >Priority: {item.priority}</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", paddingVertical: 5}}>
                        {renderSwitch(item.category)}
                        {renderImage(item.category)}
                    </View>
                    </View>
                </TouchableOpacity>
              </View>)}
          />
          {tempRemovedList != taskList ?
          <TouchableOpacity onPress={() => setTaskList(tempRemovedList)} style={{justifyContent: "center", alignItems: "center"}}>
            {renderSwitch("Undo")}
          </TouchableOpacity>:<></>}
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listTitlePassed: {
    fontSize: 20,
    color: "red",
    fontWeight: 'bold'
  },
  TaskList: {
    backgroundColor: "#E8F0F2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 2,
    elevation: 5
  },
});

export default ViewNotes;
