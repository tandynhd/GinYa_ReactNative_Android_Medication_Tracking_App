import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import { Alert } from "react-native";
import { Button } from "react-native";
import { tasksList } from "./Atoms";
import { useRecoilState } from "recoil";

//import tasksJSON from "./tasks.json";



function ViewNotes({ navigation }) {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [taskList, setTaskList] = useRecoilState(tasksList);
//  console.log(taskList);

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



//  const [notes, setNotes] = useState(tasksJSON);
//  const addNote = (note) => {
//    note.id = notes.length + 1;
//    setNotes([...notes, note]); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//  };
//  // notes.sort(notes.noteTime);

//  console.log(notes);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.listTitle}>
          Date - {date}/{month}/{year}{" "}
        </Text>
        <Text style={styles.listTitle}>
          Time - {hour}:{minute}:{seconds}
        </Text>
        {taskList.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any tasks</Text>
          </View>
        ) : (
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <List.Item
                title={
                  item.noteTime.slice(0, 2) +
                  ":" +
                  item.noteTime.slice(2, 4) +
                  " - " +
                  item.noteTitle
                }
                description={item.noteValue}
                descriptionNumberOfLines={1}
                titleStyle={
                  item.noteTime.slice(0, 2) <= hour
                    ? item.noteTime.slice(2, 4) < minute
                      ? styles.listTitlePassed
                      : styles.listTitle
                    : styles.listTitle
                }
              />
            )}
          />
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
  },
  listTitlePassed: {
    fontSize: 20,
    color: "red",
  },
});

export default ViewNotes;
