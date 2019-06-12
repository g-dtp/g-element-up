<template lang='pug'>
	.g-dropdown
		span.avator
		el-dropdown(trigger="click")
			span(class="el-dropdown-link") 下拉菜单
				i(class="el-icon-arrow-down el-icon--right")
			el-dropdown-menu(slot="dropdown")
				el-dropdown-item 黄金糕
				el-dropdown-item 狮子头
				el-dropdown-item 螺蛳粉
				el-dropdown-item 双皮奶
				el-dropdown-item 蚵仔煎
</template>

<script>
	import {Dropdown, DropdownMenu, DropdownItem} from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css';
	import Vue from 'vue'
	Vue.use(Dropdown)
	Vue.use(DropdownMenu)
	Vue.use(DropdownItem)
	export default {
		name: 'g-dropdown',
		data() {
			return{
			}
		}
	}
</script>
<style lang="sass" scoped>
.g-dropdown
	.avator
		background: url('~img/logo-bg.png') no-repeat;
		background-size: cover;
		width: 24px;
		height: 24px;
		display: inline-block;
		border-radius: 50px;
		vertical-align: middle;
		margin-right: 10px;
</style>
