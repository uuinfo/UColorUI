<template>
<view :class="'cu-modal myclass ' + (show?'show':'')">
  <view class="cu-dialog">
    <view :class="'cu-bar bg-' + bgColor + ' justify-' + justify">
      <view class="content">{{title}}</view>
      <view class="action" @tap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view :class="'padding-' + padding">{{content}}
      <slot name="content"></slot>
    </view>
    <slot name="bottom"></slot>
  </view>
</view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {
      modalName: 'ucModal'
    };
  },

  components: {},
  props: {
    name: {
      type: String,
      default: 'ucModal'
    },
    show: {
      type: Boolean,
      default: 0
    },
    padding: {
      type: String,
      default: 'xl'
    },
    justify: {
      type: String,
      default: 'end'
    },
    bgColor: {
      type: String,
      default: 'white'
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
    }
  },
  //组件的一些配置选项
  externalClasses: ['myclass'],
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  mounted: function () {},
  methods: {
    hideModal(e) {
      this.setData({
        show: 0
      });
    }

  }
};
</script>
<style>
</style>