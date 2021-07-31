
 /**
  * uc-miaosha  秒杀轮播图界面
  * @property {Array} msNav,其单个元素的key值有:
  *
  * | 参数     | 作用   |类型    |  默认值 |
  * | -------- | -----:  |-----:  | :----:  |
  * | time     | 时间 | String  |   ''    |
  * | state    | 状态 | int |   '' |
  * | text     | 说明文字 | String  |  ''     |
  *
  * @example <uc-miaosha :msNav="msNav"></uc-miaosha>
  */



<template>
	<view>
		<view class="cu-bar bg-white home-ms margin-top">
			<view class="action">
				<image src="/static/home-ms.png" mode="aspectFill"></image>
				<view class="margin-left" v-if="MsTabCur==2">
					<view class="cu-tag margin-right-xs sm radius bg-black">04</view>:<view class="cu-tag margin-right-xs sm radius bg-black">33</view>:<view
					 class="cu-tag margin-right-xs sm radius bg-black">36</view>
				</view>
			</view>
			<navigator class="action text-gray" url="/pages/seckill/seckill">
				<view>查看更多 <text class="cuIcon-right text-sm"></text></view>
			</navigator>
		</view>
		
		<scroll-view scroll-x class="bg-white nav MsTab" scroll-with-animation :scroll-left="MsScrollLeft">
			<view class="cu-item" :class="index==MsTabCur?item.state==0?'bg-black cur':item.state==1?'bg-orange cur':item.state==2?'bg-pink cur':'bg-brown cur':''"
			 v-for="(item,index) in msNav" :key="index" @tap="MsSelect" :data-id="index">
				<view class="time">{{item.time}}</view>
				<view class="text">{{item.text}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			msNav:""
		},
		data() {
			return {
				MsScrollLeft: 0,
				MsTabCur: 2,
			};
		},
		methods:{
			MsSelect(e) {
				this.MsTabCur = e.currentTarget.dataset.id;
				this.MsScrollLeft = (e.currentTarget.dataset.id - 1) * 40
			},
		}
	}
</script>

<style>
.home-ms {
		min-height: 80upx;
	}

	.home-ms image {
		width: 125upx;
		height: 37upx;
	}
	.MsTab.nav {
		background-color: #F5F5F5;
		padding: 10upx 0;
	}
	
	.MsTab.nav .cu-item {
		height: auto;
		border: 0px;
		line-height: 32upx;
		text-align: center;
		padding: 10upx 20upx;
		border-radius: 10upx;
		margin: 0 10upx;
		width: 130upx;
	}
	
	.MsTab.nav .cu-item .time {
		font-size: 36upx;
	}
	
	.MsTab.nav .cu-item .text {
		font-size: 22upx;
		margin-top: 5upx;
	}
</style>
