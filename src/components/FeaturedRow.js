import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
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
        {/* Resturant cards */}
        <ResturantCard
            id={1234}
            imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
            title="Yo! Biriyani"
            rating={4.5}
            genre="North Indian"
            address="Saheed Nagar"
            short_description="This is a test description"
            dishes={[]}
            long={20.1223}
            lat={84.231}
        />
        <ResturantCard
            id={1234}
            imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
            title="Yo! Biriyani"
            rating={4.5}
            genre="North Indian"
            address="Saheed Nagar"
            short_description="This is a test description"
            dishes={[]}
            long={20.1223}
            lat={84.231}
        />
        <ResturantCard
            id={1234}
            imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
            title="Yo! Biriyani"
            rating={4.5}
            genre="North Indian"
            address="Saheed Nagar"
            short_description="This is a test description"
            dishes={[]}
            long={20.1223}
            lat={84.231}
        />
        <ResturantCard
            id={1234}
            imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
            title="Yo! Biriyani"
            rating={4.5}
            genre="North Indian"
            address="Saheed Nagar"
            short_description="This is a test description"
            dishes={[]}
            long={20.1223}
            lat={84.231}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
