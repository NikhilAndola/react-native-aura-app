/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, FlatList } from "react-native";
import React from "react";

type TrendingType = {
  posts: any;
};

const Trending = ({ posts }: TrendingType) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
