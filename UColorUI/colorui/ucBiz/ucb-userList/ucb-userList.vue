
 /**
  * ucb-userList  用户列表组件
  * @property {Array} userlist 传入组件的用户数据列表，其元素为Object格式,每个Object的key值有 
  *
  * | 参数     | 作用   |类型    |  默认值 |
  * | -------- | -----:  |-----:  | :----:  |
  * | imgurl   | 用户头像图片url |String  |   ''    |
  * | name     | 用户昵称 | String |   '' |
  * | message  | 最近消息显示 | String  |  ''     |
  *
  * @example <ucb-userList :list="userlist"></ucb-userList>
  */

<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in list" :key="index">
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
			list:''
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
