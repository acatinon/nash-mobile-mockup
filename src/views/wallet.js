import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import { coins } from '../models/coins';
import theme from '../theme';

const CoinItem = ({ item }) => (
  <View>
    <Text>{item.name}</Text>
    <Text>$ {item.price}</Text>
  </View>
);

const Wallet = () => {
  const renderItem = ({ item }) => (
    <CoinItem item={item} />
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.summary}>
        <Text style={theme.jumbo}>$14,569.02</Text>
      </View>
      <View  style={styles.assets}>
        <Text>Assets</Text>
        <FlatList
          data={coins}
          renderItem={renderItem}
          keyExtractor={item => item.symbol}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  assets: {
    flex: 1,
  }
});


export { Wallet };