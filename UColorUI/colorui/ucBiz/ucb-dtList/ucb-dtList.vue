/**
 * 动态列表（瀑布流）组件
 * @property {Array} mslist 传入动态列表的数据列表，其元素为Object格式，
 * 单个元素的key值有: 
 *
 * | 参数       | 作用   |类型    |  默认值 |
 * | --------   | -----:  |-----:  | :----:  |
 * | title     | 动态标题 |String  |   ''    |
 * | imgUrl       | 动态主图 | String |   '' |
 * | avatar    | 人物头像图 | Array  |  ''     |
 * | name   | 动态发布人名称 | String  |  ''     |
 * | favor  | 点赞数 | int  |  ''     |
 * | isFavor   | 是否点赞 | Boolean  |  ''     |
 * 
 * @example <ucb-dtList :list="list"></ucb-dtList>
 */

<template>
	<view>
		<view class="findCard">
			<view class="cu-card goods col-goods" v-for="(card,id) in list" :key="id">
				<view class="cu-item shadow bg-white" v-for="(item,index) in card" :key="index" @tap="toDetail(index)">
					<image :src="item.imgUrl" mode="widthFix"></image>
					<view class="content">
						<view class="title">
							<view class="text-line2cut">{{item.title}}</view>
						</view>
						<view class="flex justify-between align-center margin-top-xs">
							<view class="flex align-center">
								<view class="cu-avatar sm round" :style="[{backgroundImage:'url(' + item.avatar + ')'}]"></view>
								<view class="text-cut text-sm flex-sub">{{item.name}}</view>
							</view>
							<view class="padding-left-xs text-right flex align-centers">
								<view :class="item.isFavor?'icon-appreciatefill text-red':'icon-appreciate text-gray' "></view>
								<view class="text-gray text-sm margin-left-xs">{{item.favor}}</view>
							</view>
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
			list:""
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.findCard {
		display: flex;
		padding: 0 10upx;
	}

	.findCard .cu-card {
		flex: 1;
	}

	.findCard .cu-card.goods .cu-item {
		margin: 20upx 10upx !important;
	}

	.findCard .cu-card.goods.col-goods>.cu-item .content {
		padding: 10rpx 15upx;
	}

	.findCard .cu-card.goods.col-goods>.cu-item .content .title {
		font-size: 24upx;
		font-weight: 300;
	}

	.findCard .cu-card.goods.col-goods>.cu-item .flex .text-cut {
		width: 150upx;
		margin-left: 10upx;
	}
</style>
