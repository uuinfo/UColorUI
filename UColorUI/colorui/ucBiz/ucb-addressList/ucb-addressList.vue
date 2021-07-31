/**
  * ucb-addressList  地址列表组件
  * @property {Array} addressList 传入组件的地址列表数据，其元素为Object格式,每个Object的key值有 
  *
  * | 参数       | 作用   |类型    |  默认值 |
  * | --------   | -----:  |-----:  | :----:  |
  * | id        | 列表序号 |int  |   ''    |
  * | name      | 收货人姓名 | String |   '' |
  * | mobile    | 收货人电话 | String  |  ''     |
  * | isDefault  | 默认下表位置 | Boolean  |  ''     |
  * | detailedAddress  | 详细地址 | String  |  ''     |
  *
  * @method tapEdit(event) {return void} 点击跳转至编辑页面
  * @method tapDelete(event) {return void} 点击删除地址列表个体
  * 
  * @example <ucb-addressList :addressList="addressList" @tapDelete="tapDelete" @tapEdit="tapEdit"></ucb-addressList>
  */

<template>
	<view>
		<view class="cu-list menu" v-if="addressList.length > 0">
			<view class="cu-item" :class="item.isDefault?'cur':''" v-for="(item,index) in addressList" :key="index" @tap="addressAddOrUpdate"
			 :data-address-id="item.id">
				<view class='content padding-tb-sm'>
					<view class='margin-bottom-sm'>
						<text class='text-bold'>{{item.name}}</text>
						<text class='margin-lr-sm'>{{item.mobile}}</text>
						<view class='cu-tag line-orange radius' v-if="item.isDefault">默认</view>
					</view>
					<view class='text-gray text-sm text-cut' style="width: 600rpx;">
						{{item.detailedAddress}}</view>
				</view>
				<view class='action' @tap.stop="deleteAddress" :data-address-id="item.id">
					<text class='cuIcon-delete text-orange' style="font-size:40rpx ;"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			addressList:""
		},
		data() {
			return {
				
			};
		},
		methods:{
			/**  点击跳转至编辑页面的接口 */
			addressAddOrUpdate(event) {
				this.$emit('tapEdit', {
				  detail: {
				    event:event
				  }
				});
				
			},
			deleteAddress(event) {
				this.$emit('tapDelete', {
				  detail: {
				    event:event
				  }
				});
				
			}
		}
	}
</script>

<style>

</style>
