import { View, StyleSheet,SafeAreaView ,ActivityIndicator} from 'react-native';
import { useState , useCallback } from 'react';
import { useFetchBooks } from '@/src/hooks/useFetchBooks';
import BookList from '@/src/Components/BookList';
import SearchBook from '@/src/Components/SearchBook';
import { useFilterBooks } from '@/src/hooks/useFilterBooks';
import { BookTyped } from '@/src/services/harryPotterBooks.types';

export default function Home() {

  const { data, isLoading, error} = useFetchBooks();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {filteredBooks} = useFilterBooks({books:data as BookTyped[],searchValue:searchTerm,filterBy:'title'});

  const handleChangeText = useCallback((text: string) => {
    setSearchTerm(text);
  },[setSearchTerm])



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      {isLoading && <ActivityIndicator color="black" size={'large'} style={styles.loadingStyle}/>}
      {data && data.length > 0 && (
          <>
            <SearchBook 
              placeholder="Search Book by title" 
              onChangeText={handleChangeText} 
              debounceTime={400}
            />
            <BookList books={filteredBooks} />
          </>
        )}
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex:1,
  },
 loadingStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
 },
});
