<template>
	<view>
		<view class="cu-custom" :class="myclass" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<block v-if="!custom">
					<view class="action" :class="backclass" @tap="doBack" v-if="back && !home">
						<text class="cuIcon-back"></text>
						<slot name="backText"></slot>
					</view>
					<view class="action" :class="homeclass" @tap="doHome"  v-if="!back && home">
						<text class="cuIcon-home"></text>
						<slot name="homeText"></slot>
					</view>
					<view class="action border-custom" v-if="back && home" :style="capsuleStyle">
						<text class="cuIcon-back" :class="backclass" @tap="doBack"></text>
						<text class="cuIcon-home" :class="homeclass" @tap="doHome"></text>
					</view>					
					<view class="content" :style="[{top:StatusBar + 'px'}]">{{title}}
						<slot name="title"></slot>
					</view>
					<slot name="right"></slot>
				</block>
				<view :class="bdclass" v-if="custom">
					<slot name="custom"></slot>
				</view>
			</view>
		</view>
		<view @tap.stop="closeNavSelect" :class="'filter-menu ' + (nav_select?'navBarActive':'')" :hidden="!nav_select">    
				<view class="filter-menu-list-new ts-5" :style="filterMenuPosition">
				<view class="custom_ul">
						<view @tap="doNavigate" class="custom_li" data-index="home">
								<text class="iconfont icon-home"></text>
								<text class="smallTxt">主页</text>
						</view>
						<view @tap="doNavigate" class="custom_li" data-index="category">
								<text class="iconfont icon-fenlei"></text>
								<text class="smallTxt">分类</text>
						</view>
						<view @tap="doNavigate" class="custom_li" data-index="cart">
								<text class="iconfont icon-cart"></text>
								<text class="smallTxt">购物</text>
						</view>
						<view @tap="doNavigate" class="custom_li" data-index="user">
								<text class="iconfont icon-profile"></text>
								<text class="smallTxt">我的</text>
						</view>
						<view class="w"></view>
						<slot name="right"></slot>
				</view>
				</view>
		</view>		
	</view>
</template>

<script>
	export default {
		options: {
			multipleSlots: true,
			addGlobalClass: true
		},		
		
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				nav_select: 0,
				filterMenuPosition: ""
			};
		},
		name: 'uc-navBar',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if(this.background){
					style = `${style}background:${this.background};`; 
				}
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style;
			},
			capsuleStyle() {
				var style = `width:${Custom.width}px;height:${Custom.height}px;margin-left:calc(750rpx - ${Custom.right}px)`;
				return capsuleStyle;
			}
		},
		props: {
			myclass:{
				type: String,
				default:''
			},
			bdclass:{
				type: String,
				default: ''
			},
			homeclass:{
				type: String,
				default: ''
			},
			backclass:{
				type: String,
				default: ''
			},
			title:{
				type:String,
				default:''
			},
			background:{
				type:String,
				default: '#fff'
			},
			bgColor: {
				type: String,
				default: ''
			},
			searchText: {
				type: String,
				default: '点我搜索'
			},
			searchBar: {
				type: [Boolean, String],
				default: false
			},
			back: {
				type: [Boolean, String],
				default: false
			},
			home: {
				type: [Boolean, String],
				default: false
			},	
			custom: {
				type: [Boolean, String],
				default: false
			},						
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			//默认事件处理函数
			gotoBackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			},
			// 返回事件
			doBack: function () {
				let ret = this.$emit('back', {
					detail: {}
				});
				if (!ret) {
					this.gotoBackPage();
				}
			},			
			doHome: function () {
				this.switchNav();
			},
			switchNav: function () {
				this.setData({
					nav_select: !this.nav_select
				});
			},
			closeNavSelect: function () {
				this.setData({
					nav_select: 0
				});
			},
			doNavigate: function (t) {
				var e = t.currentTarget.dataset.index;
				"home" == e ? uni.reLaunch({
					url: "/pages/index/index"
				}) : "search" == e ? uni.reLaunch({
					url: "/pages/search/search"
				}) : "category" == e ? uni.reLaunch({
					url: "/pages/category/category"
				}) : "cart" == e ? uni.reLaunch({
					url: "/pages/flow/index"
				}) : "user" == e && uni.reLaunch({
					url: "/pages/user/index"
				});
			},			
			doSearch: function () {
			  this.$emit('search', {
			    detail: {}
			  });
			},
		}
	}
</script>

<style>

.filter-menu {
    position: fixed;
    left: 0px;
    top: 0px;
    right:0px;
    bottom:0px;
    border-top: #666;
    z-index: 9999;
  }
  
  .filter-menu-title {
    width: 76rpx;
    height: 76rpx;
    border-radius: 100%;
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .filter-menu-title:before, .filter-menu-title:after ,.navigation{
    content: " ";
    display: block;
    font-size: 28rpx;
    color: #fff;
    background-color: #000;
    margin-left: 10rpx;
    position: absolute;
    top: 50%;
    margin-top: -20rpx;
    text-indent: -0.1rem;
  }
  
  .filter-menu-title:after {
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  
  .filter-menu-list-new {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 2.3rem;
    overflow: hidden;
    height: 0;
    opacity: 0;
    width: 76rpx;
    position: absolute;
    visibility: hidden;
    top:0;
    left:0;
  }
  
  .filter-menu-list-new .custom_ul {
    width: 76rpx;
    margin-top: 1rem;
  }
  
  .filter-menu-list-new .custom_ul .custom_li {
    margin: 0 0.2rem;
    color: #fff;
    text-align: center;
    padding: 18rpx 0;
    display: block;
  }
  .filter-menu-list-new .custom_ul .custom_li .iconfont {
    -webkit-box-flex: 1;
    flex: 1;
    margin: 0 5rpx;
    font-size: 14px;
  }

  .icon-fenlei:before {
    content: "\e6af";
  }
  .icon-home:before {
    content: "\e60a";
  }
  .filter-menu-list-new .custom_ul .custom_li .text {
    font-size: 34rpx;
    text-overflow: ellipsis;
  }
  
  .filter-menu-list-new .custom_ul .custom_li .em {
    display: block;
    font-size: 1.1rem;
    right: -0.2rem;
    padding: 0.1rem 0.4rem;
  }
  
  .filter-menu-list-new .custom_ul .custom_li.w {
    height: 50rpx;
  }
  
  .filter-menu.navBarActive .filter-menu-title {
    opacity: 1;
  }
  
  .filter-menu.navBarActive .filter-menu-list-new {
    right: 0;
    height: inherit;
    opacity: 1;
    visibility: visible;
  }
  
  .filter-menu.navBarActive .filter-menu-title:before, .filter-top:before {
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  
  .filter-menu.navBarActive .filter-menu-title:after, .filter-top:after {
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .filter-menu-list-new .custom_ul .custom_li .smallTxt {
    font-size: 26rpx;
    letter-spacing: 2rpx;
    width: inherit;
    display: block;
    white-space: normal;    
}
</style>
