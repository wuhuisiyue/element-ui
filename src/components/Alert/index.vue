<template>
  <section class="content">
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info">
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning">
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error">
        </el-alert>
      </div>
    </demoblock>
    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="不可关闭的 alert"
          type="success"
          :closable="false">
        </el-alert>
        <el-alert
          title="自定义 close-text"
          type="info"
          close-text="知道了">
        </el-alert>
        <el-alert
          title="设置了回调的 alert"
          type="warning"
          @close="hello">
        </el-alert>
      </div>
    </demoblock>
    <h3>带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          show-icon>
        </el-alert>
      </div>
    </demoblock>
    <h3>文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          center
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          center
          show-icon>
        </el-alert>
      </div>
    </demoblock>
    <h3>带有辅助性文字介绍</h3>
    <p>包含标题和内容，解释更详细的警告。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="带辅助性文字介绍"
          type="success"
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
        </el-alert>
      </div>
    </demoblock>
    <h3>带有 icon 和辅助性文字介绍</h3>
    <demoblock>
      <div class="source" slot="source">
        <el-alert
          title="成功提示的文案"
          type="success"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon>
        </el-alert>
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
    hello() {
      alert('Hello World!');
    }
  }
}
</script>
<style>
  .demo-box.demo-Alert .el-alert {
    margin: 20px 0 0;
  }
  .demo-box.demo-Alert .el-alert:first-child {
    margin: 0;
  }
</style>
