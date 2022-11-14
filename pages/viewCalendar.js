import type {Node} from 'react';
import React, { useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';
import { useRecoilState } from "recoil";
import { tasksStatus } from "./Atoms"

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
    const [taskStatus, setTaskStatus] = useRecoilState(tasksStatus);
//    console.log(typeof taskStatus[0].date);
  return (
    <View style={{padding: 5, margin: 5, flex:1}}>
    <Calendar style={{padding: 5, margin:5,  borderRadius: 15,}}
//        initialDate={'2022-11-09'}
      // Collection of dates that have to be marked. Default = {}
      markedDates={{
//        '2022-11-09': {marked: true, dotColor: 'white', activeOpacity: 100},
        '2022-11-01': {selected: true, selectedColor: taskStatus[0].color},
        '2022-11-02': {selected: true, selectedColor: taskStatus[1].color},
        '2022-11-03': {selected: true, selectedColor: taskStatus[2].color},
        '2022-11-04': {selected: true, selectedColor: taskStatus[3].color},
        '2022-11-05': {selected: true, selectedColor: taskStatus[4].color},
        '2022-11-06': {selected: true, selectedColor: taskStatus[5].color},
        '2022-11-07': {selected: true, selectedColor: taskStatus[6].color},
        '2022-11-08': {selected: true, selectedColor: taskStatus[7].color},

//        '2022-11-19': {disabled: true, disableTouchEvent: true}
      }}
      enableSwipeMonths={true}
    />
    <ScrollView>
    <Card style={{padding: 5, margin: 5, borderRadius: 15}}>
        <Card.Title style={styles.cardCon} title={taskStatus[0].date} subtitle={taskStatus[0].color=="green"?"Good Job":taskStatus[0].color=="orange"?"Took a few Medicines Late":"Missed some Medicines"}  />
        <Card.Title style={styles.cardCon} title="Nov 2" subtitle="Took Medicines Late"  />
        <Card.Title style={styles.cardCon} title="Nov 3" subtitle="Good Job"  />
        <Card.Title style={styles.cardCon} title="Nov 4" subtitle="Took Medicines Late"  />
        <Card.Title style={styles.cardCon} title="Nov 5" subtitle="Took Medicines Late"  />
        <Card.Title style={styles.cardCon} title="Nov 6" subtitle="Took Medicines Late"  />
        <Card.Title style={styles.cardCon} title="Nov 7" subtitle="Missed Medicines"  />
        <Card.Title style={styles.cardCon} title="Nov 8" subtitle="Missed Few Medicines"  />
      </Card>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    cardCon: {
        marginVertical: 5, marginHorizontal: 10,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        padding: 5,
        elevation: 5
    },
})

