<template>
    <section class="content">
      <h2>ColorPicker 颜色选择器</h2>
      <p>用于颜色选择，支持多种格式。</p>
      <h3>基础用法</h3>
      <div class="demo-block demo-box demo-zh-CN demo-color-picker">
        <div class="source" style="padding: 0;font-size: 0;">
          <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
          </div>
        </div>
      </div>
      <h3>选择透明度</h3>
      <div class="demo-block demo-box demo-zh-CN demo-color-picker">
        <div class="source">
          <el-color-picker v-model="color3" show-alpha></el-color-picker>
        </div>
      </div>
      <h3>不同尺寸</h3>
      <div class="demo-block demo-box demo-zh-CN demo-color-picker">
        <div class="source">
          <el-color-picker v-model="color4"></el-color-picker>
          <el-color-picker v-model="color4" size="medium"></el-color-picker>
          <el-color-picker v-model="color4" size="small"></el-color-picker>
          <el-color-picker v-model="color4" size="mini"></el-color-picker>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      color1: '#409EFF',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)',
      color4: '#409EFF'
    }
  },
  methods: {

  }
}
</script>
<style>
  .demo-color-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-color-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-color-picker .el-color-picker+.el-color-picker {
    margin-left: 20px;
  }
</style>
