import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {gray, lightBlue} from '../constants/UIColors';
import {RootStackParamList, RootTabParamList} from './Navigation.types';
import {AboutScreen} from '../screens/About';
import {QuotesScreen} from '../screens/Quotes';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="tabs" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name as any}
          component={screen.component}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  name={screen.icon}
                  size={30}
                  color={focused ? lightBlue : gray}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return <NavigationContainer>{StackNavigation()}</NavigationContainer>;
};

const tabScreens = [
  {
    component: AboutScreen,
    name: 'about',
    icon: 'home',
  },
  {
    component: QuotesScreen,
    name: 'quotes',
    icon: 'globe',
  },
];

const tabBarScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: lightBlue,
  tabBarInactiveTintColor: gray,
};

export default Navigation;
