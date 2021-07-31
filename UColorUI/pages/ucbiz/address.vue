<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">地址列表</block></cu-custom>
		<ucb-addressList :addressList="addressList" @tapDelete="tapDelete" @tapEdit="tapEdit"></ucb-addressList>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [{
					id: 12,
					name: "WXG",
					mobile: '12312312312',
					isDefault: true,
					detailedAddress: '广东省广州市荔湾区爱上大声回答'
				}, {
					id: 11,
					name: "WXG",
					mobile: '12312312312',
					isDefault: false,
					detailedAddress: '广东省广州市荔湾区爱上大声回答'
				}],
			}
		},
		methods: {
			tapEdit(event) {
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
					console.log('/colorui/ucBiz/ucb-addressList/edit?id=' + event.currentTarget.dataset.addressId)
					uni.navigateTo({
						url: '/colorui/ucBiz/ucb-addressList/edit?id=' + event.currentTarget.dataset.addressId
					})
				}
			},
			tapDelete(event) {
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
