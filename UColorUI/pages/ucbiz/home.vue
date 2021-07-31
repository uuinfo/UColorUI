<template name="ucbiz">
	<view>
		<view class="cu-tabbar-height"></view>
		<scroll-view scroll-y class="page">
			<view style="height: 20px;"></view>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/ucbiz/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
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
		name:"ucbiz",
		data() {
			return {
				elements: [
					  {
						  title:'秒杀列表',
						  name:'mslist',
						  color:'blue',
						  cuIcon:'colorlens'
					  },
					  {
						  title:'商品列表',
						  name:'goodslist',
						  color:'yellow',
						  cuIcon:'colorlens'
					  },
					  {
						title: '动态列表',
						name: 'dynamiclist',
						color: 'cyan',
						icon: 'send'
					  },
					  {
						title: '动态详情',
						name: 'dynamicdetail',
						color: 'olive',
						icon: 'edit'
					  },			
					{
						title: '订单列表',
						name: 'orderitem',
						color: 'purple',
						cuIcon: 'vipcard'
					},
					{
						title: '用户列表 ',
						name: 'userlist',
						color: 'mauve',
						cuIcon: 'formfill'
					},
					{
						title: '地址列表',
						name: 'address',
						color: 'pink',
						cuIcon: 'list'
					},
					// {
					// 	title: '卡片',
					// 	name: 'card',
					// 	color: 'brown',
					// 	cuIcon: 'newsfill'
					// },
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
