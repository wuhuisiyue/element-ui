<template>
  <section class="content">
    <h2>Notification 通知</h2>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
    <h3>基本用法</h3>
    <p>适用性广泛的通知栏</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open">
          可自动关闭
        </el-button>
        <el-button
          plain
          @click="open2">
          不会自动关闭
          </el-button>
      </div>
    </demoblock>
    <h3>带有倾向性</h3>
    <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open3">
          成功
        </el-button>
        <el-button
          plain
          @click="open4">
          警告
        </el-button>
        <el-button
          plain
          @click="open5">
          消息
        </el-button>
        <el-button
          plain
          @click="open6">
          错误
        </el-button>
      </div>
    </demoblock>
    <h3>自定义弹出位置</h3>
    <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open7">
          右上角
        </el-button>
        <el-button
          plain
          @click="open8">
          右下角
        </el-button>
        <el-button
          plain
          @click="open9">
          左下角
        </el-button>
        <el-button
          plain
          @click="open10">
          左上角
        </el-button>
      </div>
    </demoblock>
    <h3>带有偏移</h3>
    <p>让 Notification 偏移一些位置</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open11">
          偏移的消息
        </el-button>
      </div>
    </demoblock>
    <h3>使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open12">
          使用 HTML 片段
        </el-button>
      </div>
    </demoblock>
    <div class="warning">
      <p>
        <code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。
      </p>
    </div>
    <h3>隐藏关闭按钮</h3>
    <p>可以不显示关闭按钮</p>
    <demoblock>
      <div class="source" slot="source">
        <el-button
          plain
          @click="open13">
          隐藏关闭按钮
        </el-button>
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
    open() {
      const h = this.$createElement;
      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },
    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    },
    open3() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    open4() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    },
    open5() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },
    open6() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    },
    open7() {
      this.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息'
      });
    },
    open8() {
      this.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right'
      });
    },
    open9() {
      this.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left'
      });
    },
    open10() {
      this.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left'
      });
    },
    open11() {
      this.$notify({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100
      });
    },
    open12() {
      this.$notify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      });
    },
    open13() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      });
    }
  }
}
</script>
