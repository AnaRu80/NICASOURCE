import React, { useEffect } from 'react';
import {
  StyleSheet, Text, FlatList, TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Screen from '../components/Screen';
import ItemList from '../components/ItemList';

import { deleteQr, filterQr } from '../actions/qrAction';

function QrList() {
  const dispatch = useDispatch();
  const deleteSelectedQr = (id) => dispatch(deleteQr(id));

  const filterQrs = useSelector((state) => state.qrReducer.filterData);

  const searchFilter = (text) => {
    if (text) {
      dispatch(filterQr(text));
    } else {
      dispatch(filterQr(''));
    }
  };
  useEffect(() => {
    dispatch(filterQr(''));
  }, []);

  const styles = StyleSheet.create({
    inputText: {
      margin: 15,
      height: 40,
      borderColor: 'tomato',
      borderWidth: 1,
      paddingLeft: 5,
      borderRadius: 10,
    },
    screen: {
      backgroundColor: '#f9eeec',
    },

    text: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 10,
    },
  });

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>QR Codes</Text>
      <TextInput
        placeholder="'Search a QR'"
        style={styles.inputText}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        data={filterQrs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemList item={item} deleteSelectedQr={deleteSelectedQr} />
        )}
      />
    </Screen>
  );
}

export default QrList;
