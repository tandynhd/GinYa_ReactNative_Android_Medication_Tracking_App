import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import formatTime from "minutes-seconds-milliseconds";
import { Alert } from "react-native";
import { Button } from "react-native";

function ViewNotes({ navigation }) {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setMinute(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
      setHour(new Date().getHours());
      setDate(new Date().getDate());
      setMonth(new Date().getMonth() + 1);
      setYear(new Date().getFullYear());
      console.log(seconds > 10);
      if (seconds == 10) {
        console.log("+++++++++++++++++");
        Alert.alert("Alert Title", "My Alert Msg");
      }
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  };
  // notes.sort(notes.noteTime);
  notes.sort((a, b) => {
    console.log(a.noteTime, b.noteTime);
    return a.noteTime - b.noteTime;
  });
  console.log(notes);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.listTitle}>
          Current Date - {date}/{month}/{year}{" "}
        </Text>
        <Text style={styles.listTitle}>
          Current Time - {hour}:{minute}:{seconds}
        </Text>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any tasks</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
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
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new task"
          onPress={() =>
            navigation.navigate("AddNotes", {
              addNote,
              notes,
            })
          }
        />
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
