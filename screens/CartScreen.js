import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { decrement, increasement, removeCart } from "../redux/slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const price = useSelector((state) =>
    state.cart.map((item) => {
      return item.qty * item.price;
    })
  );
  const totalPrice = price.reduce((init, item) => {
    return (init = init + item);
  }, 0);

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white px-4 relative">
      <View>
        <Text className="text-2xl font-bold text-center mt-3">My Cart</Text>
        <Text className=" text-center"> {cart.length} items</Text>
      </View>

      <View className="mt-2 absolute left-0 ml-4">
        <BackButton />
      </View>

      {cart.length < 1 ? (
        <>
          <View className="justify-center items-center flex-1">
            <Image
              className="w-96 h-96"
              source={require("../assets/images/empty-cart.png")}
            />
          </View>
        </>
      ) : (
        <>
          <Text className="mt-10 text-xl font-semibold">Items</Text>

          <View className="h-3/5">
            <ScrollView className="mt-6">
              {cart.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="relative overflow-hidden mb-4 h-24 flex-row justify-between items-center rounded-xl px-4 border border-gray-400"
                  >
                    <View className="absolute right-0 top-0 bg-red-500 rounded-bl-lg h-[22px] w-[22px] justify-center items-center">
                      <TouchableOpacity
                        onPress={() => dispatch(removeCart(item.id))}
                      >
                        <Ionicons name="remove" size={22} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View className="rounded-full h-20 w-20 justify-center items-center border border-yellow-400 overflow-hidden">
                      <Image className="w-14 h-14 " source={item.image} />
                    </View>
                    <View className="flex-1 ml-4">
                      <Text
                        numberOfLines={2}
                        className="text-lg font-bold text-center"
                      >
                        {item.name}
                      </Text>
                      <Text className="font-semibold text-center mt-1">
                        {item.price}$
                      </Text>
                    </View>
                    <View className="flex-row flex-1 justify-end items-center">
                      <TouchableOpacity
                        disabled={item.qty == 0}
                        onPress={() => {
                          dispatch(decrement(item.id));
                        }}
                        className={`w-8 h-8 ${
                          item.qty == 0 && `opacity-50`
                        } justify-center items-center rounded-full bg-red-600`}
                      >
                        <Ionicons name="ios-remove" size={18} color="black" />
                      </TouchableOpacity>
                      <Text className="mx-2 font-bold text-base">
                        {item.qty}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(increasement(item.id));
                        }}
                        className="w-8 h-8 bg-red-600 justify-center items-center rounded-full"
                      >
                        <Ionicons name="add" size={18} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-lg font-bold">Total: </Text>
            <Text className="text-lg font-bold text-red-600">
              {totalPrice}$
            </Text>
          </View>
          <View className="flex-row justify-between items-center my-1">
            <Text className="text-lg font-bold ">Delivery: </Text>
            <Text className="text-lg font-bold ">0$ </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold ">Payment:</Text>
            <Text className="text-lg font-bold ">{totalPrice}$ </Text>
          </View>
          <View className="mt-3">
            <TouchableOpacity
              disabled={totalPrice === 0}
              onPress={() => navigation.navigate("Payment", totalPrice)}
              style={{
                backgroundColor:
                  totalPrice > 0 ? "rgb(220 38 38)" : "rgb(248 113 113)",
              }}
              className="w-full py-3 rounded-full justify-center items-center"
            >
              <Text className="text-lg font-bold text-white">Place Order</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
