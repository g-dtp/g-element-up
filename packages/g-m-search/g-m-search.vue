<template lang='pug'>
	.g-m-search
		g-icon(iconClass="icon-search")
</template>

<script>
import GIcon from '../g-icon'
export default {
	name: 'g-m-search',
	components: { GIcon },
	data(){
		return {
		}
	}
}
</script>

<style lang="sass">
	.g-m-search
		height: 60px
		border: none
		display: flex
		align-items: center
		cursor: pointer
		.g-icon
			width: 18px
			height: 18px
			color: #fff!important

</style>