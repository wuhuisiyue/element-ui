<template>
  <section class="content">
    <h2>Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h3>基础用法</h3>
    <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <demoblock>
      <div class="source" slot="source">
        <div class="box">
          <div class="top">
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
              <el-button>上右</el-button>
            </el-tooltip>
          </div>
          <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
              <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
              <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
              <el-button>左下</el-button>
            </el-tooltip>
          </div>

          <div class="right">
            <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
              <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
              <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
              <el-button>右下</el-button>
            </el-tooltip>
          </div>
          <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
              <el-button>下右</el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
    </demoblock>
    <h3>主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-tooltip content="Top center" placement="top">
          <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </div>
    </demoblock>
    <h3>更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <demoblock>
      <div class="source" slot="source">
        <el-tooltip placement="top">
          <div slot="content">多行信息<br/>第二行信息</div>
          <el-button>Top center</el-button>
        </el-tooltip>
      </div>
    </demoblock>
    <h3>高级扩展</h3>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p>
      <code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。
      如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。
    </p>
    <p>
      事实上，这是基于 <a href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。
    </p>
    <demoblock>
      <div class="source" slot="source">
        <template>
          <el-tooltip :disabled="disabled" 
            content="点击关闭 tooltip 功能" placement="bottom" effect="light">
            <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
          </el-tooltip>
        </template>
      </div>
    </demoblock>
    <div class="tip">
      <p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p>
      <p>
        tooltip 内不支持 disabled form 元素，参考<a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。
      </p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disabled: false
    }
  },
  methods: {

  }
}
</script>
<style>
  .demo-Tooltip .box {
    width: 400px;
  }
  .demo-Tooltip .box .top {
    text-align: center;
  }
  .demo-Tooltip .box .left {
    float: left;
    width: 60px;
  }
  .demo-Tooltip .box .right {
    float: right;
    width: 60px;
  }
  .demo-Tooltip .box .bottom {
    clear: both;
    text-align: center;
  }
  .demo-Tooltip .box .item {
    margin: 4px;
  }
  .demo-Tooltip .box .el-tooltip {
    margin-left: 0;
  }
</style>
