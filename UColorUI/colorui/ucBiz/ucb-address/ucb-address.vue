<template>
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
			<text class='icon-delete text-orange text-xxl'></text>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
