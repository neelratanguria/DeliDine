import { View, Image, Text, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4">
        <Image
          source={{
            uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-grow">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3 rounded-md">
          <MagnifyingGlassIcon color={"gray"} />
          <TextInput placeholder="Resturants and cuisines"/>
        </View>
        <AdjustmentsVerticalIcon className="m-10"/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
