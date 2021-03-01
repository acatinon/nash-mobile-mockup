import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';
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
    <View style={styles.root}>
      <Header placement="left">
        <Icon type="material-icons" name='menu' />
        <Text style={{ fontSize: 18 }}>Wallet</Text>
        <Icon type="font-awesome-5" name='user-circle' color='#000' />
      </Header>
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
      <Text>Assets</Text>
      <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
      />
    </View>
  );
};

const styles = createStyles({
  root: {
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