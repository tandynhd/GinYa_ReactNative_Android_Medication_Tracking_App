import * as React from 'react';
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

const MyComponent = () => (
    <View style={styles.container}>
        <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Repeat Notification Every</Text>
        <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap" }}>
            <Button style={styles.buttonActive} title="day" mode='elevated' textColor="black" onPress={() => console.log('Pressed')}>
                Day
            </Button>
            <Button style={styles.button} title="week" mode="elevated" textColor="white" onPress={() => console.log('Pressed')}>
                Week
            </Button>
            <Button style={styles.button} title="month" mode="elevated" textColor="white" onPress={() => console.log('Pressed')}>
                Month
            </Button>
            <Button style={styles.button} title="+" mode="elevated" textColor="white" onPress={() => console.log('Pressed')}>
               +
            </Button>
        </View>
    </View>
    );
export default MyComponent;


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