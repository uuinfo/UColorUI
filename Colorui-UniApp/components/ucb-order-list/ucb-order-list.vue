

 /**
  * ucb-order-list  订单列表
  * @property {Array} orderList,其单个元素的key值有:
  *
  * odrId {String} (订单号)
  * odrState {String} (订单状态)
  * odrImg {String} (订单商品图片)
  * odrDesc {String} (订单商品描述)
  * odrCount {String} (订单商品数量)
  * odrSinglePrice {String} (商品单价)
  *
  * @example <ucb-order-list :orderList="olist"></ucb-order-list>
  */

<template>
	<view>
		<view class="cu-card order no-card">
			<view class="cu-item" v-for="(item,index) in orderList" :key="index">
				<view class="cu-bar bg-white">
					<view class="action">
						订单号：{{item.odrId}}
					</view>
					<view class="action text-orange">
						{{item.odrState}}
					</view>
				</view>
				<view class="bg-gray padding-sm flex">
					<image class="radius" :src="item.odrImg" mode="aspectFill" style="width:120upx;height:120upx"></image>
					<view class="content">
						<view class="response">
							<view class="text-cut response">{{item.odrDesc}}</view>
						</view>
						<view class="text-gray">
							x{{item.odrCount}}
						</view>
						<view class="text-xl text-orange text-price">
							{{item.odrSinglePrice}}
						</view>
					</view>
				</view>
				<view class="cu-bar solid-bottom solid-top justify-end bg-white">
					<view class="action">
						共{{item.odrCount}}件商品 <text class="text-price">{{item.odrSinglePrice * item.odrCount}}</text>（免运费）
					</view>
				</view>
				<view class="cu-bar justify-end bg-white margin-bottom">
					<view class="action">
						<button class="cu-btn line-black radius margin-right-xs">查看物流</button>
						<button class="cu-btn line-orange radius">确认收货</button>
					</view>
				</view>
				<view class="divider">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			orderList:''
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.cu-card.order .cu-item .content{
	width: 570upx;
	margin-left: 20upx;
}
.divider{
	height: 20rpx;
	background-color: #f0f0f0;
}
</style>
