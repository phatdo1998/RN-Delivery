import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../data";
import { useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { useDispatch } from "react-redux";
import { addToCart, totalPrice } from "../redux/slices/cartSlice";
import { addToFavorite, removeFavorite } from "../redux/slices/favoriteSlice";

export default function FoodDetail() {
  const [modalVisible, setModalVisible] = useState(false);
  const { params } = useRoute();
  const dispatch = useDispatch();
  const [newParams, setNewParams] = useState({});
  const [isLike, setIsLike] = useState(false);

  return (
    <View className="px-4 flex-1 bg-white relative">
      <View className="justify-center items-center">
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View
            style={{ backgroundColor: COLORS.accent }}
            className="w-60  h-20 absolute top-80 left-24 justify-center items-center flex-row rounded-lg"
          >
            <AntDesign name="checkcircleo" size={24} color="black" />
            <Text className="text-base font-bold ml-2">
              Add successful products
            </Text>
            <View className="absolute rounded-tr-lg right-0 top-0 bg-red-600">
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View className="mt-2 flex-row justify-between items-center">
        <BackButton />
        <TouchableOpacity
          onPress={() => {
            setIsLike(!isLike);
            setNewParams({
              ...params,
              like: !isLike,
            });
            if (newParams.like) {
              dispatch(removeFavorite(newParams.id));
            } else {
              dispatch(addToFavorite({ ...params }));
            }
          }}
        >
          <AntDesign
            name={newParams.like ? "heart" : "hearto"}
            size={30}
            color={newParams.like ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-10 ">
        <Text className="text-4xl font-extrabold ">{params.name}</Text>
        <Text
          style={{ color: COLORS.accentRed }}
          className="text-3xl font-extrabold mt-2"
        >
          {params.price}$
        </Text>
      </View>
      <View className="mt-10 flex-row justify-between items-center h-72">
        <View className="justify-between">
          <View>
            <Text style={{ color: COLORS.lightGray }} className="text-base">
              Size
            </Text>
            <Text className="text-xl font-bold">{params.size}</Text>
          </View>
          <View className="my-10">
            <Text style={{ color: COLORS.lightGray }} className="text-base">
              Crust
            </Text>
            <Text className="text-xl font-bold">{params.crust}</Text>
          </View>
          <View>
            <Text style={{ color: COLORS.lightGray }} className="text-base">
              Delivery
            </Text>
            <Text className="text-xl font-bold">{params.delivery} min</Text>
          </View>
        </View>
        <View>
          <Image className="h-52 w-52" source={params.image} />
        </View>
      </View>
      <View className="mt-10">
        {params.ingredients.length > 0 && (
          <Text className="text-2xl font-bold">Ingredients</Text>
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {params.ingredients.map((item, index) => {
            return (
              <View
                className="w-20 h-20 mr-4 rounded-3xl justify-center items-center border border-gray-400 "
                key={index}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <Image className="w-10 h-10" source={item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{ backgroundColor: COLORS.accent }}
        className="absolute bottom-0 justify-center items-center w-full h-14 ml-4 rounded-full mb-3"
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(addToCart(params));
            setTimeout(() => {
              setModalVisible(!modalVisible);
            }, 400);
          }}
          className="flex-row justify-center items-center w-full h-full "
        >
          <Text className="text-lg font-bold mr-3">Add to cart</Text>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
