<template>
  <section class="content">
    <h2>Carousel 走马灯</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法</p>
    <demoblock>
      <div class="source small" slot="source" style="padding: 0;">
        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发</span>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="block">
          <span class="demonstration">Click 指示器触发</span>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </demoblock>
    <h3>指示器</h3>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <demoblock>
      <div class="source" slot="source">
        <template>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
    </demoblock>
    <h3>切换箭头</h3>
    <p>可以设置切换箭头的显示时机</p>
    <demoblock>
      <div class="source" slot="source">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </demoblock>
    <h3>卡片化</h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <demoblock>
      <div class="source medium" slot="source">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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
  .demo-Carousel {
    font-size: 0;
  }
  .demo-Carousel .block {
    padding: 30px;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-Carousel .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-Carousel .el-carousel__container {
    text-align: center;
  }
  .demo-Carousel .el-carousel__item h3 {
    color: #fff;
    font-size: 18px;
    line-height: 300px;
    margin: 0;
  }
  .demo-Carousel .small h3 {
    font-size: 14px;
    line-height: 150px;
  }
  .demo-Carousel .medium h3 {
    font-size: 14px;
    line-height: 200px;
  }
  .demo-Carousel .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .demo-Carousel .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
