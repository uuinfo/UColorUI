<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">动态空间</block></cu-custom>
		<uc-swiperItem :siList="topicList"></uc-swiperItem>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topicList: [{
					title: '免费领面膜',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					isGet: true
				}, {
					title: '免费领眉笔',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					isGet: false
				}, {
					title: '免费领手机',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					isGet: false
				}, {
					title: '免费领粉底液',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					isGet: false
				}, ],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.myHead {
		position: relative;
		padding-bottom: 100upx;
	}

	.myHead image {
		position: absolute;
		bottom: 0;
	}

	.myHead .cu-list .cu-item::after {
		display: none;
	}

	.cu-list.menu-avatar .cu-item,
	.myHead .cu-list {
		background-color: transparent;
	}

	.navHead {
		position: relative;
		margin: -90upx 30upx 0;
		padding: 30upx 0;
		display: flex;
		text-align: center;
		border-radius: 10upx;
	}

	.cu-list.menu-avatar.card-menu>.cu-item .content {
		left: 115upx;
	}

	.cu-avatar-group .cu-avatar.sm {
		margin-left: -20upx !important;
		border: 1rpx solid #FFFFFF !important;
	}

	.myUpShop {
		background-color: #fee7b3;
		position: relative;
		padding: 30upx 300upx 30upx 30upx;
		border-radius: 10upx;
	}

	.myUpShop image {
		position: absolute;
		width: 241upx;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 169upx;
	}
</style>
