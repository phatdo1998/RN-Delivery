import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { COLORS } from "../data";
import {
  setProfileFirtsName,
  setProfileImage,
  setProfileLastName,
  setProfilePhoneNumber,
} from "../redux/slices/profileSlice";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function UserScreen() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);
  const [keyboard, setKeyboard] = useState(true);
  const [firtsName, setFirtsName] = useState(profile.firtsName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [editable, setEditable] = useState(false);
  const [isSave, setIsSave] = useState(true);
  const [image, setImage] = useState(
    "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
  );

  const navigation = useNavigation();
  const handleChangeAvt = () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    };

    ImagePicker.launchImageLibraryAsync(options)
      .then((response) => {
        setImage(response.assets[0].uri);
        dispatch(setProfileImage(response.assets[0].uri));
        Alert.alert("Notification", "Update Avatar Success");
      })
      .catch((error) => {});
  };

  const handleEdit = () => {
    // setEditable(true);
    firstNameRef.current.focus();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboard(false);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboard(true);
    });
  });

  const handleUpdate = () => {
    Alert.alert("Notification", "Do you want to change the data?", [
      {
        text: "No",

        onPress: () => {
          return;
        },
      },
      {
        text: "Yes",
        onPress: () => {
          // setEditable(false);
          dispatch(setProfileFirtsName(firtsName));
          dispatch(setProfileLastName(lastName));
          dispatch(setProfilePhoneNumber(phoneNumber));
          dispatch(setProfileImage(image));
          setIsSave(true);

          setTimeout(() => {
            Alert.alert("Notification", "Change Data Success!");
          }, 500);
        },
      },
    ]);
  };

  const handlePress = () => {
    if (isSave == false) {
      Alert.alert(
        "Notification",
        "you haven't saved the data are you sure you want to exit? if you exit the result will be saved",
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
              navigation.goBack();
              dispatch(setProfileFirtsName(firtsName));
              dispatch(setProfileLastName(lastName));
              dispatch(setProfilePhoneNumber(phoneNumber));
              dispatch(setProfileImage(image));
              setIsSave(true);
            },
          },
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return (
    <View className="flex-1">
      <View className="mt-2 mx-4">
        <TouchableOpacity
          onPress={handlePress}
          className="p-1 bg-red-600 h-10 w-10 rounded-xl items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Pressable onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              marginTop: keyboard ? 20 : -163,
            }}
            className="justify-center items-center -mb-[65px] z-20 mt-16"
          >
            <View
              style={{ backgroundColor: COLORS.blur }}
              className="justify-center items-center w-32 h-32 rounded-full relative"
            >
              <Image
                className="w-full h-full rounded-full"
                source={{ uri: profile.image }}
              />
              <View className="w-8 h-8 bg-black rounded-full justify-center items-center absolute bottom-0 right-0">
                <TouchableOpacity onPress={handleChangeAvt}>
                  <FontAwesome5 name="pencil-alt" size={12} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="h-full rounded-tl-[50px] rounded-tr-[50px] bg-white">
            <View className="mt-20 mx-10 mb-5">
              <View className="flex-row justify-end items-center">
                {/* <TouchableOpacity
                  onPress={handleEdit}
                  className="flex-row w-20 h-10  justify-around border border-gray-600 items-center"
                >
                  <Text className="ml-2 text-base font-bold">Edit</Text>

                  <FontAwesome name="pencil" size={16} color="black" />
                </TouchableOpacity> */}
              </View>

              <Text className="text-lg font-bold">First Name</Text>
              <View className="flex-row items-center justify-center">
                <TextInput
                  ref={firstNameRef}
                  // editable={editable}
                  value={firtsName}
                  onChangeText={(text) => {
                    setFirtsName(text);
                    setIsSave(false);
                  }}
                  className="border w-full border-gray-600 rounded-3xl p-2 mt-2 pl-5 text-base text-black"
                  placeholder="First Name"
                />
              </View>
            </View>

            <View className="mb-5 mx-10">
              <Text className="text-lg font-bold">Last Name</Text>
              <View>
                <View className="flex-row items-center justify-center">
                  <TextInput
                    ref={lastNameRef}
                    // editable={editable}
                    value={lastName}
                    onChangeText={(text) => {
                      setLastName(text);
                      setIsSave(false);
                    }}
                    className="border w-full border-gray-600 rounded-3xl p-2 mt-2 pl-5 text-base text-black"
                    placeholder="Last Name"
                  />
                </View>
              </View>
            </View>

            <View className="mb-5 mx-10">
              <Text className="text-lg font-bold">Email</Text>
              <View className="flex-row items-center justify-center">
                <TextInput
                  editable={false}
                  value={user.user.email}
                  onChangeText={(text) => {
                    setEmail(text);
                    setIsSave(false);
                  }}
                  className="border w-full border-gray-600 rounded-3xl p-2 mt-2 pl-5 text-base text-black"
                  placeholder="Email..."
                />
              </View>
            </View>
            <View className="mb-5 mx-10">
              <Text className="text-lg font-bold">Phone Number</Text>
              <View className="flex-row items-center justify-center">
                <TextInput
                  keyboardType="numeric"
                  // editable={editable}
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                  className="border w-full border-gray-600 rounded-3xl p-2 mt-2 pl-5 text-base text-black"
                  placeholder="+84..."
                />
              </View>
            </View>
            <View className="justify-center items-center mt-10 ">
              <TouchableOpacity
                onPress={handleUpdate}
                style={{ backgroundColor: COLORS.accent }}
                className=" w-56 h-12 justify-center items-center rounded-full"
              >
                <Text className="text-lg font-bold text-white"> Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </View>
  );
}
