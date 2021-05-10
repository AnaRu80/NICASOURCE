import React from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ItemList({ item, deleteItem }) {
  return (
    <View style={styles.ItemLisContainer}>
      <MaterialCommunityIcons
        name="qrcode"
        size={24}
        color="black"
        style={{ paddingLeft: 10 }}
      />

      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <Text style={styles.textLink}>{item.link}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <MaterialCommunityIcons
          name="delete"
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemLisContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingVertical: 10,
  },
  textLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default ItemList;
