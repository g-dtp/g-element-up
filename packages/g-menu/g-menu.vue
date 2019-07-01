<template lang='pug'>
	.g-side(:class="{collapse: collapse}")
		slot(v-if='!collapse')
		.collapse-item
			g-icon.icon-collapse-close(v-if='!collapse' iconClass="icon-collapse-close" @click.native="onCollapse")
			g-icon.icon-collapse-open(v-if='collapse' iconClass="icon-collapse-open" @click.native="onCollapseOpen")
		g-menu-item(v-for='item in _menuList' :key="item.path" :item="item" :collapse="collapse")
</template>

<script>
	import GMenuItem from './g-menu-item'
	import GIcon from '../g-icon'
	export default {
		name: 'g-side',
		components: { GMenuItem, GIcon },
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
		data () {
			return {
				mobileFlag: this.$store.state.mobile //设备区分
			}
		},
		computed: {
			_menuList(){
				return this.menuConfig
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
	.g-side
		width: 190px;
		color: rgba(255, 255, 255, 0.45);
		background: #010
		height: 100vh
		transition: all .2s
		.logo
			height: 64px;
			position: absolute;
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
</style>
