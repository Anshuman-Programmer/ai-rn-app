import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Aora</Text>
      <Link href={"/profile" as any}>
        <Text>Go to profile</Text>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}
