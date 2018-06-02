import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const getTotal = prices => prices.reduce((sum, num) => sum += num, 0)
export default new Vuex.Store({
	state: {
		mobilePrice: 0,
		contractsPrice: 0,
		dataAmountPrice: 0,
		extrasPrice: 0,
		totalPrice: 50,
		showConfirmationMsg: false
	},
	mutations: {
		setMobilePrice: function (state, value) {
			state.mobilePrice = value
			state.totalPrice = getTotal([state.extrasPrice, state.mobilePrice, state.contractsPrice, state.dataAmountPrice])
		},
		setContractsPrice: function (state, value) {
			state.contractsPrice = parseInt(value)
			state.totalPrice = getTotal([state.extrasPrice, state.mobilePrice, state.contractsPrice, state.dataAmountPrice])
		},
		setDataAmountPrice(state, value) {
			state.dataAmountPrice = value
			state.totalPrice = getTotal([state.extrasPrice, state.mobilePrice, state.contractsPrice, state.dataAmountPrice])
		},
		setExtrasPrice(state, value) {
			state.extrasPrice = value
			state.totalPrice = getTotal([state.extrasPrice, state.mobilePrice, state.contractsPrice, state.dataAmountPrice])
		},
		setConfirmationMsg(state, bool) {
			state.showConfirmationMsg = bool;
		}
	},
	actions: {
		setMobilePrice: (context) => context.commit('setMobilePrice'),
		setContractsPrice: (context) => context.commit('setContractsPrice'),
		setDataAmountPrice: (context) => context.commit('setDataAmountPrice'),
		setExtrasPrice: (context) => context.commit('setExtrasPrice')
	}
});