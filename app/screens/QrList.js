import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";

function QrList() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>QR List</Text>
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
