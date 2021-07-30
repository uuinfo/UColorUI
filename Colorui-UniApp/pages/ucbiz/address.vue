<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">地址列表</block></cu-custom>
		<ucb-address-list :addressList="addressList"></ucb-address-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [{
					id: 12,
					name: "WXG",
					mobile: '12312312312',
					isDefault: true,
					detailedAddress: '广东省广州市荔湾区爱上大声回答'
				}, {
					id: 11,
					name: "WXG",
					mobile: '12312312312',
					isDefault: false,
					detailedAddress: '广东省广州市荔湾区爱上大声回答'
				}],
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
