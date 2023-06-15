import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import { urlFor } from "../../sanity";

const FeaturedRow = ({ title, description, featuredCategory, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            padding: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {
          restaurants?.map((restaurant) => (
            <ResturantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={[]}
            long={restaurant.longitude}
            lat={restaurant.latitude}
        />
          ))
        }
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
