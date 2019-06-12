<template lang='pug'>
	.g-side(:class="{collapse: collapse}")
		g-menu-item(v-for='item in _menuList' :key="item.path" :item="item" :collapse="true")
</template>

<script>
	import GMenuItem from './g-menu-item'
	export default {
		name: 'g-side',
		components: {GMenuItem},
		props: {
			menuConfig: {
				type: Array,
				default: function () {
					return []
				}
			},
			collapse: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			_menuList(){
				let menuList = []
				let _menuMap = {}
				this.menuConfig.forEach(item => {
					_menuMap[item.path] = item
				})
				this.menuConfig.forEach(item => {
					if (item.parent) {
						let parent = _menuMap[item.parent]
						if (!parent.children) {
							parent.children = []
						}
						parent.children.push(item)
					} else {
						menuList.push(item)
					}
				})
				return menuList
			}
		}
	}
</script>
<style lang="sass" scoped>
	.g-side
		width: 50px;
		color: rgba(255, 255, 255, 0.45);
		background: #010
		height: 100vh
		position: absolute;
		left: 0px
		.collapse-item
			display: flex;
			align-items: center;
			color: rgb(93, 97, 106);
			height: 40px;
			line-height: 40px;
			.icon-collapse-close
				flex: none;
				font-size: 16px;
				margin-left: 20px;
				cursor: pointer;
			.icon-collapse-open
				flex: none;
				font-size: 16px;
				margin: 0 auto;
				cursor: pointer;
		&.collapse
			width: 50px;
			position: absolute;
			left: -50px
</style>
