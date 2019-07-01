<template lang='pug'>
	.g-avator
		span.avator
		span.name {{name}}
</template>

<script>
	export default {
		name: 'g-avator',
		props: {
			name:  {
				type: String,
				required: true
			},
			headImg: {
				type: String,
				required: true
			}
		},
		data(){
			return{
			}
		}
	}
</script>
<style lang="sass" scoped>
.g-avator
	display: flex
	align-items: center
	.avator
		background: url('~img/logo-bg.png') no-repeat
		background-size: cover
		width: 24px
		height: 24px
		display: inline-block
		border-radius: 50px
		vertical-align: middle
	.name
		display: inline-block
		margin-left: 10px
</style>
