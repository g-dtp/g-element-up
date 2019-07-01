<template lang='pug'>
	.wrap(v-if="!$store.state.mobile")
		g-menu(:menuConfig="_menuList" :collapse="$store.state.collapse" )
			g-logo(:text="text" :src="logoBg")
		.nav
			g-search
			g-dropdown(:dropDownDatas='dropDownData')
		div 
			router-view
	.m-wrap(v-else)
		.m-nav GDMA
			.collapse-item
				g-icon.icon-collapse-close(v-if='!$store.state.collapse' iconClass="icon-collapse-close" @click.native="onCollapse")
				g-icon.icon-collapse-open(v-if='$store.state.collapse' iconClass="icon-collapse-open" @click.native="onCollapseOpen")
			g-m-search()
		g-m-menu(:menuConfig="_menuList" :collapse="$store.state.collapse" )
		div 
			router-view
</template>

<script>
import GIcon from 'packages/g-icon'
import {GMenu, GMMenu, GSearch, GAvator, GDropdown, GLogo, GMSearch} from 'packages/index'
// import MenuConfig from 'packages/g-menu/config.js'
import MenuConfig from 'packages/g-menu/config2.js'
export default {
	name: "index",
	components: {GMenu, GMMenu, GSearch, GAvator, GDropdown, GLogo, GIcon, GMSearch},
	data() {
		return {
			text: 'GDMA',
			logoBg: '../../static/img/logo-bg.png',
			dropDownData: ["退出", "边栏"]
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
	},
	methods: {
		onCollapse () {
			this.$store.commit('collapse', true)
		},
		onCollapseOpen () {
			this.$store.commit('collapse', false)
		}
	}
}
</script>

<style lang="sass" scoped>
.wrap
	display: flex
	justify-content: space-between
	width: 100%
	.nav
		margin-right: 20px
		display: flex
		justify-content : space-between
		width: 100%
		height: 50px
		margin-left: 20px
		background: #fff
.m-wrap
	.m-nav
		height: 64px;
		position: relative;
		display: flex
		align-items: center
		justify-content: center
		color: #fff
		background: url('~img/logo-bg.png') no-repeat
		background-size: cover
		text-align: center
		.g-m-search
			position: absolute;
			right: 10px;
			width: 20px;
		.collapse-item
			position: absolute
			left: 10px
			color: #fff
</style>