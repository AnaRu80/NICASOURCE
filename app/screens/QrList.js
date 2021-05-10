import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

import Screen from "../components/Screen";
import ItemList from "../components/ItemList";

function QrList() {
  const [listings, setListings] = useState([]);

  const listing = [
    {
      id: 1,
      link: "http://google.com",
      price: 30,
    },
    {
      id: 2,
      link: "http://google.com",
      price: 40,
    },
  ];
  useEffect(() => {
    setListings(listing);
  }, []);

  const deleteItem = (id) => {
    setListings(listings.filter((x) => x.id != id));
    console.log("listing", listings);
  };

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Qr List</Text>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ItemList item={item} deleteItem={deleteItem} />
        )}
      />
    </Screen>
  );
}

export default QrList;

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
