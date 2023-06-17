import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
  ArrowLeftIcon,
  
} from "react-native-heroicons/outline";


const RestaurantScreen = ({ route }) => {
  const navigation = useNavigation();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
    name,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(imgUrl);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className=" h-56 w-max p-4 bg-gray-300"
        />
        <TouchableOpacity
        onPress={navigation.goBack}
         className="absolute top-8 left-5 bg-white rounded-full p-1">
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
