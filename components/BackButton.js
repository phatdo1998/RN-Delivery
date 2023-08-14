import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      className="p-1 bg-red-600 h-10 w-10 rounded-xl items-center justify-center"
    >
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
  );
}
