import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import Page from "./components/Page";
import ConfettiCannon from "react-native-confetti-cannon";
import Modal from "react-native-modal";

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

  const Caboom = () => {
    console.log("hiiiiiiiiiiiiiiiiiii");
  };
  return (
    <View style={styles.container}>
      {/*TERNARY OPERATORS */}
      {/* {yes ? <DesktopNav /> : <MobileNav />} */}
      {window.width > 500 ? <DesktopNav /> : <MobileNav onPress={Caboom} />}

      {/* <View>
        {Object.entries(dimensions.window).map(([key, value]) => (
          <Text>{window.width}</Text>
        ))}
      </View> */}

      {/* {Nav} */}
      <View style={styles.BodyContainer}>
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
        <View>
          <Image
            source={{
              uri: "https://reactiongifs.me/wp-content/uploads/2013/08/shia-labeouf-magic-gif.gif",
            }}
            style={{ width: 714, height: 400 }}
          />
        </View>
        <Text
          style={{
            textAlign: "center", // <-- The magic
            fontWeight: "bold",
            fontSize: 40,
            // backgroundColor: "purple",
          }}
        >
          Your screen size is:
        </Text>
        <Text
          style={{
            textAlign: "center", // <-- The magic
            fontWeight: "bold",
            fontSize: 50,
            color: "purple",
          }}
        >
          {(window.width * (10 / 377.9527559055)).toFixed(2)}cm
        </Text>

        <Text
          style={{
            textAlign: "center", // <-- The magic
            fontWeight: "bold",
            fontSize: 30,
            color: "#003366",
          }}
        >
          {deviceWidth}px
        </Text>

        {/* <Text style={styles.header}>Window Dimensions</Text>
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
        ))} */}
      </View>
      <View style={styles.copyright}>
        <Text>
          I created this with React Native for Web – Copyright © Siso Ngqolosi
        </Text>
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
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  copyright: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
