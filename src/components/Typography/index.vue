<template>
    <section class="content">
      <h2 id="typography-zi-ti">Typography 字体</h2>
      <p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
      <h3 id="zhong-wen-zi-ti">中文字体</h3>
      <div class="demo-typo-box typo-PingFang">
        和畅惠风
        <div class="name">PingFang SC</div>
      </div>
      <div class="demo-typo-box typo-Hiragino">
        和畅惠风
        <div class="name">Hiragino Sans GB</div>
      </div>
      <div class="demo-typo-box typo-Microsoft">
        和畅惠风
        <div class="name">Microsoft YaHei</div>
      </div>
      <h3 id="ying-wen-shu-zi-zi-ti">英文/数字字体</h3>
      <div class="demo-typo-box typo-Helvetica-neue">
        RGag
        <div class="name">Helvetica Neue</div>
      </div>
      <div class="demo-typo-box typo-Helvetica">
        RGag
        <div class="name">Helvetica</div>
      </div>
      <div class="demo-typo-box typo-Arial">
        RGag
        <div class="name">Arial</div>
      </div>
    </section>
</template>
<script>
export default {
  
}
</script>
<style>
  .demo-typo-box {
    height: 200px;
    width: 200px;
    position: relative;
    border: 1px solid #eaeefb;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 162px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: 4px;
  }
  .demo-typo-box .name {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    border-top: 1px solid #eaeefb;
    font-size: 14px;
    color: #8492a6;
    line-height: 35px;
    text-align: left;
    text-indent: 10px;
    font-family: Helvetica Neue;
  }
  .typo-PingFang {
    font-family: PingFang SC;
  }
  .typo-Hiragino {
    font-family: Hiragino Sans GB;
  }
  .typo-Microsoft {
    font-family: Microsoft YaHei;
  }
  .typo-Helvetica {
    font-family: Helvetica;
  }
  .typo-Arial {
    font-family: Arial;
  }
</style>
<style scoped>

</style>
