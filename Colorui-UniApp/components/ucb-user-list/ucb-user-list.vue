
 /**
  * ucb-user-list  用户列表组件
  * @property {Array} userlist 传入组件的用户数据列表，其元素为Object格式,每个Object的key值有 
  *
  * imgurl {String} (用户头像图片url)
  * name {String} (用户昵称)
  * message {String} (最近消息显示)
  *
  * @example <ucb-user-list :userlist="userlist"></ucb-user-list>
  */

<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in userlist" :key="index">
				<view class="cu-avatar round lg" :style="'background-image:url('+item.imgurl+');'"></view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">{{item.name}}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.message}}
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
			userlist:''
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
