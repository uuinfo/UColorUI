<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">动态列表</block></cu-custom>
		<ucb-order-list :orderList="olist"></ucb-order-list>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				olist:[
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					},
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					},
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					},
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					},
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					},
					{
						'odrId':'12114141',
						'odrState':'交易完成',
						'odrImg':'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						'odrDesc':'这是一个商品',
						'odrCount':'3',
						'odrSinglePrice':'1000'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
