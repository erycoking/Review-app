import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const styles = StyleSheet.create({
  pushDown: {
    paddingTop: 60,
    alignItems: "center",
  },
});

const About = () => {
  return (
    <View style={(globalStyles.container, styles.pushDown)}>
      <Text style={globalStyles.titleText}>About there</Text>
    </View>
  );
};

export default About;
