import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Card from './components/card';

import { coins } from '../models/coins';
import { colors, fonts, padding } from '../styles/theme';
import createStyles from '../styles/base';
import WalletBackground from "../assets/wallet_bg.svg";

const statsActive = Array.from({ length: 10 }, () => parseFloat((Math.random() * 0.8 + 0.2).toFixed(3)));
const BASE_SIZE = 16;

const CoinItem = ({ item }) => (
  <Card backgroundColor={colors[item.symbol.toLowerCase()]}>
    <View style={[styles.coin, styles.stacked]}>
      <Text style={[styles.title, styles.inverted]}>{item.name}</Text>
      <Text style={[styles.sub, styles.mutedInverted]}>$ {item.price}</Text>
    </View>
    <AreaChart
      yMin={0}
      yMax={Math.max(...item.chart) + 1}
      data={item.chart}
      curve={shape.curveNatural}
      style={{ height: BASE_SIZE * 5 }}
      contentInset={{
        bottom: -BASE_SIZE * 0.21, right: -BASE_SIZE * 0.21, left: -BASE_SIZE * 0.21,
      }}
      svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: '#fff8' }}
    >
    </AreaChart>
  </Card>
);

const Wallet = () => {
  const renderItem = ({ item }) => (
    <CoinItem item={item} />
  );

  const renderWalletBackground = () => (
    <WalletBackground width="100%" height="100%" />
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.summary}>
        <Text style={[styles.title, styles.text]}>Wallet</Text>
        <Card renderBackground={renderWalletBackground}>
          <View style={styles.stacked}>
            <Text style={[styles.jumbo]}>$ 14,569.62</Text>
          </View>
          <AreaChart
            yMin={0}
            yMax={Math.max(...statsActive) + 1}
            data={statsActive}
            curve={shape.curveNatural}
            style={{ height: BASE_SIZE * 10 }}
            contentInset={{
              bottom: -BASE_SIZE * 0.21, right: -BASE_SIZE * 0.21, left: -BASE_SIZE * 0.21,
            }}
            svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: '#fff' }}
          >
          </AreaChart>
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
    marginVertical: padding.lg,
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
  },
  image: {
    flex: 1,
    height: null
  },
});


export { Wallet };