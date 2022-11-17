import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  NativeModules,
  Platform,
  Text,
  View,
  FlatList
} from 'react-native';
import { useRecoilState } from "recoil";
import { tasksStatus } from "./Atoms";

import RNPrint from 'react-native-print';

export default function RNPrintExample(){
  state = {
    selectedPrinter: null
  }

  printHTML = () => {
   // reportList = []
    htmlString = ""
    taskStatus.forEach((item) => {
        if(Object.keys(item).length!=2){
        date = item.date;
        eye = item.eye?"Eye":"";
        ear = item.ear?"Ear":"";
        hip = item.hip?"Hip":"";
        head = item.head?"Head":"";
        ankle = item.ankle?"Ankle":"";
        message=item.color=="#ffde4d"?"Took the following medicines late on ":"Missed the following medicines on ";
        //list = [date,eye,ear,hip,head,ankle];
        console.log(Object.keys(item).length);
        //reportList.push(list);
        htmlString = htmlString + '<h2 style = "color:#001D6E; font-family:verdana; font-size: 200%;"> '+message + date + ':</h2><h3 style = "padding: 30px; display: list-item;list-style-type: square;list-style-position: inside; font-size:200%;" >'+ eye +' '+ ear+ ' ' + head +' '+ hip +' '+ ankle+' ' + '</h3>'
        }
    }
    );

    RNPrint.print({
      html: '<h1 style = "text:bold; font-size:300%;">'+'Patient Report'+'</h1>'+htmlString
    })
  }

  printRemotePDF= () => {
    RNPrint.print({ filePath: 'https://docs.google.com/document/d/1O-Riu7AtOX-3vhEmqjVcd0_Dom3Hn1KuFPrqm7i-ekw/export?format=pdf' })
  }
    const [taskStatus] = useRecoilState(tasksStatus);
    return (
    <View style={{flex: 1}}>
        <View style={{flex: 9}}>
            <FlatList
                data={taskStatus}
                renderItem={({ item }) => (
                <View style={{backgroundColor:item.color,flex:1, marginVertical: 5, marginHorizontal: 10, borderRadius: 10, padding: 5, elevation: 5}}>
                    <Text >Date: {item.date}</Text>
                    <Text >{item.color=="#ade29d"?"Great Job, No missed medicines!":item.color=="#ffde4d"?"Took the following medicines late: ":"Missed the following medicines: "} {item.eye?"Eye ":""} { item.ear?"Ear ":""}  {item.head?"Head ":""} {item.ankle?"Ankle ":""} {item.hip?"Hip ":""}</Text>
                </View>)}

              />
          </View>
          <View style={styles.container}>
            <Button onPress={this.printHTML} title="Generate Report" />
            <Button onPress={this.printRemotePDF} title="Patient Profile" />
          </View>
    </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0F2',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
});