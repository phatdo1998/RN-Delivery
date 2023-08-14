import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, Categories } from "../data";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [selected, setSelected] = useState([0]);
  const navigation = useNavigation();
  const [search, setSearch] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const filterItems = (search) => {
    setTimeout(() => {
      const filtered = Categories.flatMap((category) =>
        category.items.filter((item) =>
          item.name.toLowerCase().includes(search?.toLowerCase())
        )
      );
      setFilteredItems(filtered);
    }, 600);
  };

  useEffect(() => {
    filterItems(search);
  }, [search]);

  return (
    <SafeAreaView className="flex-1 bg-white px-2 relative">
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

      <View className="justify-center items-center">
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View
            style={{ backgroundColor: COLORS.white }}
            className="w-10/12 h-2/3 absolute top-14 right-2 shadow-lg shadow-black  rounded-lg"
          >
            <View className="absolute -right-[5px] -top-[29px] z-10 ">
              <MaterialIcons name="arrow-drop-up" size={50} color="red" />
            </View>
            <View
              style={{ backgroundColor: "red" }}
              className="h-14 flex-row justify-between items-center "
            >
              <Text className="text-white text-xl font-bold ml-4">
                Notification
              </Text>
              <TouchableOpacity
                className="mr-1 p-1"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="close" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View className="justify-center items-center flex-1">
              <Image
                className="w-72 h-72"
                source={require("../assets/images/no_message_preview_rev_1.png")}
              />
            </View>
          </View>
        </Modal>
      </View>

      <View className="mt-1 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text
          style={{ color: COLORS.accent }}
          className="text-3xl font-extrabold"
        >
          Delivery
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={40}
            color={COLORS.accentRed}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ backgroundColor: "#f6f8fa" }}
        className="flex-row items-center w-full h-14 rounded-full mt-10"
      >
        <View className="ml-5 mr-4">
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <TextInput
          value={search}
          onChangeText={(text) => {
            text.length === 0 ? setSearch(null) : setSearch(text);
          }}
          className="text-base pr-20"
          placeholder="Search..."
        />
      </View>
      <View>
        {filteredItems.length === 0 ? (
          <>
            <Text className="text-2xl font-bold mt-5">Category</Text>
            <FlatList
              horizontal
              data={Categories}
              renderItem={({ item, index }) => {
                const isActive = index == selected;
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => setSelected(index)}
                      style={{
                        backgroundColor: isActive
                          ? COLORS.accent
                          : COLORS.white,
                      }}
                      className="shadow-md shadow-gray-500 border border-gray-300 w-28 h-44 bg-red-500 ml-4 rounded-3xl justify-between items-center mt-7 py-3"
                    >
                      <Image className="w-16 h-16" source={item.image} />
                      <Text className="font-bold text-base">{item.name}</Text>
                      <View
                        style={{
                          backgroundColor: isActive
                            ? COLORS.white
                            : COLORS.accentRed,
                        }}
                        className="p-1 bg-red-600 rounded-full justify-center items-center"
                      >
                        <MaterialIcons
                          name="arrow-right"
                          size={24}
                          color={isActive ? "black" : "white"}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <View className="">
              <Text className=" text-2xl font-bold mt-5 mb-4">Popular</Text>
              <FlatList
                className="h-[315px]"
                showsVerticalScrollIndicator={false}
                data={Categories[selected].items}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigation.navigate("Detail", item)}
                      className="mb-3 h-[150px] flex-row items-center overflow-hidden justify-between rounded-3xl border border-gray-400"
                    >
                      <View>
                        <View className="flex-row items-center mt-4 ml-3">
                          <FontAwesome5
                            name="crown"
                            size={16}
                            color={
                              item.isTopOfTheWeek
                                ? COLORS.accent
                                : COLORS.lightGray
                            }
                          />
                          <Text className="mx-1">Top of the week</Text>
                        </View>
                        <Text
                          numberOfLines={1}
                          className="text-2xl font-bold mx-4 mt-3"
                        >
                          {item.name}
                        </Text>
                        <Text className="mx-4">{item.weight}</Text>
                        <View className="flex-row items-center">
                          <View
                            style={{ backgroundColor: COLORS.accent }}
                            className="bg-blue-700 h-12 w-24 justify-center items-center rounded-tr-xl mt-4"
                          >
                            <Ionicons name="add" size={24} color="black" />
                          </View>
                          <View className="flex-row items-center mt-4 ml-5">
                            <AntDesign
                              name="star"
                              size={24}
                              color={COLORS.accent}
                            />
                            <Text className="text-base font-bold ml-1">
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Image className="w-24 h-24 mr-4" source={item.image} />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <>
            <Text className="text-2xl font-bold mt-5">Result</Text>
            <ScrollView
              className="mt-5 h-[73%]"
              showsVerticalScrollIndicator={false}
            >
              {filteredItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("Detail", item)}
                    className="mb-3 h-[150px] flex-row items-center overflow-hidden justify-between rounded-3xl border border-gray-400"
                  >
                    <View>
                      <View className="flex-row items-center mt-4 ml-3">
                        <FontAwesome5
                          name="crown"
                          size={16}
                          color={
                            item.isTopOfTheWeek == true
                              ? COLORS.accent
                              : COLORS.lightGray
                          }
                        />
                        <Text className="mx-1">Top of the week</Text>
                      </View>
                      <Text
                        numberOfLines={1}
                        className="text-2xl font-bold mx-4 mt-3"
                      >
                        {item.name}
                      </Text>
                      <Text className="mx-4">{item.weight}</Text>
                      <View className="flex-row items-center">
                        <View
                          style={{ backgroundColor: COLORS.accent }}
                          className="bg-blue-700 h-12 w-24 justify-center items-center rounded-tr-xl mt-4"
                        >
                          <Ionicons name="add" size={24} color="black" />
                        </View>
                        <View className="flex-row items-center mt-4 ml-5">
                          <AntDesign
                            name="star"
                            size={24}
                            color={COLORS.accent}
                          />
                          <Text className="text-base font-bold ml-1">
                            {item.rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Image className="w-24 h-24 mr-4" source={item.image} />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
