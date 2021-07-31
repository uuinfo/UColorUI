<template>
<view :class="'cu-progress ' + shape + ' ' + size + ' ' + (striped?'striped':'') + ' ' + (stripedActive?'active':'')">
    <view :class="'bg-' + bgColor" :style="'width:' + step + '%;'">{{text}}</view>
  </view>
</template>

<script>
const app = getApp();

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    shape: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'red',
      default: 'red'
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    striped: {
      type: Boolean,
      default: 0
    },
    step: {
      type: Number,
      default: 0
    },
    stripedActive: {
      type: Boolean,
      default: 0
    },
    isRatioList: {
      type: Boolean,
      default: 0
    },
    ratioList: {
      type: Object
    }
  },
  //组件的一些配置选项
  options: {
    addGlobalClass: true
  },
  mounted: function () {},
  methods: {}
};
</script>
