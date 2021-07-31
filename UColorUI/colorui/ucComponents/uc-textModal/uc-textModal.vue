<template>
<view :class="'cu-modal ' + (modalName==propModalName?'show':'')">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content">编辑{{propModalTitle}}</view>
      <view class="action" @tap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      <view class="cu-form-group">
        <view v-if="!propCustom">
          <view class="title">{{propLabel}}</view>
          <view class="action">
            <input :placeholder="'请输入' + propTitle" :value="propValue"></input>
          </view>
        </view>
        <view v-else>
          <slot></slot>  
        </view>    
      </view>
    </view>
    <view class="cu-bar bg-white justify-end">
      <view class="action">
        <button class="cu-btn line-green text-green" @tap="doCancel">取消</button>
        <button class="cu-btn bg-green margin-left" @tap="doOK">确定</button>
      </view>
    </view>
  </view>
</view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {
      modalName: ''
    };
  },

  components: {},
  props: {
    modalName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    propModalType: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    propCustom: {
      type: Boolean,
      default: 0
    }
  },
  //组件的一些配置选项
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  mounted: function () {},
  methods: {
    doOK: function () {},
    doCancel: function () {
      this.setData({
        modalName: null
      });
    }
  }
};
</script>
<style>
/* components/showModal/showModal.wxss */
</style>