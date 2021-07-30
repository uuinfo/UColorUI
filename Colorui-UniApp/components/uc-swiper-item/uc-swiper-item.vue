
 /**
  * uc-swiper-item  横向拖动单元格格式的菜单栏组件
  * @property {Array} siList 传入组件的数据，其元素为Object格式,每个Object的key值有 
  *
  * img {String} (图片)
  * title {String} (标题)
  * isGet {Boolean} (是否领取)
  *
  * @example <uc-swiper-item :siList="topicList"></uc-swiper-item>
  */
 
<template>
	<view>
		<scroll-view scroll-x class="topicBox topicImg bg-white solid-top padding-bottom-xs padding-right-sm">
			<view v-for="(item,index) in siList" :key="index" class="cu-item bg-gray">
				<view class="cu-avatar round" :style="[{backgroundImage:'url(' + item.img + ')'}]"></view>
				<view class="text-bold">
					{{item.title}}
				</view>
				<view class="text-xs text-orange" v-if="item.isGet">
					已领取
				</view>
				<view class="text-xs text-gray" v-else>
					未领取
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			siList:'',
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
