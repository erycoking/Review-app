import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "maroon",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;
