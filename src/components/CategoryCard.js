import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-4 relative">
        <Image
        className="h-20 w-20 rounded bg-slate-400"
        source={{
            uri: imgUrl
        }}
        />
      <Text className="absolute bottom-1 right-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard