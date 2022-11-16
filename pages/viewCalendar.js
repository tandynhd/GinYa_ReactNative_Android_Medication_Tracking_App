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
  Image
} from 'react-native';

import Lottie from 'lottie-react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Homepage() {
    const [taskStatus, setTaskStatus] = useRecoilState(tasksStatus);
    const eye = {key: 'eye', color: 'red'};
    const ear = {key: 'ear', color: 'blue'};
    const head = {key: 'head', color: 'green'};
    const ankle = {key: 'ankle', color: 'purple'};
    const hip = {key: 'hip', color: "#DC5F00"}; //orange
    const red = "#eb9393";
    const yellow = "#ffde4d";
    const green = "#ade29d";
    const w = 50;
    const h = 50;

    const [dateDetails, setDateDetails] = useState(0);
    const [dateDesc, setDateDesc] = useState([])
    const missedMeds = [
       taskStatus[dateDetails].eye?"Eye":"",
       taskStatus[dateDetails].ear?"Ear":"",
       taskStatus[dateDetails].head?"Head":"",
       taskStatus[dateDetails].hip?"Hip":"",
       taskStatus[dateDetails].ankle?"Ankle":""
    ]
    const renderImage = (image) => {
                switch (image) {
                                case "Eye": return <Image source={require('../components/static/eye.jpg')} style={{ width: w, height: h, borderRadius: 10 }}/>;
                                case "Head": return <Image source={require('../components/static/head.jpg')} style={{ width: w, height: h, borderRadius: 10 }}/>;
                                case "Hip": return <Image source={require('../components/static/hip.jpg')} style={{ width: w, height: h, borderRadius: 10 }}/>;
                                case "Ankle": return <Image source={require('../components/static/ankle.jpg')} style={{ width: w, height: h, borderRadius: 10 }}/>;
                                case "Ear": return <Image source={require('../components/static/ear.jpg')} style={{ width: w, height: h, borderRadius: 10 }}/>;
                              }
                };
  return (
    <View style={{padding: 5, margin: 5, flex:1}}>
    <Calendar style={{padding: 5, margin:5,  borderRadius: 15,}}
       onDayPress={day => {
          setDateDetails(day["day"]-1);
        }}
      markingType={'multi-dot'}
      markedDates={{
        '2022-11-01': {dots: [taskStatus[0].eye?eye:"",taskStatus[0].ear?ear:"",taskStatus[0].head?head:"",taskStatus[0].ankle?ankle:"",taskStatus[0].hip?hip:""], selected: true, selectedColor: taskStatus[0].color},
        '2022-11-02': {dots: [taskStatus[1].eye?eye:"",taskStatus[1].ear?ear:"",taskStatus[1].head?head:"",taskStatus[1].ankle?ankle:"",taskStatus[1].hip?hip:""], selected: true, selectedColor: taskStatus[1].color},
        '2022-11-03': {dots: [taskStatus[2].eye?eye:"",taskStatus[2].ear?ear:"",taskStatus[2].head?head:"",taskStatus[2].ankle?ankle:"",taskStatus[2].hip?hip:""], selected: true, selectedColor: taskStatus[2].color},
        '2022-11-04': {dots: [taskStatus[3].eye?eye:"",taskStatus[3].ear?ear:"",taskStatus[3].head?head:"",taskStatus[3].ankle?ankle:"",taskStatus[3].hip?hip:""], selected: true, selectedColor: taskStatus[3].color},
        '2022-11-05': {dots: [taskStatus[4].eye?eye:"",taskStatus[4].ear?ear:"",taskStatus[4].head?head:"",taskStatus[4].ankle?ankle:"",taskStatus[4].hip?hip:""], selected: true, selectedColor: taskStatus[4].color},
        '2022-11-06': {dots: [taskStatus[5].eye?eye:"",taskStatus[5].ear?ear:"",taskStatus[5].head?head:"",taskStatus[5].ankle?ankle:"",taskStatus[5].hip?hip:""], selected: true, selectedColor: taskStatus[5].color},
        '2022-11-07': {dots: [taskStatus[6].eye?eye:"",taskStatus[6].ear?ear:"",taskStatus[6].head?head:"",taskStatus[6].ankle?ankle:"",taskStatus[6].hip?hip:""], selected: true, selectedColor: taskStatus[6].color},
        '2022-11-08': {dots: [taskStatus[7].eye?eye:"",taskStatus[7].ear?ear:"",taskStatus[7].head?head:"",taskStatus[7].ankle?ankle:"",taskStatus[7].hip?hip:""], selected: true, selectedColor: taskStatus[7].color},
        '2022-11-09': {dots: [taskStatus[8].eye?eye:"",taskStatus[8].ear?ear:"",taskStatus[8].head?head:"",taskStatus[8].ankle?ankle:"",taskStatus[8].hip?hip:""], selected: true, selectedColor: taskStatus[8].color},
        '2022-11-10': {dots: [taskStatus[9].eye?eye:"",taskStatus[9].ear?ear:"",taskStatus[9].head?head:"",taskStatus[9].ankle?ankle:"",taskStatus[9].hip?hip:""], selected: true, selectedColor: taskStatus[9].color},
        '2022-11-11': {dots: [taskStatus[10].eye?eye:"",taskStatus[10].ear?ear:"",taskStatus[10].head?head:"",taskStatus[10].ankle?ankle:"",taskStatus[10].hip?hip:""], selected: true, selectedColor: taskStatus[10].color},
        '2022-11-12': {dots: [taskStatus[11].eye?eye:"",taskStatus[11].ear?ear:"",taskStatus[11].head?head:"",taskStatus[11].ankle?ankle:"",taskStatus[11].hip?hip:""], selected: true, selectedColor: taskStatus[11].color},
        '2022-11-13': {dots: [taskStatus[12].eye?eye:"",taskStatus[12].ear?ear:"",taskStatus[12].head?head:"",taskStatus[12].ankle?ankle:"",taskStatus[12].hip?hip:""], selected: true, selectedColor: taskStatus[12].color},
        '2022-11-14': {dots: [taskStatus[13].eye?eye:"",taskStatus[13].ear?ear:"",taskStatus[13].head?head:"",taskStatus[13].ankle?ankle:"",taskStatus[13].hip?hip:""], selected: true, selectedColor: taskStatus[13].color},
        '2022-11-15': {dots: [taskStatus[14].eye?eye:"",taskStatus[14].ear?ear:"",taskStatus[14].head?head:"",taskStatus[14].ankle?ankle:"",taskStatus[14].hip?hip:""], selected: true, selectedColor: taskStatus[14].color},
        '2022-11-16': {dots: [taskStatus[15].eye?eye:"",taskStatus[15].ear?ear:"",taskStatus[15].head?head:"",taskStatus[15].ankle?ankle:"",taskStatus[15].hip?hip:""], selected: true, selectedColor: taskStatus[15].color},
        '2022-11-17': {dots: [taskStatus[16].eye?eye:"",taskStatus[16].ear?ear:"",taskStatus[16].head?head:"",taskStatus[16].ankle?ankle:"",taskStatus[16].hip?hip:""], selected: true, selectedColor: taskStatus[16].color},
        '2022-11-18': {dots: [taskStatus[17].eye?eye:"",taskStatus[17].ear?ear:"",taskStatus[17].head?head:"",taskStatus[17].ankle?ankle:"",taskStatus[17].hip?hip:""], selected: true, selectedColor: taskStatus[17].color},
        '2022-11-19': {dots: [taskStatus[18].eye?eye:"",taskStatus[18].ear?ear:"",taskStatus[18].head?head:"",taskStatus[18].ankle?ankle:"",taskStatus[18].hip?hip:""], selected: true, selectedColor: taskStatus[18].color},
        '2022-11-20': {dots: [taskStatus[19].eye?eye:"",taskStatus[19].ear?ear:"",taskStatus[19].head?head:"",taskStatus[19].ankle?ankle:"",taskStatus[19].hip?hip:""], selected: true, selectedColor: taskStatus[19].color},
//        '2022-11-21': {dots: [taskStatus[20].eye?eye:"",taskStatus[20].ear?ear:"",taskStatus[20].head?head:"",taskStatus[20].ankle?ankle:"",taskStatus[20].hip?hip:""]},

      }}
      enableSwipeMonths={true}
    />
    <ScrollView>
    <Card style={{padding: 5, margin: 5, borderRadius: 15}}>
        <Card.Title style={styles.cardCon} title={taskStatus[dateDetails].date} subtitle={taskStatus[dateDetails].color==green?"Good Job":taskStatus[dateDetails].color==yellow?"Took the Following Medicines Late":"Missed the Following Medicines"}  />
        <View style={{flexDirection: "row", flexWrap:"wrap", padding:2, justifyContent:"space-around"}}>
            {missedMeds[0]&&<Text> {missedMeds[0]} </Text>}
            {missedMeds[1]&&<Text> {missedMeds[1]} </Text>}
            {missedMeds[2]&&<Text> {missedMeds[2]} </Text>}
            {missedMeds[3]&&<Text> {missedMeds[3]} </Text>}
            {missedMeds[4]&&<Text> {missedMeds[4]} </Text>}
            </View>
        <View style={{flexDirection: "row", flexWrap:"wrap", padding:2, justifyContent:"space-around"}}>
         {renderImage(missedMeds[0])}
         {renderImage(missedMeds[1])}
         {renderImage(missedMeds[2])}
         {renderImage(missedMeds[3])}
         {renderImage(missedMeds[4])}
         </View>
      </Card>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    cardCon: {
        marginVertical: 5, marginHorizontal: 10,
        backgroundColor: '#E8F0F2',
        borderRadius: 10,
        padding: 5,
        elevation: 5
    },
})

