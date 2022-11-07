import type {Node} from 'react';
import React, { useState } from 'react';
//import { Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Avatar, Card, Title, Paragraph, Button } from 'react-native-paper';

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
  return (
    <View style={{paddingTop: 10, flex:1}}>
    <Calendar
        initialDate={'2022-11-09'}
      // Collection of dates that have to be marked. Default = {}
      markedDates={{
        '2022-11-09': {marked: true, dotColor: 'white', activeOpacity: 100},
        '2022-11-01': {selected: true, selectedColor: 'green'},
        '2022-11-02': {selected: true, selectedColor: 'orange'},
        '2022-11-03': {selected: true, selectedColor: 'green'},
        '2022-11-04': {selected: true, selectedColor: 'orange'},
        '2022-11-05': {selected: true, selectedColor: 'orange'},
        '2022-11-06': {selected: true, selectedColor: 'orange'},
        '2022-11-07': {selected: true, selectedColor: 'red'},
        '2022-11-08': {selected: true, selectedColor: 'orange'},

//        '2022-11-19': {disabled: true, disableTouchEvent: true}
      }}
      enableSwipeMonths={true}
    />
    <ScrollView>
    <Card>
        <Card.Title title="Nov 1" subtitle="Good Job"  />
        <Card.Title title="Nov 2" subtitle="Took Medicines Late"  />
        <Card.Title title="Nov 3" subtitle="Good Job"  />
        <Card.Title title="Nov 4" subtitle="Took Medicines Late"  />
        <Card.Title title="Nov 5" subtitle="Took Medicines Late"  />
        <Card.Title title="Nov 6" subtitle="Took Medicines Late"  />
        <Card.Title title="Nov 7" subtitle="Missed Medicines"  />
        <Card.Title title="Nov 8" subtitle="Missed Few Medicines"  />
      </Card>
    </ScrollView>
    </View>
  );
};

