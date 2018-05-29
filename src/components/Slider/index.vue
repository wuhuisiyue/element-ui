<template>
    <section class="content">
      <h2>Slider 滑块</h2>
      <p>通过拖动滑块在一个固定区间内进行选择</p>
      <h3>基础用法</h3>
      <p>在拖动滑块时，显示当前值</p>
      <div class="demo-block demo-box demo-zh-CN demo-slider">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
          </div>
        </div>
      </div>
      <h3>离散值</h3>
      <p>选项可以是离散的</p>
      <div class="demo-block demo-box demo-zh-CN demo-slider">
        <div class="source">
          <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider
              v-model="value6"
              :step="10">
            </el-slider>
          </div>
          <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider
              v-model="value7"
              :step="10"
              show-stops>
            </el-slider>
          </div>
        </div>
      </div>
      <h3>带有输入框</h3>
      <p>通过输入框设置精确数值</p>
      <div class="demo-block demo-box demo-zh-CN demo-slider">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value8"
              show-input>
            </el-slider>
          </div>
        </div>
      </div>
      <h3>范围选择</h3>
      <p>支持选择某一数值范围</p>
      <div class="demo-block demo-box demo-zh-CN demo-slider">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value9"
              range
              show-stops
              :max="10">
            </el-slider>
          </div>
        </div>
      </div>
      <h3>竖向模式</h3>
      <div class="demo-block demo-box demo-zh-CN demo-slider">
        <div class="source">
          <div class="block">
            <el-slider
              v-model="value10"
              vertical
              height="200px">
            </el-slider>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8],
      value10: 0
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  },
  mounted() {

  }
}
</script>
<style>
  .demo-box.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }
  .demo-box.demo-slider .block:last-child {
    border-bottom: none;
  }
  .demo-box.demo-slider .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }
  .demo-box.demo-slider .demonstration+.el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>
