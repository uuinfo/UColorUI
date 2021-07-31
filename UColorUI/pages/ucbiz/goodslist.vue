
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">商品列表</block></cu-custom>
		<ucb-goodsList mainstyle="single" :iscard="false" :list="goodslist"></ucb-goodsList>
		<ucb-goodsList mainstyle="double" :iscard="false" :list="goodslist"></ucb-goodsList>
		<ucb-goodsList mainstyle="bigcard" :iscard="false" :list="goodslist"></ucb-goodsList>
		<ucb-goodsList mainstyle="commonbtn" :iscard="false" :list="goodslist"></ucb-goodsList>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodslist:[{
					imgurl:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					desc:"玻尿酸补水面膜26ml*5片 抗皱淡化皱纹",
					desc1:"全球购海囤运动",
					desc2:"用世界来爱你",
					taglist:['精选','包邮'],
					buyprice:"199",
					marketprice:"259",
					soldcount:"114"
				},
				{
					imgurl:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					desc:"玻尿酸补水面膜26ml*5片 抗皱淡化皱纹",
					desc1:"全球购海囤运动",
					desc2:"用世界来爱你",
					taglist:['精选','包邮'],
					buyprice:"199",
					marketprice:"259",
					soldcount:"115"
				},
				{
					imgurl:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					desc:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",
					desc1:"全球购海囤运动",
					desc2:"用世界来爱你",
					taglist:['精选','包邮'],
					buyprice:"199",
					marketprice:"259",
					soldcount:"116"
				},
				{
					imgurl:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					desc:"无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。",
					desc1:"全球购海囤运动",
					desc2:"用世界来爱你",
					taglist:['精选','包邮'],
					buyprice:"199",
					marketprice:"259",
					soldcount:"117"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
