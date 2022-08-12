import React from 'react';
import {Provider} from 'mobx-react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from './src/navigation';
import mainStore from './src/mobx/';

const App = () => {
  return (
    <Provider MainStore={mainStore}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
