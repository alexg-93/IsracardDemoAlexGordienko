import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useCachedBooks } from '@/src/hooks/useCachedBooks';
import Badge from '@/src/Components/Badge';


const BookDetails = () => {

  const { bookId } = useLocalSearchParams(); // get the passed id from params
  const { findBookById } = useCachedBooks();

  const book = findBookById(+bookId); // get the book object by id

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          title: book?.title,
          headerTitleStyle: styles.bookTitleStyle,
        }}
      />
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewStyle}
      >
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: book?.cover,
            }}
            style={styles.imageStyle}
          />

          <TouchableOpacity
            onPress={() => {
              /* TODO : handle add to favorite and remove from favorite*/
            }}
            style={styles.favoriteButtonStyle}
          >
            <AntDesign name="heart" size={24} color={'red'} />
          </TouchableOpacity>
        </View>

        <View style={styles.badgesContainer}>
          <Badge
            text={`Released ${book?.releaseDate}`}
            badgeContainer={styles.badgeContainer}
          />
          <Badge
            text={`Pages : ${book?.pages}`}
            badgeContainer={styles.badgeContainer}
          />
        </View>

        <View style={styles.bookDescriptionContainer}>
          <Text style={styles.bookDescriptionText}>{book?.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewStyle: {
    backgroundColor: '#fffff',
  },
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imgContainer: {
    width: '100%',
    height: 300,
    marginTop: 20,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '50%',
    height: '100%',
    borderRadius: 10,
  },
  bookDescriptionContainer: {
    marginTop: 20,
    backgroundColor: '#352F44',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 20,
  },
  bookDescriptionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
  },
  favoriteButtonStyle: {
    width: 40,
    height: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bookTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  badgeContainer: {
    marginTop: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
});

export default BookDetails;
