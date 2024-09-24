/* eslint-disable @typescript-eslint/no-explicit-any */
import { icons } from "@/constants";
import * as React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

type TrendingType = {
  posts: any;
};

const Trending = ({ posts }: TrendingType) => {
  console.log("🚀 ~ Trending ~ posts:", posts?.length);

  const [activeItem, setActiveItem] = React.useState(null);

  const viewableItemChange = ({ viewableItems }) => {
    if (viewableItems?.length) {
      setActiveItem(viewableItems?.[0].key);
    }
  };

  React.useEffect(() => {
    if (posts?.length) setActiveItem(posts?.[0]);
  }, [posts?.length]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemChange}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 70, y: 0 }}
      horizontal
    />
  );
};

export default Trending;

type TrendingItemType = {
  activeItem: any;
  item: any;
};

const TrendingItem = ({ activeItem, item }: TrendingItemType) => {
  const [play, setPlay] = React.useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item?.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status: any) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item?.thumbnail }}
            resizeMode="cover"
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
          />
          <Image
            source={icons.play}
            resizeMode="contain"
            className="w-12 h-12 absolute"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};
