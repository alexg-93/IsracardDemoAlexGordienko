import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { IBookItemProps } from '@/src/types/BookList/books.types';
import { useNavigateBookDetails } from '../hooks/useNavigateBookDetails';

const { width } = Dimensions.get('window');

const BookCard = (props: IBookItemProps) => {

  const navigateToBookDetails = useNavigateBookDetails();

  const navigateToBookDetailsCallback = useCallback(() => {
    navigateToBookDetails(props.number);
  }, [props.number]);

  return (
    <View style={styles.shadowContainerStyle}>
    <TouchableOpacity
      style={styles.cardContainerStyle}
      onPress={navigateToBookDetailsCallback}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.cover }} style={styles.imgStyle} />
      </View>
      <View style={styles.textContainerStyle}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.releaseDateStyle}>
          {`Released : ${props.releaseDate}`}
        </Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    backgroundColor: '#352F44',
    gap: 5,
    marginTop: 10,
    borderRadius: 20,
    width: width * 0.8,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  shadowContainerStyle: {
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 5,
  },
  cardTextLabelStyle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius:20
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#F8FAFC',
  },
  textContainerStyle: {
    padding: 10,
  },
  titleStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  releaseDateStyle: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 5,
  },
});

export default memo(BookCard);
