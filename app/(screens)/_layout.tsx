import { Stack } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="bookDetails"
        options={({ navigation }) => ({
          title: 'Book Details',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{'Back'}</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
