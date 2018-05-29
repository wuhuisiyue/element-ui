<template>
    <section class="content">
      <h2 id="icon-tu-biao">Icon 图标</h2>
      <p>提供了一套常用的图标集合</p>
      <h3 id="shi-yong-fang-fa">使用方法</h3>
      <p>
        直接通过设置类名为
        <code>el-icon-iconName</code>
        来使用即可。例如：
      </p>
      <div class="demo-block demo-box demo-zh-CN demo-icon">
        <div class="source">
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
      <h3 id="tu-biao-ji-he">图标集合</h3>
      <ul class="icon-list">
        <li v-for="(icon,index) in iconList" :key="index">
          <span>
            <i :class="icon.name"></i>
            <span class="icon-name">{{icon.name}}</span>
          </span>
        </li>
      </ul>
    </section>
</template>
<script>
  let iconList = [
    {name: 'el-icon-info'},
    {name: 'el-icon-error'},
    {name: 'el-icon-success'},
    {name: 'el-icon-warning'},
    {name: 'el-icon-question'},
    {name: 'el-icon-back'},
    {name: 'el-icon-arrow-left'},
    {name: 'el-icon-arrow-down'},
    {name: 'el-icon-arrow-right'},
    {name: 'el-icon-arrow-up'},
    {name: 'el-icon-caret-left'},
    {name: 'el-icon-caret-bottom'},
    {name: 'el-icon-caret-top'},
    {name: 'el-icon-caret-right'},
    {name: 'el-icon-d-arrow-left'},
    {name: 'el-icon-d-arrow-right'},
    {name: 'el-icon-minus'},
    {name: 'el-icon-plus'},
    {name: 'el-icon-remove'},
    {name: 'el-icon-circle-plus'},
    {name: 'el-icon-remove-outline'},
    {name: 'el-icon-circle-plus-outline'},
    {name: 'el-icon-close'},
    {name: 'el-icon-check'},
    {name: 'el-icon-circle-close'},
    {name: 'el-icon-circle-check'},
    {name: 'el-icon-circle-close-outline'},
    {name: 'el-icon-circle-check-outline'},
    {name: 'el-icon-zoom-out'},
    {name: 'el-icon-zoom-in'},
    {name: 'el-icon-d-caret'},
    {name: 'el-icon-sort'},
    {name: 'el-icon-sort-down'},
    {name: 'el-icon-sort-up'},
    {name: 'el-icon-tickets'},
    {name: 'el-icon-document'},
    {name: 'el-icon-goods'},
    {name: 'el-icon-sold-out'},
    {name: 'el-icon-news'},
    {name: 'el-icon-message'},
    {name: 'el-icon-date'},
    {name: 'el-icon-printer'},
    {name: 'el-icon-time'},
    {name: 'el-icon-bell'},
    {name: 'el-icon-mobile-phone'},
    {name: 'el-icon-service'},
    {name: 'el-icon-view'},
    {name: 'el-icon-menu'},
    {name: 'el-icon-more'},
    {name: 'el-icon-more-outline'},
    {name: 'el-icon-star-on'},
    {name: 'el-icon-star-off'},
    {name: 'el-icon-location'},
    {name: 'el-icon-location-outline'},
    {name: 'el-icon-phone'},
    {name: 'el-icon-phone-outline'},
    {name: 'el-icon-picture'},
    {name: 'el-icon-picture-outline'},
    {name: 'el-icon-delete'},
    {name: 'el-icon-search'},
    {name: 'el-icon-edit'},
    {name: 'el-icon-edit-outline'},
    {name: 'el-icon-rank'},
    {name: 'el-icon-refresh'},
    {name: 'el-icon-share'},
    {name: 'el-icon-setting'},
    {name: 'el-icon-upload'},
    {name: 'el-icon-upload2'},
    {name: 'el-icon-download'},
    {name: 'el-icon-loading'}
  ]
export default {
  data() {
    return {
      iconList: []
    }
  },
  created() {
    this.iconList = iconList;
    // console.log(this.iconList.length);
  }
}
</script>

<style>
  .demo-icon .source>i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  .page-component .content>ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em;
  }
  .page-component .content>ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: 1px solid #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .icon-list li span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    color: #99a9bf;
  }
  .icon-list li i {
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
    color: #606266;
  }
  .icon-list li .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
    color: #606266;
  }
</style>
<style scoped>

</style>
