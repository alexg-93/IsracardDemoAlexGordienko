import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"No books available"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default EmptyContent;
