/**
  * ucb-address-list  地址列表组件
  * @property {Array} addressList 传入组件的地址列表数据，其元素为Object格式,每个Object的key值有 
  *
  * id {int} (列表序号)
  * name: {String} (收货人姓名)
  * mobile: {String} (收货人电话)
  * isDefault: {Boolean} (默认下表位置)
  * detailedAddress: {String} (详细地址)
  *
  * @example <ucb-address-list :addressList="addressList"></ucb-address-list>
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
				console.log(event)
				//返回之前，先取出上一页对象，并设置addressId
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2];
			
				if (prevPage.route == "pages/cart/form" && event.currentTarget.dataset.addressId != 0) {
					try {
						uni.setStorageSync('addressId', event.currentTarget.dataset.addressId);
					} catch (e) {
			
					}
			
					uni.navigateBack();
				} else {
					console.log('/components/ucb-address-list/edit?id=' + event.currentTarget.dataset.addressId)
					uni.navigateTo({
						url: '/components/ucb-address-list/edit?id=' + event.currentTarget.dataset.addressId
					})
				}
			},
			deleteAddress(event) {
				console.log(event.currentTarget)
				let that = this;
				uni.showModal({
					title: '',
					content: '确定要删除地址？',
					success(res) {
						if (res.confirm) {
							let addressId = event.currentTarget.dataset.addressId;
							util.request(api.AddressDelete, {
								id: addressId
							}, 'POST').then(function(res) {
								console.log(res)
								if (res.errno === 0) {
									that.getAddressList();
									uni.removeStorage({
										key: 'addressId',
										success(res) {},
									})
								}
							});
						}
					}
				})
				return false;
			}
		}
	}
</script>

<style>

</style>
