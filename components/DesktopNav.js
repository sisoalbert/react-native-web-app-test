import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const DesktopNav = () => {
  return (
    <View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <View>
            <Text style={{ fontWeight: 500 }}>Screen Sizzle</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Text>Home</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Text>Case Study</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Text>Contact</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                <Text>About</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DesktopNav;

const styles = StyleSheet.create({});
