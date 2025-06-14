import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-500">
      <Text className="text-white text-2xl font-bold">Welcome to the app</Text>
    </SafeAreaView>
  );
}
