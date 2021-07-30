<template name="uctest">
	<view>
		<view class="cu-tabbar-height"></view>
		<scroll-view scroll-y class="page">
			<view style="height: 20px;"></view>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/uctest/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"uctest",
		data() {
			return {
				elements: [
				  {
					  title:'新闻轮播',
					  name:'vswiper',
					  color:'green',
					  cuIcon:'colorlens'
				  },
				  {
					  title:'秒杀组件',
					  name:'miaosha',
					  color:'red',
					  cuIcon:'colorlens'
				  },
					{
						title: '动态个人主页',
						name: 'dynamichome',
						color: 'purple',
						cuIcon: 'vipcard'
					},
					{
						title: '发布动态 ',
						name: 'postnews',
						color: 'mauve',
						cuIcon: 'formfill'
					},
					{
						title: '拖动图标单元',
						name: 'swiperitem',
						color: 'pink',
						cuIcon: 'list'
					},
					{
						title: '优惠券',
						name: 'coupon',
						color: 'brown',
						cuIcon: 'newsfill'
					},
					// {
					// 	title: '表单',
					// 	name: 'form',
					// 	color: 'red',
					// 	cuIcon: 'formfill'
					// },
					// {
					// 	title: '时间轴',
					// 	name: 'timeline',
					// 	color: 'orange',
					// 	cuIcon: 'timefill'
					// },
					// {
					// 	title: '聊天',
					// 	name: 'chat',
					// 	color: 'green',
					// 	cuIcon: 'messagefill'
					// },
					// {
					// 	title: '轮播',
					// 	name: 'swiper',
					// 	color: 'olive',
					// 	cuIcon: 'album'
					// },
					// {
					// 	title: '模态框',
					// 	name: 'modal',
					// 	color: 'grey',
					// 	cuIcon: 'squarecheckfill'
					// },
					// {
					// 	title: '步骤条',
					// 	name: 'steps',
					// 	color: 'cyan',
					// 	cuIcon: 'roundcheckfill'
					// }
				],
			};
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
