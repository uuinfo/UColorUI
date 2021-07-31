
 /**
  * uc-postNews  动态发布页面组件
  * @property {String} btncolor 设置发布按钮颜色,值为mian.css中的bg开头的值，例bg-orange
  * @method doOk() {return void} 设置点击发布按钮事件的接口
  * @example <uc-postNews btnColor="bg-red" @doOk="tapOkMethod"></uc-postNews>
  */


<template>
	<view>
		<custom bgColor="bg-white" :isBack="true">
			<block slot="backText">取消</block>
		</custom>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item, index) in imgList" :key="index">
					<video :src="imgList[index]" :controls="false" objectFit="cover"></video>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index"><text class="cuIcon-close"></text></view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length < 4"><text class="cuIcon-cameraadd"></text></view>
			</view>
		</view>
		<view class=""></view>
		<view class="cu-form-group"><textarea maxlength="-1" :disabled="modalName != null" @input="textareaInput" placeholder="说说你此刻发生的事吧"></textarea></view>
		<view class="cu-form-group margin-top">
			<view class="padding-right">#</view>
			<view class="title">参与话题</view>
			<view class="arrow">
				<view class="">
					<view class="cu-tag bg-gray round">
						<text class="cuIcon-presentfill text-red margin-right-xs"></text>
						关联话题更有机会上推荐哦
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-form-group">
			<view class="cuIcon-goods padding-right-sm"></view>
			<view class="title">关联商品</view>
			<view class="arrow"><view class="">去关联</view></view>
		</view>
		
		<view class="padding-xl text-center">
			<button @tap="doOk" class="cu-btn round shadow" :class="btnColor">发布</button>
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			btnColor:{
				type:String,
				default:'bg-orange'
			}
		},
		data() {
			return {
				imgList: [],
				modalName: null,
				textareaValue: ''
			};
		},
		methods:{
			ChooseImage() {
				uni.chooseVideo({
					count: 1, //默认9
					sourceType: ['camera', 'album'],
					success: res => {	
						console.log(res)
						this.imgList = this.imgList.concat(res.tempFilePath);
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
						}
					}
				});
			},
			textareaInput(e) {
				this.textareaValue = e.detail.value;
			},
			doOk: function () {
			  this.$emit('tapOk');
			}
		}
	}
</script>

<style>
.cu-form-group textarea {
	margin-top: 10upx;
	}
</style>
