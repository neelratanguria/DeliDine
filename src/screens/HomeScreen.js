import {
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->,
          type ->
        }
      }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
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
            Current Locationss
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3 rounded-md">
          <MagnifyingGlassIcon color={"gray"} />
          <TextInput placeholder="Resturants and cuisines" />
        </View>
        <AdjustmentsVerticalIcon className="m-10" />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}

        <Categories />

        {/* Featured Row */}

        {featuredCategories?.map((category) => {
          console.log("---------------------------------------------------");
          console.log(JSON.stringify(category.restaurants[0]));
          
          return (
            <FeaturedRow
              id={category._id}
              key={category._id}
              title={category.name}
              description={category.short_description}
              featuredCategory="featured"
              restaurants={category.restaurants}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
