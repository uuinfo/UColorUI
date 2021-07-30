

<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">秒杀商品列表</block></cu-custom>
	
		<ubiz-ms-list :mslist="goodslist" mainstyle="common" :iscard="false"></ubiz-ms-list>
		
		<ubiz-ms-list :mslist="goodslist" mainstyle="double" :iscard="true"></ubiz-ms-list>
		
		<ubiz-ms-list :mslist="goodslist" mainstyle="bigcard" :iscard="false"></ubiz-ms-list>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodslist:[
				{
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					title:'1无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
					buyprice:'198',
					marketprice:'258',
					soldpercent:'90'
				},
				{
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					title:'2无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
					buyprice:'198',
					marketprice:'258',
					soldpercent:'90'
				},
				{
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					title:'3无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
					buyprice:'198',
					marketprice:'258',
					soldpercent:'90'
				},
				{
					imgurl:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					title:'4无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。',
					buyprice:'198',
					marketprice:'258',
					soldpercent:'90'
				}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

	
	.cu-card.goods {
		display: block;
	}
	
	.cu-card.goods.col-goods.col-twice {
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 30rpx;
	}
	
	.cu-card.goods.col-goods>.cu-item {
		padding: 0upx;
		display: block;
		border: 0px;
	}
	
	.cu-card.goods>.cu-item {
		padding: 30upx;
		display: flex;
		position: relative;
	}
	
	.cu-card.goods.col-goods.col-twice>.cu-item {
		width: 345upx;
		margin: 20rpx 20rpx 0rpx 20rpx;
	}
	
	.cu-card.goods.col-goods.col-twice>.cu-item:nth-child(2n) {
		margin-left: 0upx;
	}
	
	.cu-card.goods>.cu-item+.cu-item {
		border-top: 1upx solid #EEEEEE;
	}
	
	.cu-card.goods>.cu-item .content {
		width: 410upx;
		padding: 0upx;
	}
	
	.cu-card.goods.no-card>.cu-item .content {
		width: 470upx;
		padding: 0upx;
	}
	
	.cu-card.goods.col-goods>.cu-item .content {
		width: 100%;
		padding: 30upx;
	}
	
	.cu-card.goods.col-goods.col-twice>.cu-item .content {
		padding: 20upx;
	}
	
	.cu-card.goods>.cu-item .title {
		font-size: 30upx;
		font-weight: 900;
		color: #333333;
		line-height: 1.4;
		height: 1.4em;
		overflow: hidden;
	}
	
	.cu-card.goods.no-card>.cu-item .title,
	.cu-card.goods.col-goods>.cu-item .title {
		height: 3em;
		overflow: hidden;
	}
	
	.cu-card.goods>.cu-item .text-line2cut {
		-webkit-line-clamp: 1;
	}
	
	.cu-card.goods.no-card>.cu-item .text-line2cut,
	.cu-card.goods.col-goods>.cu-item .text-line2cut {
		-webkit-line-clamp: 2;
	}
	
	.cu-card.goods>.cu-item>image {
		width: 200upx;
		height: 200upx;
		margin-right: 20upx;
		border-radius: 6upx;
	}
	
	.cu-card.goods.no-card>.cu-item>image {
		width: 240upx;
		height: 240upx;
	}
	
	.cu-card.goods.col-goods>.cu-item>image {
		width: 100%;
		height: 340upx;
		border-bottom-left-radius: 0upx;
		border-bottom-right-radius: 0upx;
		display: block;
	}
	
	.cu-card.goods.col-goods.col-twice>.cu-item>image {
		height: 335upx;
	}
</style>
