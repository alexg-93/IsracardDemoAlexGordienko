import { Stack } from 'expo-router';


export default function ScreensLayout() {
  return (
      <Stack>
        <Stack.Screen name="bookDetails" options={{ headerShown: false }} />
      </Stack>
  );

  
}

