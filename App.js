import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTasks from "./pages/addMeds";
import ViewCalendar from "./pages/viewCalendar";
import ReportGen from "./pages/pdfGenerator";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ViewMeds from "./pages/viewMeds";
import { useRecoilState } from "recoil";
import { RecoilRoot } from "recoil";
import { authenticateState } from "./pages/Atoms";
import Autheticate from"./components/authenticate";
import firebase from './components/firebase';
import { StyleSheet, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

function Ginya(){

        return(

                <NavigationContainer>
                  <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                    <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "#001D6E"}}} name="GinYa" component={ViewTasksFunc} />
                    <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "#001D6E"}}} name="Add Tasks" component={AddTasksFunc} />
                    <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "#001D6E"}}} name="Calendar" component={ViewCalendarFunc} />
                    <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "#001D6E"}}} name="Report" component={ViewReportFunc} />
                  </Tab.Navigator>
                </NavigationContainer>

        )

}
class AddTasksFunc extends React.Component {
  render() {
    return (
      <AddTasks />
    )
  }
}

class ViewCalendarFunc extends React.Component {
  render() {
    return (
      <ViewCalendar />
    )
  }
}

class ViewTasksFunc extends React.Component {
  render() {
    return (
      <ViewMeds />
    )
  }
}

class ViewReportFunc extends React.Component {
  render() {
    return (
      <ReportGen />
    )
  }
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', padding:10, marginBottom: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                flex: 1, alignItems: 'center',
                backgroundColor: isFocused ? '#001D6E' : '#E8F0F2',
                borderRadius: 10,
                margin: 5,
                padding: 5
            }}
          >
            <Icon
                  name={route.name=="GinYa" ?"home": route.name=="Add Tasks"?"plus": route.name=="Calendar"?"calendar":"file-pdf-o"} size={30} color= {isFocused ? '#fffaf0' : '#696969'}
            />
            <Text style={{ color: isFocused ? '#fffaf0' : '#696969', fontWeight: 'bold'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
//const [authState, setAuthState] = useRecoilState(authenticateState);
  return (
  <RecoilRoot>
    {(true)? <Ginya />: <Autheticate />}
</RecoilRoot>

  );
}
