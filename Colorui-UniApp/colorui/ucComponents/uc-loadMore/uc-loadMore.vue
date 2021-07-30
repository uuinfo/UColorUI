<template>
<view>
<view class="cu-load myclass erro" v-if="loadError"></view>
<view :class="'cu-load myclass ' + ((loading)?'loading':'over')" v-if="!loadError && !loadModal">{{noMore? '共 '+count+' 条记录，':''}}</view>
<view :class="'cu-load myclass load-modal ' + ((loading)?'loading':'over')" v-if="!loadError && loadModal">
  <!-- <view class='cuIcon-emojifill text-orange'></view> -->
  <image src="/static/images/logo.png" class="png" mode="aspectFit"></image>
  <view class="gray-text">加载中...</view>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    name: {
      type: String,
      default: 'ucLoadMore'
    },
    loading: {
      type: [Boolean, String, Number],
      default: false
    },
    loadError: {
      type: [Boolean, String, Number],
      default: false
    },
    loadModal: {
      type: [Boolean, String, Number],
      default: false
    },
    noMore: {
      type: [Boolean, String, Number],
      default: false
    },
    count: {
      type: Number,
      default: 0
    }
  },
  //组件的一些配置选项
  externalClasses: ['myclass'],
  options: {
    addGlobalClass: true
  },
  mounted: function () {},
  methods: {}
};
</script>
<style>
</style>