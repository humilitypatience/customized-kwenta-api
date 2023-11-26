const express = require('express')
const cors = require("cors");
let app = express()
const { wei } = require('@synthetixio/wei')
const fundingRate = require('./fundingrate')

const PORT = process.env.PORT || 4000

app.use(cors());

app.get('/markets', (req, res) => {
  const marketData = [{
		version: 2,
		marketAddress: 'custome_market_address',
		marketKey: 'sBTCPERP',
		marketName: 'market_name_0',
		asset: 'sBTC',
		assetHex: '79373',
		currentFundingRate: wei(1000000000000000000),
		currentFundingVelocity: wei(1000000000000000000),
		feeRates: {
			makerFee: wei(1000000000000000000),
			takerFee: wei(1000000000000000000),
			makerFeeDelayedOrder: wei(1000000000000000000),
			takerFeeDelayedOrder: wei(1000000000000000000),
			makerFeeOffchainDelayedOrder: wei(1000000000000000000),
			takerFeeOffchainDelayedOrder: wei(1000000000000000000),
		},
		openInterest: {
			shortPct: 1000,
			longPct: 10000,
			shortUSD: wei(1000),
			longUSD: wei(1000000000),
			long: wei(1000),
			short: wei(1000000000),
		},
		marketDebt: wei(1000000000000000000),
		marketSkew: wei(1000000000000000000),
		marketSize: wei(1000000000000000000),
		contractMaxLeverage: wei(1000000000000000000),
		appMaxLeverage: wei(1000000000000000000),
		minInitialMargin: wei(1000000000000000000),
		keeperDeposit: wei(1000000000000000000),
		isSuspended: true,
		marketClosureReason: "system-upgrade",
		marketLimitUsd: wei(1000000000000000000),
		marketLimitNative: wei(1000000000000000000),
		settings: {
			maxMarketValue: wei(1000000000000000000),
			skewScale: wei(1000000000000000000),
			delayedOrderConfirmWindow: 1,
			offchainDelayedOrderMinAge: 2,
			offchainDelayedOrderMaxAge: 3,
			minDelayTimeDelta: 4,
			maxDelayTimeDelta: 5,
		}
	}]
  return res.json(marketData)
})

app.get('/marketFundingRatesHistory', (req, res) => {
  return res.json(fundingRate)
})

app.get('/prices', (req, res) => {
	const priceData = [
		{
			synth: "The First Synth",
			rate: wei(10000)
		},
		{
			synth: "The Second Synth",
			rate: wei(20000)
		},
		{
			synth: "The Third Synth",
			rate: wei(30000)
		},
		{
			synth: "The Fourth Synth",
			rate: wei(10000)
		},
		{
			synth: "The Fifth Synth",
			rate: wei(10000)
		},
		{
			synth: "The Sixth Synth",
			rate: wei(10000)
		},
		{
			synth: "The Seventh Synth",
			rate: wei(10000)
		},
		{
			synth: "The eighth Synth",
			rate: wei(10000)
		},
		{
			synth: "The ninth Synth",
			rate: wei(10000)
		},
		{
			synth: "The tenth Synth",
			rate: wei(10000)
		},
	]
	return res.json(priceData)
})

app.listen(PORT, () => {
  console.log('Server started on port', PORT)
})

