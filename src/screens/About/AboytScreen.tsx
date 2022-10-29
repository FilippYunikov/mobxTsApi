import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './AboutStyle';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'В проекте используется:'}</Text>
      <Text style={styles.text}>{'React Query для запроса'}</Text>
      <Text style={styles.text}>{'FastImage для отображения картинок'}</Text>
      <Text style={styles.text}>{'FlastList'}</Text>
      <Text style={styles.text}>{'TabNavigation'}</Text>
    </View>
  );
};

export default AboutScreen;
