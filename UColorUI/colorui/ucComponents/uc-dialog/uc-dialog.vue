<template>
<view class="cu-modal " :class="mainClass">
  <view class="cu-dialog">
    <view class="cu-bar justify-end " :class="tpclass">
      <view class="content">{{title}}
      	<slot name="title"></slot>
      </view>
      <view class="action" @tap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-0 " :class="bdclass">{{content}}
      <slot name="content"></slot>
    </view>
    <view class="cu-bar " :class="bottomClass" :hidden="bottom==0">
      <view class="action" v-if="btnLayout">
        <slot name="button"></slot>
        <button class="cu-btn line-green text-green " :class="exitclass" @tap="doExit">{{exitText}}</button>
        <button class="cu-btn bg-green margin-left " :class="okclass" @tap="doOk">{{okText}}</button>
      </view>
      <block v-else>
        <slot name="button"></slot>
        <view class="action margin-0 flex-sub text-green solid-left " :class="exitclass" @tap="doExit">{{exitText}}</view>
        <view class="action margin-0 flex-sub  solid-left " :class="okclass" @tap="doOk">{{okText}}</view>      
      </block>
    </view> 
  </view>
</view>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'ucDialog'
    },
    show: {
      type: Boolean,
      default: false
    },
		myclass:{
			type: String,
			default:''
		},
		tpclass:{
			type: String,
			default:''
		},
		bdclass:{
			type:String,
			default:''
		},
		bmclass:{
			type:String,
			default:''
		},
		okclass:{
			type:String,
			default:''
		},
		exitclass:{
			type:String,
			default:''
		},
    bottom: {
      type: Boolean,
      default: true
    },
    //标题
    title: {
      type: String,
      default: ''
    },
    //显示内容 
    content: {
      type: String,
      default: ''
    },
    //底部按钮布局方式
    btnLayout: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: "确定"
    },
    exitText: {
      type: String,
      default: "取消"
    }
  },
	computed:{
		mainClass:function(){
			let sClass = this.show? 'show' :'';
			sClass += this.myclass;
			return sClass;
		},
		/*
		topClass:function(){
			return this.tpclass;
		}
		bodyClass:function(){
			return this.bdclass;
		},
		*/
		bottomClass:function(){
			let sClass = this.btnLayout? 'justify-end':'';
			sClass += this.bmclass;
			return sClass;
		},
	},
  //组件的一些配置选项
  externalClasses: ['myclass', 'tpclass', 'bdclass', 'bmclass', 'okclass', 'exitclass'],
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  mounted: function () {},
  methods: {
    buttonTap(e) {
      if (!this.show) return;
      const dataset = e.currentTarget.dataset;
      this.$emit('tapButton', {
        detail: {
          index: Number(dataset.index)
        }
      });
    },

    doOk: function () {
      if (!this.show) return;
      this.$emit('tapOk', {
        detail: {}
      });
    },
    doExit: function () {
      if (!this.show) return;
      this.$emit('tapExit', {
        detail: {}
      });
    },

    hideModal(e) {
			//this.show = null;
      if (!this.show) return;
      this.$emit('tapClose', {
        detail: {}
      });
    }

  }
};
</script>
<style>
</style>