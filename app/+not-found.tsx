import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
    </>
  );
}
