import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  Platform,
  Text,
  View,
  FlatList
} from 'react-native';
import { useRecoilState } from "recoil";
import { tasksStatus } from "./Atoms";
import { authenticateState } from "./Atoms";

import RNPrint from 'react-native-print';

export default function RNPrintExample(){
  state = {
    selectedPrinter: null
  }

  printHTML = () => {
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
        css='<style>.card {box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s;width: 40%;border-radius: 5px;}</style>';
        htmlString = htmlString +
        '<div class="card"><h2 style = "color:'+
        item.color+
        '; font-family:verdana; font-size: 200%;"> '+
        message + date +
        ':</h2><h3 style = "padding: 30px; display: list-item;list-style-type: square;list-style-position: inside; font-size:200%;" >'
        + eye +' '+ ear+ ' ' + head +' '+ hip +' '+ ankle+' ' + '</h3></div>'
        }
    }
    );

    RNPrint.print({
      html:
      '<style>.card {box-shadow: 0 4px 8px 0;width: 100%;border-radius: 5px;padding:10px;marginTop:5px;text-align: center;background-color:"white"}</style><h1 style = "text:bold; font-size:300%;">'+'Patient Report'+'</h1>'
      +htmlString
    })
  }

  printRemotePDF= () => {
    RNPrint.print({ filePath: 'https://docs.google.com/document/d/1ICxUtYYwr84TcY-9xuSv83nUETxjqkP5Tyy0Gt3z9us/export?format=pdf' })
  }
    const [taskStatus] = useRecoilState(tasksStatus);
    const [authState, setAuthState] = useRecoilState(authenticateState);
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
            <Button
            style={{margin: 3, backgroundColor: "#001D6E"}}
            textColor="white"
            mode="elevated"
            onPress={this.printHTML}
            title="Generate Report">Generate Report </Button>
            <Button style={{margin: 3, backgroundColor: "#001D6E"}} textColor="white" mode="elevated"   onPress={this.printRemotePDF} title="Patient Profile">Patient Profile </Button>
            <Button
            style={{margin: 3, backgroundColor: "#001D6E"}}
            textColor="white" mode="elevated"
            onPress={() => setAuthState(!authState)}
            title="Log Out">Log Out </Button>
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