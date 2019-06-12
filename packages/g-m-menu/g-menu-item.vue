<template lang='pug'>
	.g-menu-item(v-if='!collapse')
		slot(name="title")
		.g-menu-item__title(:class="{active: active}" @click.stop="onStep")
			g-icon.icon(:iconClass="item.icon")
			span.text-space {{item.name}}
			g-icon.icon.icon-arrow(v-if='hasChildren' iconClass="icon-arrow" @click.native.stop="onOpen" :class="{open: this.open}")
		.sub-items(v-if='hasChildren' v-show='open')
			g-menu-item(v-for='subItem in item.children' :key="subItem.path" :item="subItem")
	.g-menu-item.collapse(v-else)
		el-popover(v-if='hasChildren'
		trigger="hover"
		placement="right"
		width="150"
		:visible-arrow="false"
		popper-class="g-menu-item__popper")
			.g-menu-item__title.collapse(slot="reference" :class="{active: active}" @click.stop="onStep")
				g-icon.icon(:iconClass="item.icon")
			.sub-items(v-if='hasChildren')
				g-menu-item(v-for='subItem in item.children' :key="subItem.path" :item="subItem")
		.g-menu-item__title.collapse(v-else :class="{active: active}" @click.stop="onStep")
			g-icon.icon(:iconClass="item.icon")
</template>

<script>
	import GIcon from '../g-icon'
	import GMenuItem from './g-menu-item'
	import Vue from 'vue'
	import { Popover } from 'element-ui'

	Vue.use(Popover)
	export default {
		name: 'g-menu-item',
		components: { GIcon, GMenuItem },
		props: {
			item: {
				type: Object,
				default: function () {
					return {}
				}
			},
			collapse: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				open: false
			}
		},
		computed: {
			active () {
				return this.$route.path === this.item.path
			},
			hasChildren () {
				return this.item.children && this.item.children.length > 0
			}
		},
		methods: {
			onOpen () {
				this.open = !this.open
			},
			onStep () {
				this.open = !this.open
				if (!this.hasChildren) {
					this.$router.push(this.item.path)
				}
			}
		}
	}
</script>
<style>
	.g-menu-item__popper {
		background: #181E2A;
		padding: 0;
		border: 0;
	}
</style>
<style lang="sass" scoped>
	.g-menu-item
		font-size: 14px;
		position: relative;
		&__title
			transition: all .5s;
			cursor: pointer;
			height: 40px;
			line-height: 40px;
			padding: 0 20px;
			display: flex;
			align-items: center;
			overflow: hidden;
			color: #606266;
			&.collapse
				justify-content: center;
			&.active
				color: #FFF;
				background: #080B12;
			.text-space
				flex: auto;
			.icon
				flex: none;
				margin-right: 5px;
			.icon-arrow
				transition: all .3s;
				&.open
					transform: rotateZ(180deg);
		&__title:hover
			background: #080B12;
			color: #FFF;
</style>
