<template lang='pug'>
	.g-m-nav GDMA
		.collapse-item
			g-icon.icon-collapse-close(v-if='!collapse' iconClass="icon-collapse-close" @click.native="onCollapse")
			g-icon.icon-collapse-open(v-if='collapse' iconClass="icon-collapse-open" @click.native="onCollapseOpen")
		g-m-search()
</template>

<script>
import GIcon from '../g-icon'
import GMSearch from '../g-m-search'
export default {
	name: 'g-m-nav',
	components: { GIcon, GMSearch },
	data(){
		return {
		}
	},
	props: {
		collapse: {
			type: Boolean,
			default: false
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

<style lang="sass">
	.g-m-nav
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