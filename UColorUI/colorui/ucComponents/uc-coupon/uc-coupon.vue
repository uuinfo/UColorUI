
 /**
  * uc-coupon  优惠券列表组件
  * @property {Array} cpList 传入组件的数据，其元素为Object格式,每个Object的key值有 
  *  
  * | 参数       | 作用   |类型    |  默认值 |
  * | --------  | -----:  |-----:  | :----:  |
  * | price     | 优惠券额度 |String  |   ''    |
  * | statedesc | 优惠券状态 | String |   '' |
  * | premise   | 优惠券使用前提 | String  |  ''     |
  * | usefuldate| 优惠券过期时间 |String  |   ''    |
  * | cpState   | 优惠券使用状态样式 | 固定值['useful' (可以使用)/ 'used' (已使用)/ 'useless' (已过期)] |   'useful' |
  * @example <uc-coupon :list="cpList"></uc-coupon>
  */

<template>
	<view class="cu-card coupon no-card">
		<view v-for="(item,index) in list" :key="index">
			<view v-if="item.cpState =='useful'" class="cu-item bg-gradual-red">
				<view class="price">
					<view class="text-price text-sl">
						{{item.price}}
					</view>
					<view class="margin-top-xs">
						<button class="cu-btn sm round bg-white">
							<text class="text-red">{{item.statedesc}}</text>
						</button>
					</view>
				</view>
				<view class="content">
					<view class="text-xl">
						{{item.premise}}
					</view>
					<view class="">
						{{item.usefuldate}} 到期
					</view>
				</view>
				<view class="coupon-wave-right"></view>
			</view>
			
			<view v-if="item.cpState =='used'" class="cu-item bg-grey">
				<view class="price">
					<view class="text-price text-sl">
						{{item.price}}
					</view>
					<view class="margin-top-xs">
						<view class="cu-tag round line-white">
							{{item.statedesc}}
						</view>
					</view>
				</view>
				<view class="content">
					<view class="text-xl">
						{{item.premise}}
					</view>
					<view class="">
						{{item.usefuldate}} 到期
					</view>
				</view>
				<view class="coupon-wave-right"></view>
			</view>
			
			<view v-if="item.cpState =='useless'" class="cu-item bg-white text-gray">
				<view class="price">
					<view class="text-price text-sl">
						{{item.price}}
					</view>
					
					<view class="margin-top-xs">
						<view class="cu-tag round line-gray">
							{{item.statedesc}}
						</view>
					</view>
				</view>
				<view class="content">
					<view class="text-xl">
						{{item.premise}}
					</view>
					<view class="">
						{{item.usefuldate}} 到期
					</view>
				</view>
				<view class="coupon-wave-right"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:"",
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
