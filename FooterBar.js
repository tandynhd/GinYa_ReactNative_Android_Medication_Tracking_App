import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text></Text>;

const AlbumsRoute = () => <Text></Text>;

const RecentsRoute = () => <Text></Text>;

const NotificationsRoute = () => <Text></Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'AddMed', title: 'Add Medication', focusedIcon: 'notebook-plus', unfocusedIcon: 'notebook-plus-outline' },
    { key: 'calendar', title: 'Calendar', focusedIcon: 'calendar-text' , unfocusedIcon: 'calendar-text-outline'},
    { key: 'report', title: 'Report', focusedIcon: 'alpha-r-box', unfocusedIcon: 'alpha-r-box-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: MusicRoute,
    AddMed: AlbumsRoute,
    calendar: RecentsRoute,
    report: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;