import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import About from "../screens/about";
import Review from "../screens/review";
import Header from "../shared/header";

const Stack = createStackNavigator();

export const myStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={({navigation}) => {
        return {
          headerTitle: () => <Header navigation={navigation} title={'GameZone'} />,
        };
      }}
    />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Review" component={Review} />
  </Stack.Navigator>
);

export default myStack;
