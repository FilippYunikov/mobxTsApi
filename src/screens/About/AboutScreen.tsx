import React from 'react';
import {Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './AboutScreenStyles';
import {ProfileScreenNavigationProp} from '../../navigation/Navigation.types';

const AboutScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const nextScreen = () => {
    navigation.navigate('quotes');
  };

  return (
    <View style={styles.container}>
      <Text>О приложении</Text>
      <Button title={'Котировки'} onPress={nextScreen} />
    </View>
  );
};

export default AboutScreen;
