import {StyleSheet} from 'react-native';

import {black, red} from '../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  blockFlatList: {
    flex: 1,
    padding: 24,
  },
  elementContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    fontSize: 10,
    borderWidth: 1,
    borderColor: black,
  },
  textContainerError: {
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: black,
    backgroundColor: red,
  },
});
