<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">新闻轮播</block></cu-custom>
		<!-- 首屏资讯 -->
		<uc-news-swiper :zixun="zixun"></uc-news-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zixun: [{
					title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
					tag: '生活主题',
					url: ''
				}, {
					title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
					tag: '居家攻略',
					url: ''
				}, {
					title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
					tag: '周边好货',
					url: ''
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

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
