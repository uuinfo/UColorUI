<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">动态空间</block></cu-custom>
		<!-- <view class="" style="height: 200px;"></view> -->
		<view class="bg-custom">
			<view class="topImg">
				<image src="https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658" mode="aspectFill"
				 :style="[{height:topImgH + 'px'}]"></image>
			</view>
			<view class="my-detail">
				<view class="cu-avatar round lg" :style="[{backgroundImage: 'url(https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf)'}]"></view>
				<view class="padding-top-xl padding-lr-xl">
					<view class="text-bold text-xl margin-bottom-xs">
						文晓港
					</view>
					<navigator class="flex align-center justify-between text-gray" url="/pages/textEdit/textEdit?type=mydesc"
					 hover-class="none">
						<view class="text-sm">
							你还没有填写个人简介哦~
						</view>
						<view class="cuIcon-edit text-lg"></view>
					</navigator>
				</view>
				<view class="padding-lr padding-tb-sm flex">
					<navigator url="/pages/find/userlist?type=follow" class="bg-gray flex-sub radius text-center padding-sm margin-xs"
					 hover-class="none">
						<view class="text-xl text-bold">3</view>
						<view class="text-sm text-gray margin-top-xs">
							我的关注 <text class="cuIcon-right"></text>
						</view>
					</navigator>
					<navigator url="/pages/find/userlist?type=fans" class="bg-gray flex-sub radius text-center padding-sm margin-xs"
					 hover-class="none">
						<view class="text-xl text-bold">3</view>
						<view class="text-sm text-gray margin-top-xs">
							关注我的 <text class="cuIcon-right"></text>
						</view>
					</navigator>
					<view class="bg-gray flex-sub radius text-center padding-sm margin-xs">
						<view class="text-xl text-bold">3</view>
						<view class="text-sm text-gray margin-top-xs">
							获赞
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="nav bg-white shadow home-nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{item.name}}
			</view>
		</view>
		<view class="nav bg-white shadow home-nav fixed text-center" v-if="fixed" :style="[{top:(CustomBar - 2) + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in nav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{item.name}}
			</view>
		</view>
		<block v-if="TabCur==0">
			<ucbiz-dynamic-list :dynamiclist="list"></ucbiz-dynamic-list>
		</block>
		<block v-if="TabCur==1">
			<view class="">
				暂无数据
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				TabCur: 0,
				topImgH: 200,
				nav: [{
					name: '我的发布'
				}, {
					name: '我赞过的'
				}],
				list: [
					[{
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: false,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}],
					[{
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/1e2595586608f1729cefa00a5e4c72fcbf903ed7c8e6-7IxJF0_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: false,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}]
				]
			}
		},
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
		}
	}
</script>

<style>
.bg-custom {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.bg-custom .topImg {
		width: 100%;
		height: 200px;
		/* background-color: #FFFFFF; */
		overflow: hidden;
	}

	.bg-custom .topImg image {
		width: 100%;
		height: 200px;
		position: fixed;
		top: 155rpx;
		z-index: -1;
		/* 		filter: blur(40px);
		transform: scale(1.2); */
	}

	.my-detail {
		background-color: #FFFFFF;
		padding-top: 20upx;
		width: 100%;
		position: relative;
	}

	.my-detail .cu-avatar {
		position: absolute;
		top: -50upx;
		left: 30upx;
	}

	.fixedBox {
		z-index: 9999;
	}
</style>
