import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

function QrList() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>QR List</Text>
      <MaterialCommunityIcons name="qrcode" size={24} color="black" />
    </Screen>
  );
}

export default QrList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9eeec",
    alignItems: "center",
  },
});
