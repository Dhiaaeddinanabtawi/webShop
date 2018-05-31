import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		mobilePrice: 0,
		contractsPrice: 0,
		dataAmountPrice: 0,
		extrasPrice: 0,
		totalPrice: 0
	}, 
	mutations: {
		setMobilePrice: function(state, value){
			state.mobilePrice = value
		},
		setContractsPrice: function(state, value){
			state.contractsPrice = parseInt(value)
		},
		setDataAmountPrice(state, value){
			state.dataAmountPrice = value
		},
		setExtrasPrice(state, value){
			state.extrasPrice = value
		}
	},
	actions: {
		setMobilePrice: (context) => context.commit('setMobilePrice'),
		setContractsPrice: (context) => context.commit('setContractsPrice'),
		setDataAmountPrice: (context) => context.commit('setDataAmountPrice'),
		setExtrasPrice: (context) => context.commit('setExtrasPrice')
	}
});