import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Card from './components/card';

import { coins } from '../models/coins';
import { colors, fonts, padding } from '../styles/theme';
import createStyles from '../styles/base';

const CoinItem = ({ item }) => (
  <Card backgroundColor={colors[item.symbol.toLowerCase()]}>
    <View style={styles.coin}>
      <Text style={[styles.title, styles.inverted]}>{item.name}</Text>
      <Text style={[styles.sub, styles.mutedInverted]}>$ {item.price}</Text>
    </View>
  </Card>
);

const Wallet = () => {
  const renderItem = ({ item }) => (
    <CoinItem item={item} />
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.summary}>
        <Text style={[styles.title, styles.text]}>Wallet</Text>
        <Card backgroundColor='#0052f3'>
          <Text style={styles.jumbo}>$ 14,569.62</Text>
        </Card>
      </View>
      <View style={styles.assets}>
        <Text style={[styles.title, styles.text]}>Assets</Text>
        <FlatList
          data={coins}
          renderItem={renderItem}
          keyExtractor={item => item.symbol}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = createStyles({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jumbo: {
    color: colors.inverted,
    fontSize: fonts.xl,
    fontFamily: fonts.bold,
    textAlign: 'center',
    margin: padding.xl,
  },
  summary: {
    margin: padding.sm
  },
  assets: {
    flex: 1,
    flexGrow: 1,
    margin: padding.sm
  },
  coin: {
    marginHorizontal: padding.sm
  }
});


export { Wallet };