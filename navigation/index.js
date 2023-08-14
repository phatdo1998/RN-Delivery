import React, { Children, useEffect, useRef } from "react";
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
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../data";
import CustomDrawer from "../components/CustomDrawer";
import FavoriteScreen from "../screens/FavoriteScreen";
import * as Animatable from "react-native-animatable";
import WelcomeScreen from "../screens/WelcomeScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const iconName = [
  {
    name: "home",
    component: () => <StackNav />,
  },
  {
    name: "shopping-cart",
    component: CartScreen,
  },
  {
    name: "heart",
    component: FavoriteScreen,
  },
  {
    name: "user",
    component: UserScreen,
  },
];

const ButtonTab = (props) => {
  const viewRef = useRef(null);
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0 },
        1: { scale: 1 },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1 },
        1: { scale: 1 },
      });
    }
  }, [focused]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Animatable.View
          style={{
            backgroundColor: focused ? COLORS.accent : COLORS.white,
            paddingTop: 4,
            paddingBottom: 4,
            paddingHorizontal: focused ? 20 : 4,
            borderRadius: 10,
          }}
          animation={"zoomIn"}
          duration={800}
          ref={viewRef}
        >
          <Entypo
            name={item.name}
            size={26}
            color={focused ? COLORS.accentPink : COLORS.lightGray}
          />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

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
              return <AntDesign name="shoppingcart" size={24} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color }) => {
              return <AntDesign name="user" size={24} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 60,
          shadowColor: "#000",
          shadowOffset: {
            width: 100,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 0,
          borderTopColor: COLORS.accent,
        },
      }}
    >
      {iconName.map((item) => {
        const Component = item.component;
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
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
          >
            {() => <Component />}
          </Tab.Screen>
        );
      })}
      {/* <Tab.Screen
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
      /> */}
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
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};
