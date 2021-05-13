import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  ItemLisContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  textLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    flex: 1,
    textAlign: 'center',
  },
  touchText: {
    flex: 1,
    justifyContent: 'center',
  },
  iconTrash: {
    paddingRight: 10,
  },
  IconQR: {
    paddingLeft: 10,
  },
});

function ItemList({ item, deleteSelectedQr }) {
  return (
    <View style={styles.ItemLisContainer}>
      <MaterialCommunityIcons
        name="qrcode"
        size={24}
        color="black"
        style={styles.IconQR}
      />

      <TouchableOpacity style={styles.touchText} onPress={() => Linking.openURL(item.link)}>
        <Text style={styles.textLink}>{item.link}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteSelectedQr(item.id)}>
        <MaterialCommunityIcons
          name="delete"
          size={24}
          color="black"
          style={styles.iconTrash}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ItemList;
