import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mobile: false,
		menu: [],
		collapse: false
	},
	mutations: {
		'mobile' (state, value) {
			state.mobile = value
		},
		'menu' (state, value) {
			state.menu = value
		},
		'collapse' (state, value) {
			state.collapse = value
		}
	},
	getters: {
		'mobile' (state) {
			return state.mobile
		},
		'menu' (state) {
			return state.menu
		},
		'collapse' (state) {
			return state.collapse
		}
	},
	modules: {
	}
})
