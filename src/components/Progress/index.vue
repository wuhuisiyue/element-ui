<template>
  <section class="content">
    <h2>Progress 进度条</h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>
    <h3>线形进度条 — 百分比外显</h3>
    <demoblock>
      <div class="source" slot="source">
        <el-progress :percentage="0"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="80" color="#8e71c7"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
    </demoblock>
    <h3>线形进度条 — 百分比内显</h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
      </div>
    </demoblock>
    <h3>环形进度条</h3>
    <demoblock>
      <div class="source" slot="source">
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
    </demoblock>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
  .demo-box.demo-Progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
  .demo-box.demo-Progress .el-progress--circle {
    margin-right: 15px;
  }
</style>
