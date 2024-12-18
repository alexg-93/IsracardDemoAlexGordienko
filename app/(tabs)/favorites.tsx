import React, { useCallback, useState } from 'react';
import { StyleSheet,SafeAreaView, TouchableOpacity,Text, View} from 'react-native';
import BookList from '@/src/Components/BookList';
import { useAppSelector } from '@/src/hooks/useRedux';
import { selectFavoriteBooks } from '@/src/store/selectors/selectors';
import { useFilterBooks } from '@/src/hooks/useFilterBooks';
import { BookTyped } from '@/src/services/harryPotterBooks.types';
import SearchBook from '@/src/Components/SearchBook';
import DropDown from '@/src/Components/DropDown';
import { TSortCriteria, useSortBooks } from '@/src/hooks/useSortBooks';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Favorites = () => {

    // Use the memoized selector to get the favorites list
    const favorites = useAppSelector(selectFavoriteBooks);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const {filteredBooks} = useFilterBooks({books:favorites as BookTyped[],searchValue:searchTerm,filterBy:'both'});

    const [selectedValue, setSelectedValue] = useState<TSortCriteria>("title");  // Track dropdown selection
    const { sortedBooks, sortOrder, toggleSortOrder } = useSortBooks(filteredBooks, selectedValue);

    const handleChangeText = useCallback((text: string) => {
            setSearchTerm(text);
            },[])

    const handleSortChange = useCallback((value: string) => {
                setSelectedValue(value as TSortCriteria);  // Update selected sort criterion
    }, []);
        
        
    return (
        <SafeAreaView style={styles.safeArea}>
            {favorites && (
                <>
               {
                favorites?.length>0  && (
                    <>
                    <SearchBook 
                    placeholder="Search Book by title or description"
                    onChangeText={handleChangeText} 
                    debounceTime={400}
                    />
                  <View style={styles.sortContainer}>
                  <DropDown selectedValue={selectedValue} handleSortChange={handleSortChange} />
                    {/* Sort Order Toggle Button */}
                    <TouchableOpacity 
                            onPress={toggleSortOrder} 
                            style={styles.sortOrderButtonStyle}
                        >
                            <FontAwesome5 name={sortOrder === 'asc' ? "sort-amount-up" : "sort-amount-down"} size={24} color="black" />
                        <Text style={styles.sortOrderTextStyele}>
                        {`Sort Order: ${sortOrder === 'asc' ? 'Asc' : 'Desc'}`} 
                        </Text>
                    </TouchableOpacity>
                  </View>
                  </>
                )
               }
               <BookList books={sortedBooks} />
               </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    sortContainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:5,
        marginTop:10
    },
    sortOrderButtonStyle:{
        backgroundColor: "#ddd",
        borderRadius: 5,
        width: 150,
        alignItems: "center",
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        paddingVertical:5,
    },
    sortOrderTextStyele: {
        fontSize: 12,
        fontWeight: "bold"
    }
})

export default Favorites;
