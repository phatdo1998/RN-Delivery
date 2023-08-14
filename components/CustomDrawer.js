import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props) {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();
  const profile = useSelector((state) => state.profile);

  const handleSignOut = () => {
    signOut(auth).then(() =>
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      })
    );
  };

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <ImageBackground
          className=" h-60 justify-center items-center"
          source={{
            uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0",
          }}
        >
          <Image
            className="w-20 h-20 rounded-full"
            source={{
              uri: profile.image,
            }}
          />

          {profile.firtsName.length > 0 && profile.lastName.length > 0 ? (
            <>
              <Text
                numberOfLines={2}
                className="text-white font-bold mt-2 text-xl text-center px-10"
              >
                {profile.firtsName + " " + profile.lastName}
              </Text>
            </>
          ) : (
            <>
              <View className="w-8 h-8 bg-black rounded-full justify-center items-center mt-2">
                <TouchableOpacity onPress={() => navigation.navigate("user")}>
                  <FontAwesome5 name="pencil-alt" size={12} color="white" />
                </TouchableOpacity>
              </View>
            </>
          )}

          <Text className="text-white font-bold mt-2 text-base">
            {user.user.email}
          </Text>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity className="p-4 border-t border-gray-400 ">
        <TouchableOpacity
          onPress={handleSignOut}
          className="flex-row items-center"
        >
          <AntDesign name="arrowright" size={24} color="red" />
          <Text className="text-base font-bold ml-3">Sign Out</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
