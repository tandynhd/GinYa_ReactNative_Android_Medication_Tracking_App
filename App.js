import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTasks from "./pages/addMeds";
import ViewCalendar from "./pages/viewCalendar";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ViewMeds from "./pages/viewMeds";

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
                backgroundColor: isFocused ? '#808080' : '#dcdcdc',
                borderRadius: 5,
                margin: 5,
                padding: 5
            }}
          >
            <Icon
                  name="home" size={30} color="#fffaf0"
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
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="View Tasks" component={ViewTasksFunc} />
        <Tab.Screen name="Add Tasks" component={AddTasksFunc} />
        <Tab.Screen name="View Calendar" component={ViewCalendarFunc} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
