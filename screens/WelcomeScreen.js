import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../data";

const slides = [
  {
    id: 1,
    title: "Welcome to Delivery",
    description:
      "Welcome to Delivery. Here we have all the dishes you need with the highest quality and hygiene certification. Nice to serve you.",
    image: require("../assets/images/onboardScreen1.png"),
  },
  {
    id: 2,
    title: "Pick The Best Food",
    description:
      "Here we have everything you need. You just need to choose the food and place your order and we will deliver it to you quickly.",
    image: require("../assets/images/onboardScreen2.png"),
  },
  {
    id: 3,
    title: "Fast Delivery",
    description:
      "We provide the fastest delivery system. We will reach food in your home within 30 minites.",
    image: require("../assets/images/onboardScreen3.png"),
  },
];

export default function WelcomeScreen() {
  const buttonLabel = (label) => {
    return (
      <View className="p-3">
        <Text className="font-bold text-base">{label}</Text>
      </View>
    );
  };

  const navigation = useNavigation();

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View className="items-center">
            <Image
              resizeMode="contain"
              className="w-96 h-96"
              source={item.image}
            />
            <Text
              style={{ color: COLORS.accent }}
              className="text-4xl font-bold mt-10"
            >
              {item.title}
            </Text>
            <Text
              style={{ marginHorizontal: 10 }}
              className="mt-16 text-lg font-semibold leading-6 text-gray-500 text-center"
            >
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: "red",
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      onDone={() => navigation.replace("Login")}
    />
  );
}
