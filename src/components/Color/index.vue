<template>
    <section class="content">
      <h2 id="color-se-cai">Color 色彩</h2>
      <p>Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受</p>
      <h3 id="zhu-se">主色</h3>
      <p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
      <el-row>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box bg-blue">
            Blue
            <div class="value">#409EFF</div>
          </div>
        </el-col>
      </el-row>
      <h3 id="fu-zhu-se">辅助色</h3>
      <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
      <el-row>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box bg-success">
            Success
            <div class="value">#67C23A</div>
          </div>
        </el-col>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box bg-warning">
            Warning
            <div class="value">#67C23A</div>
          </div>
        </el-col>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box bg-danger">
            Danger
            <div class="value">#67C23A</div>
          </div>
        </el-col>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box bg-info">
            Info
            <div class="value">#67C23A</div>
          </div>
        </el-col>
      </el-row>
      <h3 id="zhong-xin-se">中性色</h3>
      <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
      <el-row>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box-group">
            <div class="demo-color-box bg-text-primary">
              主要文字
              <div class="value">#303133</div>
            </div>
            <div class="demo-color-box bg-text-regular">
              常规文字
              <div class="value">#606266</div>
            </div>
            <div class="demo-color-box bg-text-secondary">
              次要文字
              <div class="value">#909399</div>
            </div>
            <div class="demo-color-box bg-text-placeholder">
              占位文字
              <div class="value">#C0C4CC</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :xs="12">
          <div class="demo-color-box-group">
            <div class="demo-color-box bg-border-base">
              一级边框
              <div class="value">#DCDFE6</div>
            </div>
            <div class="demo-color-box bg-border-light">
              二级边框
              <div class="value">#E4E7ED</div>
            </div>
            <div class="demo-color-box bg-border-lighter">
              三级边框
              <div class="value">#EBEEF5</div>
            </div>
            <div class="demo-color-box bg-border-extra-light">
              四级边框
              <div class="value">#F2F6FC</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style scoped>
  /* .el-row {
    margin-left: -6px;
    margin-right: -6px;
  }*/
  .el-col {
    padding-left: 6px;
    padding-right: 6px;
  } 
</style>
<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
  }
  .bg-blue {
    background-color: #409eff;
  }
  .bg-success {
    background-color: #67c23a;
  }
  .bg-warning {
    background-color: #e6a23c;
  }
  .bg-danger {
    background-color: #f56c6c;
  }
  .bg-info {
    background-color: #909399;
  }
  .bg-text-primary{
    background-color: #303133
  }
  .bg-text-regular{
    background-color: #606266
  }
  .bg-text-secondary{
    background-color: #909399
  }
  .bg-text-placeholder{
    background-color: #C0C4CC
  }
  .bg-border-base{
    background-color: #DCDFE6
  }
  .bg-border-light{
    background-color: #E4E7ED
  }
  .bg-border-lighter{
    background-color: #EBEEF5
  }
  .bg-border-extra-light{
    background-color: #F2F6FC
  }
  [class*=" bg-border-"] {
    color: #303133;
  }

  .demo-color-box .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px;
  }
</style>
