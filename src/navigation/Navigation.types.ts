import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootTabParamList = {
  about: undefined;
  photoScreen: undefined;
};

export type RootStackParamList = {
  tabs: undefined;
};

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList>,
  StackNavigationProp<RootTabParamList>
>;
