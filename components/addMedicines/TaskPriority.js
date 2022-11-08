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
        <Text style={{color: 'black', fontWeight: 'bold', padding: 5}}>
            Set Task Priority
        </Text>
        <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
            <Button style={styles.buttonActive} title="low" mode='contained-tonal' onPress={() => console.log('Pressed')}>
                Low
            </Button>
            <Button style={styles.button} title="mid" mode="elevated" textColor="black" onPress={() => console.log('Pressed')}>
                Mid
            </Button>
            <Button style={styles.button} title="high" mode="elevated" textColor="white" onPress={() => console.log('Pressed')}>
                High
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
        alignItems: 'flex-start',
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