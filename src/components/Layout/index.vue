<template>
    <section class="content">
      <h2 id="layout-bu-ju">Layout 布局</h2>
      <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
      <h3 id="ji-chu-bu-ju">基础布局</h3>
      <p>使用单一分栏创建基础的栅格布局。</p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
          <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
          <el-row>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
        </div>
      </div>
      <h3 id="fen-lan-jian-ge">分栏间隔</h3>
      <p>分栏之间存在间隔</p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </div>
      </div>
      <h3 id="hun-he-bu-ju">混合布局</h3>
      <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row :gutter="20">
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </div>
      </div>
      <h3 id="fen-lan-pian-yi">分栏偏移</h3>
      <p>支持偏移指定的栏数</p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </div>
      </div>
      <h3 id="dui-qi-fang-shi">对齐方式</h3>
      <p>通过<code>flex</code>布局来对分栏进行灵活的对齐</p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </div>
      </div>
      <h3 id="xiang-ying-shi-bu-ju">响应式布局</h3>
      <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：
        <code>xs</code>
        <code>sm</code>
        <code>md</code>
        <code>lg</code>
        <code>xl</code>
        。
      </p>
      <div class="demo-block demo-box demo-zh-CN demo-layout">
        <div class="source">
          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>
<style>
  /* .page-component .content {
    padding-top: 50px;
  } */
  .demo-layout .el-row {
    margin-bottom: 20px;
  }
  .demo-layout .el-row:last-child {
    margin-bottom: 0;
  }
  .demo-layout .el-col {
    border-radius: 4px;
  }
  .demo-layout .bg-purple-dark {
    background: #99a9bf;
  }
  .demo-layout .bg-purple {
    background: #d3dce6;
  }
  .demo-layout .bg-purple-light {
    background: #e5e9f2;
  }
  .demo-layout .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .demo-layout .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

