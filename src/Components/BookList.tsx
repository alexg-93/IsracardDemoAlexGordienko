import React, { useCallback } from 'react';
import { View,StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {
  IBookItemProps,
  IBookProps,
  BookTyped,
} from '@/src/types/BookList/books.types';
import BookItem from './BookCard';
import GridBookCard from './GridBookCard';
import EmptyContent from './EmptyContent';
import { useLayout } from '../hooks/useLayout';
import Feather from '@expo/vector-icons/Feather';

const BookList = ({ books }: IBookProps) => {

  const { isGrid,handleToggleLayout } = useLayout();

  // Memoize renderItem
  const renderItem = useCallback(({ item }: { item: IBookItemProps }) => {
    return (
      <BookItem
        title={item.title}
        releaseDate={item.releaseDate}
        cover={item.cover}
        number={item.number}
      />
    );
  }, []);

 // Memoize renderItemGrid
  const renderItemGrid = useCallback(({ item }: { item: IBookItemProps }) => {
    return (
      <GridBookCard
        title={item.title}
        releaseDate={item.releaseDate}
        cover={item.cover}
        number={item.number}
      />
    );
  }, []);

  // Memoize keyExtractor
  const keyExtractor = useCallback((item: BookTyped) => 'book' + item.index.toString(),[]);

  const ItemSeparatorComponent = useCallback(() => {
    return (
      <View style={{ height: 10 }} />
    );
  },[])

  const ListEmptyComponent = useCallback(() => {
    return (<EmptyContent />);
  },[])

  const LayoutToggleButton = useCallback(() => {

    const onPress = () =>{
      handleToggleLayout();
    }

    return (
        <TouchableOpacity style={styles.layoutButtonStyle} onPress={onPress}>
           <Feather name={!isGrid ? 'grid' : 'list'} size={24} color="black" />
         </TouchableOpacity>

    );
  },[])




  return (
      <FlatList
        key={isGrid ? 'grid' : 'list'}
        data={books}
        renderItem={isGrid ? renderItemGrid : renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={LayoutToggleButton}
        numColumns={isGrid ? 2 : 1}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle:{
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
  },
  layoutButtonStyle:{
    backgroundColor: "#ddd",
    borderRadius: 5,
    width: 100,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    padding:5
  }
});

export default BookList;
