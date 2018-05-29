<template>
    <section class="content">
      <h2>Rate 评分</h2>
      <p>评分组件</p>
      <h3>基础用法</h3>
      <div class="demo-block demo-box demo-zh-CN demo-rate">
        <div class="source" style="padding: 0; font-size: 0;">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate
              v-model="value2"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
        </div>
      </div>
      <h3>辅助文字</h3>
      <p>用辅助文字直接地表达对应分数</p>
      <div class="demo-block demo-box demo-zh-CN demo-rate">
        <div class="source">
          <el-rate
            v-model="value3"
            show-text>
          </el-rate>
        </div>
      </div>
      <h3>其他Icon</h3>
      <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
      <div class="demo-block demo-box demo-zh-CN demo-rate">
        <div class="source">
          <el-rate
            v-model="value4"
            :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </div>
      <h3>只读</h3>
      <p>只读的评分用来展示分数，允许出现半星</p>
      <div class="demo-block demo-box demo-zh-CN demo-rate">
        <div class="source">
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 3.7,
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style>
  .demo-rate .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-rate .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
