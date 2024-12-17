import { Stack } from "expo-router";
import { QueryClientProvider } from "react-query";
import queryClient from "@/src/utils/queryClient";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/src/store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(screens)" options={{ headerShown: false }}/>
          </Stack>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}