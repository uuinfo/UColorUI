<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">秒杀</block></cu-custom>
		<!-- 首屏秒杀 -->
		<uc-miaosha :msNav="msNav"></uc-miaosha>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msNav: [{
					time: '00:00',
					state: 0,
					text: '已开抢'
				}, {
					time: '08:00',
					state: 0,
					text: '已开抢'
				}, {
					time: '16:00',
					state: 1,
					text: '正在抢购'
				}, {
					time: '20:00',
					state: 2,
					text: '即将开抢'
				}, {
					time: '00:00',
					state: 3,
					text: '明日预告'
				}, {
					time: '08:00',
					state: 3,
					text: '明日预告'
				}, {
					time: '16:00',
					state: 3,
					text: '明日预告'
				}, {
					time: '20:00',
					state: 3,
					text: '明日预告'
				}, ]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	

	
</style>
