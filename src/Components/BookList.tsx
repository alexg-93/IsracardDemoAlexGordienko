import React, { useCallback } from 'react';
import { View,StyleSheet} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import {
  IBookItemProps,
  IBookProps,
  BookTyped,
} from '@/src/types/BookList/books.types';
import BookItem from './BookCard';
import EmptyContent from './EmptyContent';

const BookList = ({ books }: IBookProps) => {
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



  return (
      <FlashList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListEmptyComponent={ListEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  
});

export default BookList;
