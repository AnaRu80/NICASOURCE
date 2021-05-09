import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Screen from "../components/Screen";

function ReadQr() {
  // Permission for camera access
  const requestPermission = async () => {
    const { granted } = await BarCodeScanner.requestPermissionsAsync();
    if (!granted) alert("You need to enable your permissions");
  };

  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  // Handle Scan without functionality
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "Scan",
      `Bar code with data ${data} has been scanned!Save Link?`,
      [
        { text: "Yes", onPress: () => console.log("scanner") },
        { text: "No", onPress: () => setScanned(false) },
      ]
    );
  };

  return (
    <Screen>
      <Text style={styles.text}>QR READ</Text>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    </Screen>
  );
}

export default ReadQr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: "#f9eeec",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
});
