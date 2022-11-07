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
    <View style={{ flexDirection:"row", alignItems:"space-around", flexWrap: "wrap"}}>
        <Button style={styles.button} title="Eye" icon="camera" mode='contained-tonal' onPress={() => console.log('Pressed')}>
            Eye
        </Button>
        <Button style={styles.button} title="Ear" icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Ear
        </Button>
        <Button style={styles.button} title="Head" icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Head
        </Button>
        <Button style={styles.button} title="Ankles" icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
           Ankles
        </Button>
        <Button style={styles.button} title="Hip" icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
           Hip
        </Button>
    </View>
    );
export default MyComponent;


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: "coral",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "10%",
        textAlign: "center",
    },
})