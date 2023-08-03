import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../data";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import Loading from "../components/Loading";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [security, setSecurity] = useState(true);
  const [loading, setLoading] = useState(false);

  const loginValidationScheme = Yup.object().shape({
    email: Yup.string()
      .email("Email Invalid")
      .required("Please enter your email!"),
    password: Yup.string()
      .min(8, ({ min }) => `Please enter at least ${min} characters`)
      .required("Please enter a password")
      .matches("(?=.*?[A-Z])", "UpperCase at least 1 character"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        if (values) {
          try {
            setLoading(true);
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            setLoading(false);
          } catch (error) {
            alert("Incorrect email or password");
            setLoading(false);
          }
        }
      }}
      validationSchema={loginValidationScheme}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 bg-white px-4"
        >
          <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
          <View className="h-2/6 justify-center items-center ">
            <Image
              className="w-72 h-72"
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/011/468/905/original/express-fast-delivery-order-scooter-motorcycle-bike-with-box-icon-logo-free-vector.jpg",
              }}
            />
          </View>
          <Text
            style={{ color: COLORS.accent }}
            className="text-5xl font-bold text-center"
          >
            Login
          </Text>

          <View className="mt-20 ">
            <View className="bg-red-500 py-4 px-3 rounded-full flex-row items-center ">
              <FontAwesome name="user-circle-o" size={26} color="black" />
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                className="ml-3 pr-10 text-base"
                placeholder="Enter your email..."
              />
            </View>
            <View className="h-8  ml-3">
              {errors.email && touched.email ? (
                <Text style={{ color: "red" }} className=" text-base mb-3">
                  {errors.email}
                </Text>
              ) : (
                <Text className=" text-base"></Text>
              )}
            </View>
            <View className="bg-red-500 py-4 px-3 rounded-full flex-row items-center relative">
              <TouchableOpacity
                onPress={() => setSecurity(!security)}
                className="absolute right-4"
              >
                <Ionicons
                  name={security ? "eye-off-sharp" : "eye"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <FontAwesome name="lock" size={26} color="black" />
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={security}
                className="ml-3 pr-14 text-base"
                placeholder="Enter your password..."
              />
            </View>
            <View className="h-8  ml-3">
              {errors.password && touched.password ? (
                <Text style={{ color: "red" }} className=" text-base mb-3">
                  {errors.password}
                </Text>
              ) : (
                <Text className=" text-base"></Text>
              )}
            </View>
            <View className="w-full justify-center items-end">
              <TouchableOpacity className=" mt-3 w-40 items-center">
                <Text className="text-right font-bold underline text-base">
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <>
                <TouchableOpacity className="mt-20 mx-10 items-center">
                  <Loading />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={{ backgroundColor: isValid ? COLORS.accent : "#ccc" }}
                  className="bg-red-500 mt-10 justify-center mx-10 items-center py-4 rounded-full"
                >
                  <Text className="font-bold text-lg">Login</Text>
                </TouchableOpacity>
              </>
            )}

            <View className="flex-row justify-center items-center mt-10">
              <Text className="text-base font-semibold">
                Don't have account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="text-base font-semibold underline">
                  Register now!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}
