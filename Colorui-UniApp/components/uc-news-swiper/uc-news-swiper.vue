/**
  * uc-news-swiper  资讯组件
  * @property {Array} zixun,其单个元素的key值有:
  *
  * title {String} (标题)
  * tag {String} (标签)
  * url {String} (跳转链接)
  *
  * @example <uc-news-swiper :zixun="zixun"></uc-news-swiper>
  */

<template>
	<view>
		<view class="cu-bar bg-white home-zixun">
			<view class="action margin-right-sm">
				<image src="/static/home-zixun.png" mode="aspectFill"></image>
			</view>
			<swiper :circular="true" :indicator-dots="false" vertical :autoplay="true" interval="5000" duration="500" class="solid-left">
				<swiper-item v-for="(item,index) in zixun" :key="index">
					<view class="text-cut">
						<view class="cu-tag line-orange radius">{{item.tag}}</view> {{item.title}}
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			zixun:""
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.home-custom .cu-bar .action:first-child>view {
		margin: 0;
	}

	.home-custom .cu-bar .action>view {
		position: relative;
		font-size: 38upx !important;
	}

	.home-custom .cu-bar .action>view .cu-tag.badge {
		top: -15upx;
		right: -15upx;
	}

	.home-custom .search-form input {
		height: 40upx;
		line-height: 40upx;
	}

	.cu-menu {
		width: 100upx;
		height: 100upx;
		position: fixed;
		right: 0;
		z-index: 1127;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cu-menu view {
		border-left: 1upx solid #dedede;
		width: 90upx;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		font-size: 40upx;
	}

	.NavMenu {
		background-color: #FFFFFF;
		position: fixed;
		width: 100%;
		left: 0;
		z-index: 1025;
	}

	.home-swiper {
		position: relative;
		overflow: hidden;
		background-color: #ffffff;
	}

	.home-swiper swiper .uni-swiper-dots,
	.home-swiper swiper .a-swiper-dots,
	.home-swiper swiper .wx-swiper-dots {
		bottom: 35upx;
	}

	.home-swiper .screen-swiper {
		height: 400upx;
	}

	.home-swiper .swiperBG {
		position: relative;
	}

	.home-zixun {
		min-height: 80upx;
	}

	.home-zixun image {
		width: 63upx;
		height: 37upx;
	}

	.home-zixun swiper {
		flex: 1;
		height: 50upx;
		line-height: 50upx;
		padding: 0 30upx;
	}

	.home-zixun swiper .cu-tag {
		font-size: 24upx;
		height: 40upx;
		padding: 0 10upx;
		margin-right: 15upx;
	}

	.radiusCard {
		border-radius: 10upx;
		overflow: hidden;
		background-color: transparent;
	}

	.radiusCard image {
		display: block;
	}

	.home-ms {
		min-height: 80upx;
	}

	.home-ms image {
		width: 125upx;
		height: 37upx;
	}
</style>
