<template lang='pug'>
	div(v-if="!$store.state.mobile")
		g-menu(:menuConfig="_menuList" :collapse="$store.state.collapse" )
			g-logo(:text="text" :src="logoBg")
		g-nav
		div 
			router-view
	div(v-else)
		g-m-nav(:collapse="$store.state.collapse")
		g-m-menu(:menuConfig="_menuList" :collapse="$store.state.collapse" )
		div 
			router-view
</template>

<script>
import {GMenu, GMMenu, GSearch, GAvator, GDropdown, GMNav, GNav, GLogo} from 'packages/index'
// import MenuConfig from 'packages/g-menu/config.js'
import MenuConfig from 'packages/g-menu/config2.js'
export default {
	name: "index",
	components: {GMenu, GMMenu, GSearch, GAvator, GDropdown, GMNav, GNav, GLogo},
	data() {
		return {
			text: 'GDMA',
			logoBg: '../../static/img/logo-bg.png'
		}
	},
	computed: {
		_menuList() {
			// config.js
			// let menuList = []
			// let _menuMap = {}
			// MenuConfig.forEach(item => {
			// 	_menuMap[item.path] = item
			// })
			// MenuConfig.forEach(item => {
			// 	if (item.parent) {
			// 		let parent = _menuMap[item.parent]
			// 		if (!parent.children) {
			// 			parent.children = []
			// 		}
			// 		parent.children.push(item)
			// 	} else {
			// 		menuList.push(item)
			// 	}
			// })
			// return menuList
			
			// config2.js
			let menuList = []
			let _menuMap = {}
			MenuConfig.forEach(item => {
				let itemList = []
				if(item.children){
					item.children.forEach(j => {
						let obj = {
							name: j.title,
							icon: j.iconClass
						}
						let jItem = Object.assign({}, obj, j)
						itemList.push(jItem)
					})
				}
				let obj = {
					name: item.title,
					icon: item.iconClass,
					children: itemList
				}
				let newItem = Object.assign({}, item, obj)
				menuList.push(newItem)
			})
			return menuList
		}
	}
}
</script>

<style lang="sass" scoped>
.g-side
	position: absolute
.g-nav
	width: 100%
	padding-left: 190px
</style>