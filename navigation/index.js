import React, { Children } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FoodDetail from "../screens/FoodDetail";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setUser } from "../redux/slices/userSlice";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "../screens/UserScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { COLORS } from "../data";
import CustomDrawer from "../components/CustomDrawer";
import FavoriteScreen from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// const iconName = [
//   {
//     name: "home",
//     component: () => <StackNav />,
//   },
//   {
//     name: "shopping-cart",
//     component: CartScreen,
//   },
//   {
//     name: "user",
//     component: UserScreen,
//   },
// ];

// const ButtonTab = (props) => {
//   const { item, onPress } = props;
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <TouchableOpacity onPress={onPress}>
//         <Entypo name={item.name} size={24} color={"blue"} />
//       </TouchableOpacity>
//     </View>
//   );
// };

export default function Navigation() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    dispatch(setUser(user));
  });

  if (user) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 16,
          },
          drawerActiveBackgroundColor: "red",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen
          name="Main"
          component={BottomTab}
          options={{
            drawerIcon: ({ color }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{
            drawerIcon: ({ color }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color }) => {
              return <AntDesign name="home" size={24} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
}

const BottomTab = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.accent,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 60,
          shadowColor: "red",
          shadowOffset: {
            width: 1,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 16,
        },
      }}
    >
      {/* {iconName.map((item) => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Entypo
                    name={item.name}
                    size={24}
                    color={focused ? "red" : "gray"}
                  />
                );
              },
              tabBarButton: (props) => {
                return <ButtonTab {...props} item={item} />;
              },
            }}
          />
        );
      })} */}
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name="home" size={30} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  position: "relative",
                }}
              >
                {cart.length > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      right: -10,
                      top: -14,
                      backgroundColor: "blue",
                      borderRadius: 100,
                      width: 18,
                      height: 18,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {cart.length}
                    </Text>
                  </View>
                )}

                <Entypo
                  name="shopping-cart"
                  size={30}
                  color={focused ? "red" : "gray"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo name="heart" size={30} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Detail" component={FoodDetail} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};
