import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export const drawer = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default drawer;
