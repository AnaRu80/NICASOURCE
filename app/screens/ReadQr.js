import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Screen from "../components/Screen";

import { addQr } from "../actions/qrAction";

function ReadQr({ navigation }) {
  // Permission for camera access
  const requestPermission = async () => {
    const { granted } = await BarCodeScanner.requestPermissionsAsync();
    if (!granted) alert("You need to enable your permissions");
  };
  // States
  const [scanned, setScanned] = useState(true);
  // Redux
  const dispatch = useDispatch();
  const qrs = useSelector((state) => state.qrReducer.QRData);

  useEffect(() => {
    requestPermission();
  }, []);

  // Handle Scan without functionality
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);

    // Alert to save the link in the List of QRs
    Alert.alert(
      "Scan",
      `Bar code with data ${data} has been scanned!Save Link?`,
      [
        { text: "Yes", onPress: () => dispatch(addQr(data)) },
        { text: "No", onPress: () => setScanned(true) },
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

      <View style={styles.viewButton}>
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.scannerButton}
          >
            <MaterialCommunityIcons name="qrcode" size={30} color="#fff" />
            <Text style={{ color: "#fff" }}>Scan</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.numQrView}>
        <Text style={{ color: "#fff", fontWeight: "bold", paddingVertical: 5 }}>
          {qrs.length} QR Scan
        </Text>
      </View>
    </Screen>
  );
}

export default ReadQr;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    color: "red",
  },
  container: {
    flex: 1,
  },
  numQrView: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  scannerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 35,
    marginLeft: "auto",
    marginRight: "auto",
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
  viewButton: {
    bottom: "50%",
    width: "100%",
  },
});
