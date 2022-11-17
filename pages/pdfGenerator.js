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
    reportList = []
    htmlString = ""
    taskStatus.forEach((item) => {
        date = item.date;
        eye = item.eye?"Eye":"";
        ear = item.ear?"Ear":"";
        hip = item.hip?"Hip":"";
        head = item.head?"Head":"";
        ankle = item.ankle?"Ankle":"";
        list = [date,eye,ear,hip,head,ankle];
        reportList.push(list);
        htmlString = htmlString + '<h1> Medicines missed/taken late on ' + date + ':</h1><h2>'+ eye +'</h2><h2>'+ ear +'</h2><h2>' + head + '</h2><h2>'+ hip +'</h2><h2>'+ ankle +'</h2>'}
    );
//    console.log(reportList);
    console.log(htmlString);

    RNPrint.print({
      html: htmlString
    })
  }

  printRemotePDF= () => {
    RNPrint.print({ filePath: 'https://docs.google.com/presentation/d/1rHuXWJ9ty9jyP_jMuiZ0LiVC8q3bj_hBBwySW0wtElQ/export/pdf' })
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
            <Button onPress={this.printRemotePDF} title="View Documentation" />
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