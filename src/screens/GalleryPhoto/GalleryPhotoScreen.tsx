import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {IMAGE_SIZE, SPACING, styles} from './GalleryPhotoStyles';
import {UseGetPhoto} from '../../common/hooks/getPhotoQuery';
import FastImage from 'react-native-fast-image';
import {black, white} from '../../constants/UIColors';

const {width} = Dimensions.get('screen');

const GalleryPhotoScreen = () => {
  const {data, isLoading, isError} = UseGetPhoto();
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef<FlatList>(null);
  const thumbrRef = useRef<FlatList>(null);

  const scrollToActiveIndex = useCallback((index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbrRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbrRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }, []);

  const renderItem = useCallback(({item}: {item: string; index: number}) => {
    return (
      <FastImage
        style={styles.fastImage}
        source={{
          uri: item,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }, []);

  const renderItemPreview = useCallback(
    ({item, index}: {item: string; index: number}) => {
      return (
        <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
          <FastImage
            style={[
              styles.fastImagePreview,
              {borderColor: activeIndex === index ? white : black},
            ]}
            source={{
              uri: item,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
      );
    },
    [activeIndex, scrollToActiveIndex],
  );

  const keyExtractor = useCallback(item => {
    return item.toString();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )}
      {isError && (
        <View>
          <Text style={styles.error}>{'Ooops :('}</Text>
        </View>
      )}
      <FlatList
        ref={topRef}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        ref={thumbrRef}
        data={data}
        style={styles.flatListPreview}
        keyExtractor={keyExtractor}
        renderItem={renderItemPreview}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GalleryPhotoScreen;
