import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import BookList from '@/src/Components/BookList';
import { useAppSelector } from '@/src/hooks/useRedux';
import { selectFavoriteBooks } from '@/src/store/selectors/selectors';

const Favorites = () => {

    // Use the memoized selector to get the favorites list
    const favorites = useAppSelector(selectFavoriteBooks);

    return (
        <SafeAreaView style={styles.safeArea}>
           {favorites && <BookList books={favorites} />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }
})

export default Favorites;
