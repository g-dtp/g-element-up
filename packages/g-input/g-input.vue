<template lang='pug'>
	el-input.g-input(:placeholder="placeholder" size='mini' v-model="input")
</template>

<script>
	import Vue from 'vue'
	import { Input } from 'element-ui'

	Vue.use(Input)
	export default {
		name: 'g-input',
		props: ['placeholder'],
		data(){
			return{
				input: ''
			}
		}
	}
</script>
<style lang="sass" scoped>
	.g-input
		margin-left: 10px
		width: 100%
		/deep/ .el-input__inner
			background: transparent
			display: block
			border: none
			font-size: 14px
			color: rgba(0,0,0,0.25)
			padding-left: 0
			outline: none
			width: 100%
	
</style>
