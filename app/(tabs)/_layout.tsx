import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarActiveTintColor: '#32A873',
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? '#32A873' : '#BBBBBB'}
            />
          ),
     
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="heart"
              size={24}
              color={focused ? '#32A873' : '#BBBBBB'}
            />
          ),
         
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    elevation: 5,        // Add shadow for Android
    backgroundColor: 'white',
    borderRadius: 30,    // Rounded corners
    shadowColor: '#000', // iOS shadow settings
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
});
