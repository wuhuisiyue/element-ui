<template>
    <section class="content">
      <h2>InputNumber 计数器</h2>
      <p>仅允许输入标准的数字值，可定义范围</p>
      <h3>基础用法</h3>
      <div class="demo-block demo-box demo-zh-CN demo-input-number">
        <div class="source">
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
      </div>
      <h3>禁用状态</h3>
      <div class="demo-block demo-box demo-zh-CN demo-input-number">
        <div class="source">
          <el-input-number v-model="num2" :disabled="true"></el-input-number>
        </div>
      </div>
      <h3>步数</h3>
      <p>允许定义递增递减的步数控制</p>
      <div class="demo-block demo-box demo-zh-CN demo-input-number">
        <div class="source">
          <el-input-number v-model="num3" :step="2"></el-input-number>
        </div>
      </div>
      <h3>尺寸</h3>
      <p>
        额外提供了 
        <code>medium</code>、
        <code>small</code>、
        <code>mini</code> 
        三种尺寸的数字输入框
      </p>
      <div class="demo-block demo-box demo-zh-CN demo-input-number">
        <div class="source">
          <el-input-number v-model="num4"></el-input-number>
          <el-input-number size="medium" v-model="num5"></el-input-number>
          <el-input-number size="small" v-model="num6"></el-input-number>
          <el-input-number size="mini" v-model="num7"></el-input-number>
        </div>
      </div>
      <h3>按钮位置</h3>
      <div class="demo-block demo-box demo-zh-CN demo-input-number">
        <div class="source">
          <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 5,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  },
  mounted() {

  }
}
</script>
<style>
  .demo-box.demo-input-number .el-input-number+.el-input-number {
    margin-left: 10px;
  }
</style>
