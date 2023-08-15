// import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { Formik } from "formik";
// import React, { useEffect, useState } from "react";
// import {
//   Image,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import * as Yup from "yup";
// import Loading from "../components/Loading";
// import { auth } from "../config/firebase";
// import { COLORS } from "../data";

// export default function LoginScreen() {
//   const [security, setSecurity] = useState(true);
//   const [securityConfirm, setSecurityConfirm] = useState(true);
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [keyboardStatus, setKeyboardStatus] = useState(true);

//   const registerValidationScheme = Yup.object().shape({
//     firsname: Yup.string().required("Please enter your firsname!"),
//     lastname: Yup.string().required("Please enter your lastname!"),
//     email: Yup.string()
//       .email("Email Invalid")
//       .required("Please enter your email!"),
//     password: Yup.string()
//       .min(8, ({ min }) => `Please enter at least ${min} characters`)
//       .required("Please enter a password")
//       .matches("(?=.*?[A-Z])", "UpperCase at least 1 character"),
//     confirmPassword: Yup.string()
//       .required("Please confirm your password")
//       .oneOf([Yup.ref("password"), null], "Passwords don't match."),
//   });

//   useEffect(() => {
//     Keyboard.addListener("keyboardDidShow", () => {
//       setKeyboardStatus(false);
//     });
//     Keyboard.addListener("keyboardDidHide", () => {
//       setKeyboardStatus(true);
//     });
//   }, []);

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//         confirmPassword: "",
//       }}
//       onSubmit={async (values) => {
//         if (values) {
//           try {
//             setLoading(true);
//             await createUserWithEmailAndPassword(
//               auth,
//               values.email,
//               values.password
//             );
//             setLoading(false);
//           } catch (error) {
//             alert(error.message);
//             setLoading(false);
//           }
//         }
//       }}
//       validationSchema={registerValidationScheme}
//     >
//       {({
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         values,
//         errors,
//         touched,
//         isValid,
//       }) => (
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           className="flex-1 bg-white px-4"
//         >
//           <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
//           <Pressable onPress={() => Keyboard.dismiss()}>
//             <View
//               style={{
//                 height: keyboardStatus ? "33%" : 170,
//               }}
//               className="h-2/6 justify-center items-center "
//             >
//               <Image
//                 className="w-72 h-72"
//                 source={{
//                   uri: "https://static.vecteezy.com/system/resources/previews/011/468/905/original/express-fast-delivery-order-scooter-motorcycle-bike-with-box-icon-logo-free-vector.jpg",
//                 }}
//               />
//             </View>
//             <View className=" mb-10 justify-center items-center ">
//               <Text
//                 style={{ color: COLORS.accent }}
//                 className="text-5xl font-bold text-center"
//               >
//                 Register
//               </Text>
//             </View>

//             <View className="">
//               <View
//                 style={{ backgroundColor: COLORS.blur }}
//                 className="py-4 px-3 rounded-full flex-row items-center "
//               >
//                 <FontAwesome name="user-circle-o" size={26} color="black" />
//                 <TextInput
//                   onChangeText={handleChange("email")}
//                   onBlur={handleBlur("email")}
//                   value={values.email}
//                   className="ml-3 pr-10 text-base w-9/12"
//                   placeholder="Enter your email..."
//                 />
//               </View>

//               <View className="h-8  ml-3">
//                 {errors.email && touched.email ? (
//                   <Text style={{ color: "red" }} className=" text-base mb-3">
//                     {errors.email}
//                   </Text>
//                 ) : (
//                   <Text className=" text-base"></Text>
//                 )}
//               </View>

//               <View
//                 style={{ backgroundColor: COLORS.blur }}
//                 className="py-4 px-3 rounded-full flex-row items-center  rela"
//               >
//                 <TouchableOpacity
//                   onPress={() => setSecurity(!security)}
//                   className="absolute right-4"
//                 >
//                   <Ionicons
//                     name={security ? "eye-off-sharp" : "eye"}
//                     size={24}
//                     color="black"
//                   />
//                 </TouchableOpacity>
//                 <FontAwesome name="lock" size={26} color="black" />
//                 <TextInput
//                   onChangeText={handleChange("password")}
//                   onBlur={handleBlur("password")}
//                   value={values.password}
//                   secureTextEntry={security}
//                   className="ml-3 pr-14 text-base w-9/12"
//                   placeholder="Enter your password..."
//                 />
//               </View>

//               <View className="h-8  ml-3">
//                 {errors.password && touched.password ? (
//                   <Text style={{ color: "red" }} className=" text-base mb-3">
//                     {errors.password}
//                   </Text>
//                 ) : (
//                   <Text className=" text-base"></Text>
//                 )}
//               </View>

//               <View
//                 style={{ backgroundColor: COLORS.blur }}
//                 className="py-4 px-3 rounded-full flex-row items-center relative"
//               >
//                 <TouchableOpacity
//                   onPress={() => setSecurityConfirm(!securityConfirm)}
//                   className="absolute right-4"
//                 >
//                   <Ionicons
//                     name={securityConfirm ? "eye-off-sharp" : "eye"}
//                     size={24}
//                     color="black"
//                   />
//                 </TouchableOpacity>
//                 <FontAwesome name="lock" size={26} color="black" />
//                 <TextInput
//                   onChangeText={handleChange("confirmPassword")}
//                   onBlur={handleBlur("confirmPassword")}
//                   value={values.confirmPassword}
//                   secureTextEntry={securityConfirm}
//                   className="ml-3 pr-14 text-base w-9/12"
//                   placeholder="Confirm password..."
//                 />
//               </View>

//               <View className="h-8  ml-3">
//                 {errors.confirmPassword && touched.confirmPassword ? (
//                   <Text style={{ color: "red" }} className=" text-base mb-3">
//                     {errors.confirmPassword}
//                   </Text>
//                 ) : (
//                   <Text className=" text-base"></Text>
//                 )}
//               </View>

//               {loading ? (
//                 <>
//                   <TouchableOpacity className="mt-20 mx-10 items-center">
//                     <Loading />
//                   </TouchableOpacity>
//                 </>
//               ) : (
//                 <>
//                   <TouchableOpacity
//                     onPress={handleSubmit}
//                     disabled={!isValid}
//                     style={{
//                       backgroundColor: isValid ? COLORS.accent : "#ccc",
//                     }}
//                     className="mt-10 justify-center mx-10 items-center py-4 rounded-full"
//                   >
//                     <Text className="font-bold text-lg">Register</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//               <View className="flex-row justify-center items-center mt-10">
//                 <Text className="text-base font-semibold">
//                   Do you already have an accoun?{" "}
//                 </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//                   <Text className="text-base font-semibold underline">
//                     Login now!
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Pressable>
//         </KeyboardAvoidingView>
//       )}
//     </Formik>
//   );
// }

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import Loading from "../components/Loading";
import { auth } from "../config/firebase";
import { COLORS } from "../data";

export default function LoginScreen() {
  const [security, setSecurity] = useState(true);
  const [securityConfirm, setSecurityConfirm] = useState(true);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(true);

  const registerValidationScheme = Yup.object().shape({
    email: Yup.string()
      .email("Email Invalid")
      .required("Please enter your email!"),
    password: Yup.string()
      .min(8, ({ min }) => `Please enter at least ${min} characters`)
      .required("Please enter a password")
      .matches("(?=.*?[A-Z])", "UpperCase at least 1 character"),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords don't match."),
  });

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(false);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(true);
    });
  }, []);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values) => {
        if (values) {
          try {
            setLoading(true);
            await createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            ).then((user) => {
              return;
            });

            setLoading(false);
          } catch (error) {
            alert(error.message);
            setLoading(false);
          }
        }
      }}
      validationSchema={registerValidationScheme}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 bg-white px-4"
        >
          <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
          <Pressable onPress={() => Keyboard.dismiss()}>
            <View
              style={{ height: keyboardStatus ? "33%" : 170 }}
              className="justify-center items-center "
            >
              <Image
                className="w-72 h-72"
                source={require("../assets/images/logo.png")}
              />
            </View>
            <View className="mb-10 justify-center items-center ">
              <Text
                style={{ color: COLORS.accent }}
                className="text-5xl font-bold text-center"
              >
                Register
              </Text>
            </View>

            <View className="">
              <View
                style={{ backgroundColor: COLORS.blur }}
                className=" px-3 rounded-full flex-row items-center "
              >
                <FontAwesome name="user-circle-o" size={26} color="black" />
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  className="ml-3 pr-10 text-base w-9/12 py-4"
                  placeholder="Enter your email..."
                />
              </View>

              <View className="h-8 ml-3">
                {errors.email && touched.email ? (
                  <Text style={{ color: "red" }} className=" text-base mb-3">
                    {errors.email}
                  </Text>
                ) : (
                  <Text className=" text-base"></Text>
                )}
              </View>

              <View
                style={{ backgroundColor: COLORS.blur }}
                className=" px-3 rounded-full flex-row items-center  rela"
              >
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
                  className="ml-3 pr-14 text-base w-9/12 py-4"
                  placeholder="Enter your password..."
                />
              </View>

              <View className="h-8 ml-3">
                {errors.password && touched.password ? (
                  <Text style={{ color: "red" }} className=" text-base mb-3">
                    {errors.password}
                  </Text>
                ) : (
                  <Text className=" text-base"></Text>
                )}
              </View>

              <View
                style={{ backgroundColor: COLORS.blur }}
                className="px-3 rounded-full flex-row items-center relative"
              >
                <TouchableOpacity
                  onPress={() => setSecurityConfirm(!securityConfirm)}
                  className="absolute right-4"
                >
                  <Ionicons
                    name={securityConfirm ? "eye-off-sharp" : "eye"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <FontAwesome name="lock" size={26} color="black" />
                <TextInput
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={securityConfirm}
                  className="ml-3 pr-14 text-base w-9/12 py-4"
                  placeholder="Confirm password..."
                />
              </View>

              <View className="h-8 ml-3">
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Text style={{ color: "red" }} className=" text-base mb-3">
                    {errors.confirmPassword}
                  </Text>
                ) : (
                  <Text className=" text-base"></Text>
                )}
              </View>

              {loading ? (
                <>
                  <TouchableOpacity className="mt-[100px] mx-10 items-center">
                    <Loading />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={!isValid}
                    style={{
                      backgroundColor: isValid ? COLORS.accent : "#ccc",
                    }}
                    className="bg-red-500 mt-10 justify-center mx-10 items-center py-4 rounded-full"
                  >
                    <Text className="font-bold text-lg">Register</Text>
                  </TouchableOpacity>
                </>
              )}
              <View className="flex-row justify-center items-center mt-10">
                <Text className="text-base font-semibold">
                  Do you already have an accoun?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="text-base font-semibold underline">
                    Login now!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}
