import React, {useCallback, useEffect} from 'react';
import {Animated, Text, View, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';

import {styles} from './QuotesStyles';
import {useMainStore} from '../../mobx';
import {ProfileScreenNavigationProp} from '../../navigation/Navigation.types';

const QuotesScreen = observer(() => {
  const {quotes, fetchQuotes, isError} = useMainStore();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const nextScreen = () => {
    navigation.navigate('about');
  };

  useEffect(() => {
    let interval = setInterval(() => fetchQuotes(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [fetchQuotes]);

  const renderItem = useCallback(
    ({item}: {item: string}) => {
      const quote = quotes[item];
      return (
        <View style={styles.container}>
          <Animated.View style={styles.elementContainer}>
            <Text style={styles.textContainer}>{item}</Text>
            <Text style={styles.textContainer}>{quote.last}</Text>
            <Text style={styles.textContainer}>{quote.highestBid}</Text>
            <Text style={styles.textContainer}>{quote.percentChange}</Text>
          </Animated.View>
        </View>
      );
    },
    [quotes],
  );
  return (
    <View style={styles.blockFlatList}>
      <Button title={'Назад'} onPress={nextScreen} />
      {isError ? <Text style={styles.textContainerError}>Ошибка</Text> : null}
      <FlatList data={Object.keys(quotes)} renderItem={renderItem} />
    </View>
  );
});

export default QuotesScreen;
