import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { COLORS } from "../data";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/slices/cartSlice";

export default function PaymentScreen() {
  const { params } = useRoute();
  const [paymentSelected, setPaymentSelected] = useState("Visa Card");
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePay = () => {
    Alert.alert(
      "Notification",
      `Are you sure you want to pay by ${paymentSelected}?`,
      [
        {
          text: "No",

          onPress: () => {
            return;
          },
        },
        {
          text: "Yes",
          onPress: () => {
            setTimeout(() => {
              setModalVisible(!modalVisible);
            }, 1000);
          },
        },
      ]
    );
  };

  const pament = [
    {
      id: 1,
      name: "Visa Card",
      image: require("../assets/images/visa-payment-card1873.jpg"),
    },
    {
      id: 2,
      name: "Master Card",
      image: require("../assets/images/mastercard.png"),
    },
    {
      id: 3,
      name: "Paypal",
      image: require("../assets/images/paypal.png"),
    },
    {
      id: 4,
      name: "Momo",
      image: require("../assets/images/momo.png"),
    },
  ];

  return (
    <View
      style={{ backgroundColor: COLORS.accent }}
      className="flex-1 bg-white relative"
    >
      <View className="mx-4 mt-2">
        <BackButton />
      </View>
      <View className="mt-10">
        <Text className="text-3xl font-bold text-center text-white">
          Payment Method
        </Text>
      </View>

      <View className="justify-center items-center">
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View
            style={{ backgroundColor: COLORS.accent }}
            className="w-60 h-56 absolute top-80 left-24 justify-center items-center rounded-lg"
          >
            <View className="w-20 h-20 mb-3 bg-green-600 items-center justify-center rounded-full">
              <AntDesign name="check" size={40} color="white" />
            </View>
            <View className="">
              <Text className="text-xl font-bold text-green-600">
                Payment success
              </Text>
            </View>
            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Main");
                  dispatch(emptyCart());
                  setModalVisible(!modalVisible);
                }}
                className="w-32 h-10 bg-red-600 rounded-full justify-center items-center"
              >
                <Text className="text-white text-base font-bold">
                  Go to Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View className=" bg-white flex-1 rounded-tl-[50px] rounded-tr-[50px] mt-10 justify-between">
        <Text
          style={{ color: COLORS.accentPink }}
          className="mt-5 ml-7 text-base font-semibold"
        >
          Select a payment method
        </Text>
        <View className="px-4 ml-10 mt-5 mb-16 ">
          {pament.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setPaymentSelected(item.name);
                }}
                className="flex-row items-center justify-between"
              >
                <View className="flex-row items-center">
                  <Image className="w-20 h-20" source={item.image} />
                  <Text className="text-xl font-bold ml-5">{item.name}</Text>
                </View>

                <View className="w-5 h-5 rounded-full border-2 border-gray-700 mr-5 justify-center items-center">
                  <View
                    style={{
                      backgroundColor:
                        paymentSelected === item.name
                          ? COLORS.accentRed
                          : COLORS.white,
                    }}
                    className="w-[16px] h-[16px] rounded-full"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{ backgroundColor: COLORS.accent }}
          className="h-28 rounded-tl-[50px] rounded-tr-[50px] flex-row items-center justify-between px-4"
        >
          <View className="ml-4">
            <TouchableOpacity
              onPress={handlePay}
              className="flex-row items-center justify-center w-32 h-12 bg-red-500 rounded-full"
            >
              <Text className="text-white text-xl font-bold mr-2">Pay</Text>
              <View className="relative top-[2px]">
                <FontAwesome5 name="arrow-right" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="h-10 px-3 bg-red-600 justify-center items-center rounded-full">
            <Text className="font-bold text-2xl text-white ">{params}$</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
