import React from "react";
import { Link } from "expo-router";
import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aura! app from future.</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}
