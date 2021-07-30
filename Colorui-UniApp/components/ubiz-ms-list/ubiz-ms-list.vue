
 /**
  * ubiz-ms-list  商品秒杀列表组件
  * @property {String} mainstyle 设置列表主要样式，有common/bigcard/double三种
  * @property {Boolean} iscard 设置列表是否为卡片样式
  * @property {Array} mslist 传入组件的商品数据，其元素为Object格式，其单个元素的key值有: 
  * {
  *    'imgurl' {String} (图片链接),
  *    'title' {String} (商品标题),
  *    'buyprice' {String} (现价),
  *    'marketprice' {String} (原价),
  *    'soldpercent' {String} (已抢购的百分比)
  * }
  * @example <ubiz-ms-list :mslist = "goodlist" :mainstyle="common" :iscard="true"></ubiz-ms-list>
  */




<template>
	<view>
		<!-- 缩略图单列 -->
		<view class="cu-card goods" v-if="mainstyle=='common'" :class="iscard==false?'no-card':''">
			<view class="cu-item bg-white shadow" v-for="(item,index) in mslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.title}}</view>
					</view>
					<view class="margin-top-xs"> 抢购价：<text class="text-price text-red text-xl">{{item.buyprice}}</text></view>
					<view class="margin-top-xs"> 市场价：<text style="text-decoration: line-through;" class="text-price text-gray text-del text-lg">{{item.marketprice}}</text></view>
					<view class="flex justify-between align-end">
						<view class="flex align-center flex-sub">
							<view class="cu-progress round xs margin-right-sm flex-sub">
								<view class="bg-red" :style="'width:'+ item.soldpercent +'%'"></view>
							</view>
							<view class="text-gray text-sm flex-sub">已抢{{item.soldpercent}}%</view>
						</view>
						<view class="padding-left-xl text-right">
							<button class="cu-btn bg-orange round shadow sm"><text class="icon-lightfill"> </text>抢购</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 大图卡片单列 -->
		<view class="cu-card goods col-goods" v-if="mainstyle=='bigcard'" :class="iscard==false?'no-card':''">
			<view class="cu-item shadow bg-white" v-for="(item,index) in mslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.title}}</view>
					</view>
					<view class="flex align-end margin-top-xs">
						<view class="margin-right-sm"> 抢购价：<text class="text-price text-red text-xl">{{item.buyprice}}</text></view>
						<view class="margin-right-sm"> 市场价：<text style="text-decoration: line-through;" class="text-price text-gray text-del text-lg">{{item.marketprice}}</text></view>
					</view>
					<view class="flex justify-between align-end">
						<view class="flex align-center flex-sub">
							<view class="cu-progress round xs margin-right-sm flex-sub">
								<!-- <view class="bg-red" :style="[{ width:loading?'72%':'72%'}]"></view> -->
								<view class="bg-red" :style=" 'width:'+ item.soldpercent +'%;' "></view>
							</view>
							<view class="text-gray text-sm flex-sub">已抢{{item.soldpercent}}%</view>
						</view>
						<view class="padding-left-xl text-right">
							<button class="cu-btn bg-orange round shadow"><text class="icon-lightfill"> </text>抢购</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 大图卡片双列 -->
		<view class="cu-card goods col-goods col-twice" v-if="mainstyle=='double'" :class="iscard==false?'no-card':''">
			<view class="cu-item shadow bg-white" v-for="(item,index) in mslist" :key="index" @tap="toGoodsDetail()">
				<image :src="item.imgurl" mode="aspectFill"></image>
				<view class="content">
					<view class="title">
						<view class="text-line2cut">{{item.title}}</view>
					</view>
					<view class="flex align-center margin-top-xs">
						<view class="cu-progress round xs margin-right-sm flex-sub">
							<!-- <view class="bg-red" :style="[{ width:loading?'72%':'72%'}]"></view> -->
							<view class="bg-red" :style="'width:'+ item.soldpercent +'%'"></view>
						</view>
						<view class="text-gray text-sm text-cut">已抢{{item.soldpercent}}%</view>
					</view>
					<view class="flex justify-between align-end margin-top-xs">
						<view class="flex align-end">
							<view class="margin-right-sm"> <text class="text-price text-red text-bold text-lg">{{item.buyprice}}</text></view>
							<view class="margin-right-sm"> <text class="text-price text-gray text-del text-sm">{{item.marketprice}}</text></view>
						</view>
						<view class="padding-left-xs text-right">
							<button class="cu-btn bg-orange round sm shadow"><text class="icon-lightfill"> </text>抢购</button>
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
			mslist:"",
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
