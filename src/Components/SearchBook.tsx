import React,{useState,useCallback, useEffect} from 'react';
import { StyleSheet, View ,TextInput,Dimensions, TextInputProps} from 'react-native';
import { debounce } from 'lodash';


interface InputProps {
    placeholder?: string;
    debounceTime?: number;
    onChangeText: (value: string) => void
  }

const { width } = Dimensions.get('window');

const SearchBook = ({placeholder="Search Book..",debounceTime=300,onChangeText,...props}:InputProps & TextInputProps) => {

const [inputValue,setInputValue] = useState<string>('');

const debounceHandler = useCallback(
  debounce((text:string)=>{
    onChangeText(text)
  },debounceTime)
  ,[debounceTime,onChangeText]);

const handleInputChange = (text:string) => {
  setInputValue(text);
  debounceHandler(text);
}

useEffect(() => {

  return () => {
    debounceHandler.cancel(); // cleanup debounce
  }
}, [debounceHandler]);


    return (
        <View style={styles.containerStyle}>
            <TextInput
                style={styles.inputStyle}
                placeholder={placeholder}
                value={inputValue}
                onChangeText={handleInputChange}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        width: width*0.7,
        backgroundColor:"white",
        borderRadius:10,
        marginVertical:10,
        alignSelf:'center',
         // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // Shadow for Android
        elevation: 5,
    },
    inputStyle:{
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius:10,
        paddingHorizontal:10,
        height:40
    }
})

export default SearchBook;
