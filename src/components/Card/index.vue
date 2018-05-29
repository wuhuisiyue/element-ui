<template>
  <section class="content">
    <h2>Card 卡片</h2>
    <p>将信息聚合在卡片容器中展示。</p>
    <h3>基础用法</h3>
    <p>包含标题，内容和操作。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </demoblock>
    <h3>简单卡片</h3>
    <p>卡片可以只有内容区域。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </demoblock>
    <h3>带图片</h3>
    <p>可配置定义更丰富的内容展示。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-row>
          <el-col :span="8" 
            v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/images/hamburger.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </demoblock>
    <h3>卡片阴影</h3>
    <p>可对阴影的显示进行配置。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">
              总是显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              从不显示
            </el-card>
          </el-col>
        </el-row>
      </div>
    </demoblock>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>
<style>

</style>
<style scoped>
  .box-card {
    width: 480px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .image {
    width: 100%;
    display: block;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .button {
    padding: 0;
    float: right;
  }
</style>
