<template>
	<view>
		<uc-postNews :btnColor="btnColor" @tapOk="tapOkMethod()"></uc-postNews>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor:"bg-blue"
			};
		},
		methods: {
			tapOkMethod :function() {
				console.log("点击了OK")
				this.btnColor = "bg-red"
			}
		}
	};
</script>

<style>

</style>
