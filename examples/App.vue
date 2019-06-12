<template lang="pug">
	#app
		router-view
</template>

<script>
	export default {
		name: 'App',
		mounted() {
			let _this = this
		    if (this._isMobile()) {
		      this.$store.commit('mobile', true)
		    } else {
		      this.$store.commit('mobile', false)
		    }
		    window.addEventListener('resize', function(){
		    	if (_this._isMobile()) {
			      _this.$store.commit('mobile', true)
			    } else {
			      _this.$store.commit('mobile', false)
			    }
		    })
		},
		methods: {
			_isMobile() {
				let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				return flag;
			}
		}
	}
</script>

<style lang="stylus">
	*
		padding 0
		margin 0
	#app
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
</style>
