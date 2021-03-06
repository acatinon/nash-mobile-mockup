import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { Header, Card, Text, Button, Icon, withTheme } from 'react-native-elements';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import CardCust from './components/card';
import Title from './components/title';
import IconButton from './components/icon_button';
import MarginView from './components/margin_view';

import { wallet } from '../models/wallet';
import { colors, fonts, padding } from '../styles/theme';
import createStyles from '../styles/base';
import WalletBackground from "../assets/wallet_bg.svg";

const statsActive = Array.from({ length: 10 }, () => parseFloat((Math.random() * 0.8 + 0.2).toFixed(3)));
const BASE_SIZE = 16;

const CoinItem = withTheme((props) => {
  const { item, theme, updateTheme, replaceTheme } = props;

  return (
    <CardCust backgroundColor={colors[item.symbol.toLowerCase()]}>
      <View style={[styles.stacked]}>
        <Text style={[styles.coinItem, {fontSize: fonts.md, fontWeight: 'bold'}]}>{item.name}</Text>
        <Text style={[styles.coinItem, {fontSize: fonts.md, opacity: 0.7}]}>$ {item.price}</Text>
      </View>
      <View style={[styles.coinWallet, styles.stacked]}>
        <Text style={[styles.coinItem, {fontSize: fonts.md, fontWeight: 'bold'}]}>{item.amount} {item.symbol}</Text>
        <Text style={[styles.coinItem, {fontSize: fonts.md, opacity: 0.7}]}>$ {item.amountInDollar}</Text>
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
        svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: theme.colors.white, opacity: 0.5 }}
      >
      </AreaChart>
    </CardCust>
  )
});

const Wallet = (props) => {
  const { theme, updateTheme, replaceTheme } = props;

  const renderItem = ({ item }) => (
    <CoinItem item={item} />
  );

  const renderWalletBackground = () => (
    <WalletBackground width="100%" height="100%" />
  );

  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Header placement="left">
        <Icon type="material-icons" name='menu' />
        <Text h4>Wallet</Text>
        <Icon type="font-awesome-5" name='user-circle' color={theme.colors.black} />
      </Header>
      <CardCust renderBackground={renderWalletBackground}>
        <View style={styles.stacked}>
          <Card.FeaturedTitle style={styles.jumbo}>$ {wallet.amount}</Card.FeaturedTitle>
        </View>
        <AreaChart
          yMin={0}
          yMax={Math.max(...statsActive) + 1}
          data={statsActive}
          curve={shape.curveNatural}
          style={[{ height: BASE_SIZE * 10 }]}
          contentInset={{
            bottom: -BASE_SIZE * 0.21, right: -BASE_SIZE * 0.21, left: -BASE_SIZE * 0.21,
          }}
          svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: theme.colors.white, opacity: 0.5 }}
        >
        </AreaChart>
      </CardCust>
      <MarginView style={styles.actions}>
        <IconButton title="Deposit" name='arrow-down' iconBackgoundColor={theme.colors.primary} />
        <IconButton title="Send" name='arrow-up' iconBackgoundColor={theme.colors.primary} />
        <IconButton title="Buy" name='dollar-sign' iconBackgoundColor={theme.colors.primary} />
        <IconButton title="Earn" name='chart-pie' iconBackgoundColor={theme.colors.primary} />
      </MarginView>
      <Title>Assets</Title>
      <FlatList
        data={wallet.assets}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
      />
    </View>
  );
};

const styles = createStyles({
  jumbo: {
    fontSize: fonts.xl,
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginVertical: padding.lg,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  assets: {
    flex: 1,
    flexGrow: 1,
    margin: padding.sm
  },
  coinItem: {
    color: '#fff',
    marginHorizontal: padding.sm,
  },
  coinWallet: {
    alignItems: 'flex-end'
  },
  image: {
    flex: 1,
    height: null
  },
});


export default withTheme(Wallet);