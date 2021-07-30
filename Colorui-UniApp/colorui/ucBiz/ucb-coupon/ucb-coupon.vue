<template>
	<view class="cu-card coupon no-card" v-if="TabCur==0">
		<view class="cu-item bg-gradual-red" v-for="(item,index) in 10" :key="index">
			<view class="price">
				<view class="text-price text-sl">
					20
				</view>
				<view class="margin-top-xs">
					<button class="cu-btn sm round bg-white">
						<text class="text-red">去使用</text>
					</button>
				</view>
			</view>
			<view class="content">
				<view class="text-xl">
					满200使用，全场通用
				</view>
				<view class="">
					2019年07月08日 到期
				</view>
			</view>
			<view class="coupon-wave-right"></view>
		</view>
	</view>
	<view class="cu-card coupon no-card" v-if="TabCur==1">
		<view class="cu-item bg-grey" v-for="(item,index) in 10" :key="index">
			<view class="price">
				<view class="text-price text-sl">
					20
				</view>
				<view class="margin-top-xs">
					<view class="cu-tag round line-white">
						已使用
					</view>
				</view>
			</view>
			<view class="content">
				<view class="text-xl">
					满200使用，全场通用
				</view>
				<view class="">
					2019年07月08日 到期
				</view>
			</view>
			<view class="coupon-wave-right"></view>
		</view>
	</view>
	<view class="cu-card coupon no-card" v-if="TabCur==2">
		<view class="cu-item bg-white text-gray" v-for="(item,index) in 10" :key="index">
			<view class="price">
				<view class="text-price text-sl">
					20
				</view>
				<view class="margin-top-xs">
					<view class="cu-tag round line-gray">
						已过期
					</view>
				</view>
			</view>
			<view class="content">
				<view class="text-xl">
					满200使用，全场通用
				</view>
				<view class="">
					2019年07月08日 到期
				</view>
			</view>
			<view class="coupon-wave-right"></view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
