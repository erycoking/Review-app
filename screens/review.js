import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export const Review = ({ route, navigation }) => {
  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.titleText}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating</Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
};

export default Review;
