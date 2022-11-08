import React, { useState, useEffect } from "react";
import { Button } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function MyComponent() {
const [active, setActive] = useState("1");
    return(
    <View style={styles.container}>
        <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Repeat Notification Every</Text>
        <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap" }}>
            <Button style={active=="1"?styles.buttonActive:styles.button} title="day" mode='elevated' textColor={active=="1"?"black":"white"} onPress={() => setActive("1")}>
                Day
            </Button>
            <Button style={active=="2"?styles.buttonActive:styles.button} title="week" mode="elevated" textColor={active=="2"?"black":"white"} onPress={() => setActive("2")}>
                Week
            </Button>
            <Button style={active=="3"?styles.buttonActive:styles.button} title="month" mode="elevated" textColor={active=="3"?"black":"white"} onPress={() => setActive("3")}>
                Month
            </Button>
            <Button style={active=="4"?styles.buttonActive:styles.button} title="+" mode="elevated" textColor={active=="4"?"black":"white"} onPress={() => setActive("4")}>
               +
            </Button>
        </View>
    </View>
    )
  };


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical: 5, marginHorizontal: 10,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        padding: 5,
        elevation: 5
    },
    button: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "#979797",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "left",
    },
     buttonActive: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        borderRadius: 10,
        backgroundColor: "lightskyblue",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "left",
    }
})