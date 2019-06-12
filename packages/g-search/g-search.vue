<template lang='pug'>
	.g-search
		g-icon(iconClass="icon-search")
		g-input(placeholder="请输入看板关键词")
</template>

<script>
import GIcon from '../g-icon'
import GInput from '../g-input'
export default{
	name: 'g-search',
	components: { GIcon, GInput },
	data(){
		return {
		}
	}
}
</script>

<style lang="sass">
	.g-search
		height: 60px
		border: 1px solid #eff
		width: 500px
		display: flex
		align-items: center
		.g-icon
			width: 18px
			height: 18px

</style>