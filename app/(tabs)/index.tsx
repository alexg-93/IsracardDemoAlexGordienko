import { Text, View, StyleSheet,SafeAreaView ,ActivityIndicator} from 'react-native';
import { useFetchBooks } from '@/src/hooks/useFetchBooks';
import BookList from '@/src/Components/BookList';

export default function Home() {
  const { data, isLoading, error } = useFetchBooks();

  //TODO : handle error -> return error message


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      {isLoading && <ActivityIndicator color="black" size={'large'}/>}
      {data && <BookList books={data} />}
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
  }
});
