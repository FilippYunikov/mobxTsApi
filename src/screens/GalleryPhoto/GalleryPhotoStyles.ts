import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {black, red, white} from '../../constants/UIColors';

const {width, height} = Dimensions.get('screen');
export const IMAGE_SIZE = 80;
export const SPACING = 8;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  fastImage: {
    width: width,
    height: height,
  },
  fastImagePreview: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginRight: SPACING,
    borderRadius: 12,
    borderWidth: 2,
  },
  flatListPreview: {
    position: 'absolute',
    bottom: 0,
  },
  error: {
    backgroundColor: white,
    width: 200,
    height: 200,
    color: red,
  },
  loader: {
    marginTop: 40,
  },
});
