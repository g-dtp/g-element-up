<template lang='pug'>
	.g-nav
		g-search.search
		g-dropdown()
</template>

<script>
import GSearch from '../g-search'
import GDropdown from '../g-dropdown'
export default {
	name: 'g-nav',
	components: { GDropdown, GSearch },
	data(){
		return {
		}
	}
}
</script>

<style lang="sass">
	.g-nav
		width: 100%
		box-sizing: border-box;
		top: 0
		display: flex
		height: 60px
		border: 1px solid #eff
		width: 500px
		display: flex
		align-items: center
		.g-search
			float: left
		.g-dropdown
			float: right
		.g-icon
			width: 18px
			height: 18px

</style>