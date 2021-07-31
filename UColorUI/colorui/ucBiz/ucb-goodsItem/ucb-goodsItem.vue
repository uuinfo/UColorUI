


<template name="mc-goodsitem">
	<view class="cu-list menu-avatar">
		
		<view class="cu-item" style="height: 100px;">
			<view class="cu-avatar xl" style="border-radius: 13rpx; " :style="{backgroundImage: 'url(' + itemdetail.goods_thumb + ')', backgroundSize:'contain'}"></view>
			
			<view class="content flex-sub" style="padding-bottom: 35px; margin-left: 15px;">
				<text class="text-black text-overflow" style="font-size: 20rpx;">{{itemdetail.goods_name}}</text>
			</view>
			
			<view class="content flex-sub" style="padding-top: 50px; margin-left: 15px;">
				<text style="color: #e54d42; font-size: 25rpx;">￥{{itemdetail.market_price}}</text>
			</view>
			
			<view class="action">
				<view class="cuIcon-roundadd text-red" style="padding-top: 50px; font-size: 40rpx;"></view>
			</view>
		</view>
		
	</view>
	
	
</template>

<script>
	export default {
	        name: "mc-goodsitem",
	        data() {
	            return {
	                
	            };
	        },
	        // 此处定义传入的数据
	        props: {
	            itemdetail: {
	                type: Object,
	                value: null
	            }
	        }
	        
	    }
</script>

<style>
	
	.fixed {
		position: fixed;
		z-index: 99;
	}
	
	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}
	
	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #ff557f;
		margin: 0;
		border: none;
		height: 100px;
		position: relative;
	}
	
	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}
	
	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}
	
	.VerticalBox {
		display: flex;
	}
	
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
	
	
	
	.text-overflow
	{
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
</style>
