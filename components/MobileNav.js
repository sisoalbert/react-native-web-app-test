import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const MobileNav = (props) => {
  return (
    <View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <View>
            <TouchableOpacity
              style={{ paddingHorizontal: 10 }}
              onPress={props.onPress}
            >
              <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              {/* <Text style={{ fontWeight: 500 }}>Quester Studios</Text> */}
              <Text style={{ fontWeight: 500 }}>Screen Sizzle</Text>

              {/* <TouchableOpacity style={{ paddingHorizontal: 10 }}>
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
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MobileNav;

const styles = StyleSheet.create({});
