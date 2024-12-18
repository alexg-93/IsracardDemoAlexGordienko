import React, { useCallback, useState } from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import BookList from '@/src/Components/BookList';
import { useAppSelector } from '@/src/hooks/useRedux';
import { selectFavoriteBooks } from '@/src/store/selectors/selectors';
import { useFilterBooks } from '@/src/hooks/useFilterBooks';
import { BookTyped } from '@/src/services/harryPotterBooks.types';
import SearchBook from '@/src/Components/SearchBook';

const Favorites = () => {

    // Use the memoized selector to get the favorites list
    const favorites = useAppSelector(selectFavoriteBooks);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const {filteredBooks} = useFilterBooks({books:favorites as BookTyped[],searchValue:searchTerm,filterBy:'both'});
    
    const handleChangeText = useCallback((text: string) => {
            setSearchTerm(text);
            },[setSearchTerm])
        
    return (
        <SafeAreaView style={styles.safeArea}>
            {favorites && (
                <>
                <SearchBook 
                placeholder="Search Book by title or description"
                onChangeText={handleChangeText} 
                debounceTime={400}
                />
               <BookList books={filteredBooks} />
               </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }
})

export default Favorites;
