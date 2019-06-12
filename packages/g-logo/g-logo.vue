<template lang='pug'>
	.g-logo
		span {{text}}
		img(:src="src")
</template>

<script>
import GLogo from '../g-logo'
export default {
	name: 'g-m-nav',
	components: { GLogo },
	props: ['text', 'src'],
	mounted() {
		console.log(this.src)
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="sass">
.g-logo
	position: relative
	display: flex
	align-items: center
	justify-content: center
	text-align: center
	span
		position: absolute
		color: #fff
img
	width: 100%
</style>