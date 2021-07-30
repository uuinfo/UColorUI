
 /**
  * ubiz-goods-list  常用商品列表组件
  * @property {String} mainstyle 设置列表主要样式，有single/double/bigcard/commonbtn四种
  * @property {Boolean} iscard 设置列表是否为卡片样式
  * @property {Array} goodslist 传入组件的商品数据，其元素为Object格式,每个Object的key值有 
  *
  * imgurl {String} (商品图片)
  * desc {String} (商品描述)
  * taglist {Array} (商品状态小标签列表)
  * buyprice {String} (购买价格/现价)
  * marketprice {String} (市场价/原价)
  * soldcount {String} (销售数量)
  *
  * @example <ubiz-goods-list :goodlist = "goodlist" mainstyle="double" :iscard="true"></ubiz-goods-list>
  */

<template>
	<view>
		<view class="cu-card goods col-goods col-twice" v-if="mainstyle=='double'" :class="iscard==false?'no-card':''">
			<view class="cu-item shadow bg-white" v-for="(item,index) in goodslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.desc}}</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="cu-tag sm line-orange">{{item.taglist[0]}}</view>
						<view class="cu-tag sm line-orange">{{item.taglist[1]}}</view>
					</view>
					<view class="flex justify-between align-end margin-top-xs">
						<view class="flex align-end">
							<view class="margin-right-sm"> <text class="text-price text-red text-bold text-lg">{{item.buyprice}}</text></view>
							<view class="margin-right-sm"> <text class="text-price text-gray text-del text-sm">{{item.marketprice}}</text></view>
						</view>
						<view class="padding-left-xs text-right text-gray text-sm">
							售{{item.soldcount}}件
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="cu-card goods" v-if="mainstyle=='single'" :class="iscard==false?'no-card':''">
			<view class="cu-item bg-white" v-for="(item,index) in goodslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.desc}}</view>
					</view>
		
					<view class="flex align-center margin-top-xs">
						<view class="cu-tag sm line-orange">{{item.taglist[0]}}</view>
						<view class="cu-tag sm line-orange">{{item.taglist[1]}}</view>
					</view>
					<view class="flex justify-between align-end margin-top-sm">
						<view class="flex align-end flex-sub">
							<view class=""> <text class="text-price text-red text-xxl">{{item.buyprice}}</text></view>
							<view class="margin-left-xs"> <text class="text-price text-gray text-del text-lg">{{item.marketprice}}</text></view>
						</view>
						<view class="padding-left-xl text-right text-gray text-sm">
							销量 {{item.soldcount}} 件
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-card case bg-white" v-if="mainstyle=='bigcard'" :class="iscard==false?'no-card':''">
			<view class="cu-item shadow" v-for="(item,index) in goodslist" :key="index">
				<view class="image">
					<image :src="item.imgurl" mode="widthFix"></image>
					<!-- <view class="cu-tag bg-blue">史诗</view> -->
					<view class="bg-black padding-sm flex align-center">
						<view class="flex-sub">
							<view class="text-cut text-lg">{{item.desc1}}</view>
							<view class="text-cut">{{item.desc2}}</view>
						</view>
						<view class="action">
							<button class="cu-btn lines-white round"><text class="margin-right-sm text-sm">抢购价</text> 
							<text class="text-price text-lg">{{item.buyprice}}</text></button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-card goods no-card" v-if="mainstyle=='commonbtn'" :class="iscard==false?'no-card':''">
			<view class="cu-item bg-white" v-for="(item,index) in goodslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.desc}}</view>
					</view>
					<view class="margin-top-xs"> 
						<text class="text-price text-red text-xl margin-right-sm" >{{item.buyprice}}</text>
						<text class="text-price text-gray text-del text-lg">{{item.marketprice}}</text>
					</view>
					<view class="flex justify-between align-end">
						<view class="text-gray text-sm flex-sub">月销量 {{item.soldcount}} 件</view>
						<view class="padding-left-xl text-right">
							<button class="cu-btn bg-gradual-red round shadow sm">立即购买</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			goodslist:"",
			mainstyle: String,
			iscard:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
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
