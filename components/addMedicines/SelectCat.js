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
        <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>Select Medication Categories</Text>
        <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
            <Button style={styles.buttonActive} title="Eye" icon="eye" mode='contained-tonal' onPress={() => console.log('Pressed')}>
                Eye
            </Button>
            <Button style={styles.button} title="Ear" icon="volume-high" mode="contained" onPress={() => console.log('Pressed')}>
                Ear
            </Button>
            <Button style={styles.button} title="Head" icon="head-flash" mode="contained" onPress={() => console.log('Pressed')}>
                Head
            </Button>
            <Button style={styles.button} title="Ankles" icon="foot-print" mode="contained" onPress={() => console.log('Pressed')}>
               Ankles
            </Button>
            <Button style={styles.button} title="Hip" icon="account" mode="contained" onPress={() => console.log('Pressed')}>
               Hip
            </Button>
        </View>
    </View>
 );
export default MyComponent;


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 10,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        padding: 5
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