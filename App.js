import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
let deviceWidth = Dimensions.get("window").width;

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [yes, setYes] = useState();

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const Nav = () => {
    if (yes) {
      return <DesktopNav />;
    }
    return <MobileNav />;
  };

  return (
    <View style={styles.container}>
      {/*TERNARY OPERATORS */}
      {/* {yes ? <DesktopNav /> : <MobileNav />} */}
      {window.width > 500 ? <DesktopNav /> : <MobileNav />}

      {/* <View>
        {Object.entries(dimensions.window).map(([key, value]) => (
          <Text>{window.width}</Text>
        ))}
      </View> */}

      {/* {Nav} */}
      <View style={styles.BodyContainer}>
        <Text>{deviceWidth}</Text>
        <Text>{window.width}</Text>

        <Text style={styles.header}>Window Dimensions</Text>
        {Object.entries(dimensions.window).map(([key, value]) => (
          <Text>
            {key} - {value}
          </Text>
        ))}
        <Text style={styles.header}>Screen Dimensions</Text>
        {Object.entries(dimensions.screen).map(([key, value]) => (
          <Text>
            {key} - {value}
          </Text>
        ))}
      </View>
      <View style={styles.copyright}>
        <Text>React Native for Web – Copyright © Siso Ngqolosi</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  BodyContainer: {
    flex: 1,
    backgroundColor: "#CAEFDC",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  copyright: {
    width: "100%",
    justifyContent: "center",
  },
});
