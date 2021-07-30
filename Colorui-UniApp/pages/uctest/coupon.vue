<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">优惠券</block></cu-custom>
		<uc-coupon :cpLsit="cpList"></uc-coupon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cpList:[
					{
						'price':'20',
						'statedesc':'去使用',
						'premise':"满200使用，全场通用",
						'usefuldate':'2019年07月08日',
						'cpState':'useful'
					},
					{
						'price':'20',
						'statedesc':'已过期',
						'premise':"满200使用，全场通用",
						'usefuldate':'2019年07月08日',
						'cpState':'useless'
					},
					{
						'price':'20',
						'statedesc':'已过期',
						'premise':"满200使用，全场通用",
						'usefuldate':'2019年07月08日',
						'cpState':'useless'
					},
					{
						'price':'20',
						'statedesc':'已使用',
						'premise':"满200使用，全场通用",
						'usefuldate':'2019年07月08日',
						'cpState':'used'
					},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
