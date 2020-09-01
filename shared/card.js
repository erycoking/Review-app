import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 18,
  },
});

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

export default Card;
