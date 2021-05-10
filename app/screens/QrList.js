import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../components/Screen";
import ItemList from "../components/ItemList";

import { deleteQr } from "../actions/qrAction";

function QrList() {
  const dispatch = useDispatch();
  const deleteSelectedQr = (id) => dispatch(deleteQr(id));
  const qrs = useSelector((state) => state.qrReducer.QRData);

  // const deleteItem = (id) => {
  //   setListings(listings.filter((x) => x.id != id));
  //   console.log("listing", listings);
  // };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Qr List</Text>
      <FlatList
        data={qrs}
        keyExtractor={(qr) => qr.id.toString()}
        renderItem={({ item }) => (
          <ItemList item={item} deleteSelectedQr={deleteSelectedQr} />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f9eeec",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default QrList;
