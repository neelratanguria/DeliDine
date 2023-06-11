import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=2"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing"
      />
      <CategoryCard
        imgUrl="https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
