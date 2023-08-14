import { View, Text, Animated, Image, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/slices/favoriteSlice";
import { useNavigation } from "@react-navigation/native";

export default function FavoriteScreen() {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <View className="px-4 flex-1 bg-white">
      <View className="flex-row justify-between items-center mt-2">
        <BackButton />
      </View>
      {favorite.length > 0 ? (
        <>
          <Text className="text-center text-3xl font-bold mt-5">
            My Favorites
          </Text>
          <View className="mt-7 h-5/6">
            <ScrollView showsVerticalScrollIndicator={false}>
              {favorite.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("Detail", item)}
                  >
                    <View className="border border-gray-500 h-24 rounded-xl flex-row mb-4 relative overflow-hidden items-center">
                      <View className="absolute -right-1 top-0 bg-red-600 p-[2px] rounded-bl-xl rounded-tr-2xl justify-center items-center ">
                        <TouchableOpacity
                          onPress={() => dispatch(removeFavorite(item.id))}
                          className="relative top-1"
                        >
                          <Ionicons name="remove" size={28} color="black" />
                        </TouchableOpacity>
                      </View>
                      <View className="rounded-full h-20 w-20 justify-center items-center border border-yellow-400 overflow-hidden ml-5">
                        <Image className="w-14 h-14" source={item.image} />
                      </View>
                      <View className="w-[50%] justify-center space-y-1 ">
                        <Text
                          numberOfLines={2}
                          className="text-lg font-bold text-center leading-5"
                        >
                          {item.name}
                        </Text>
                        <Text className="text-base font-semibold text-center">
                          {item.price}$
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </>
      ) : (
        <>
          <View className="flex-1 justify-center items-center">
            <Image
              className="w-96 h-96"
              source={require("../assets/images/empty-favorites_preview_rev_1.png")}
            />
          </View>
        </>
      )}
    </View>
  );
}
