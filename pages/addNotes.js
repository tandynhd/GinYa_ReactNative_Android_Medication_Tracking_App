import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { IconButton, TextInput, FAB } from "react-native-paper";
//import formatTime from "minutes-seconds-milliseconds";

function AddNotes({ route, navigation }) {
  // console.log(formatTime(new Date().getTime()));
  const [noteTitle, setNoteTitle] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [noteTime, setNoteTime] = useState("0900");
  const [date, setDate] = useState(new Date());

  function onSaveNote() {
    route.params.addNote({ noteTitle, noteValue, noteTime });
    // notes.sort(noteTime);
    // console.log(route.params.notes);
    navigation.goBack();
  }
  return (
    <>
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <TextInput
          label="Add Time Here"
          value={noteTime}
          mode="outlined"
          onChangeText={setNoteTime}
          style={styles.title}
        />
        {/* <Text>test</Text>
        <RNDateTimePicker textColor="red" value={new Date()} /> */}

        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == "" ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconButton: {
    backgroundColor: "rgba(46, 113, 102, 0.8)",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNotes;
