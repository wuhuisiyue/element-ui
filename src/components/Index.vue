<template>
    <div class="">
      <div class="banner">
        <div class="banner-desc">
          <h1>{{title}}</h1>
          <p>{{subtitle}}</p>
        </div>
      </div>
      <div class="jumbotron"></div>
      <div class="content">
        <h2>设计原则</h2>
        <div>
          <el-row :gutter="12" class="cards" style="margin-left: 0;margin-right: 0;">
            <el-col :span="6" :xs="12" :sm="6">
              <el-card shadow="hover" class="card">
                <img src="../assets/images/yuanze1.png" alt="">
                <h4>一致</h4>
                <span>Consistency</span>
              </el-card>
            </el-col>
            <el-col :span="6" :xs="12" :sm="6">
              <el-card shadow="hover" class="card">
                <img src="../assets/images/yuanze2.png" alt="">
                <h4>反馈</h4>
                <span>feedback</span>
              </el-card>
            </el-col>
            <el-col :span="6" :xs="12" :sm="6">
              <el-card shadow="hover" class="card">
                <img src="../assets/images/yuanze3.png" alt="">
                <h4>效率</h4>
                <span>Efficiency</span>
              </el-card>
            </el-col>
            <el-col :span="6" :xs="12" :sm="6">
              <el-card shadow="hover" class="card">
                <img src="../assets/images/yuanze4.png" alt="">
                <h4>可控</h4>
                <span>Controllability</span>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: '网站快速成型工具',
      subtitle: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 20px;
  }
  .banner-desc h1 {
    font-size: 34px;
    margin: 0;
    line-height: 48px;
    color: #555;
  }
  .banner-desc p {
    font-size: 18px;
    line-height: 28px;
    color: #888;
    margin: 10px 0 5px;
  }
  .content h2 {
    margin-bottom: 10px;
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
    text-align: center;
    font-weight: 400;
  }
  
  .cards {
    margin: 30px 0 70px;
  }
  .card {
    background: #fbfcfd;
    height: 244px;
    text-align: center;
  }
  .card img {
    margin: 40px auto 25px;
    width: 80px;
    height: 80px;
  }
  .card h4 {
    font-size: 18px;
    color: #1f2d3d;
    font-weight: 400;
    margin: 0;
  }
  .card span {
    font-size: 14px;
    color: #99a9bf;
  }
</style>
