<template>
  <section class="content">
    <h2>Badge 标记</h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <h3>基础用法</h3>
    <p>展示新消息数量</p>
    <demoblock>
      <div class="source" slot="source">
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </demoblock>
    <h3>最大值</h3>
    <p>可定义最大值</p>
    <demoblock>
      <div class="source" slot="source">
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
    </demoblock>
    <h3>自定义内容</h3>
    <p>可以显示数字以外的文本内容。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-badge value="new" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge value="hot" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </div>
    </demoblock>
    <h3>小红点</h3>
    <p>以红点的形式标注需要关注的内容。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-badge is-dot class="item">数据查询</el-badge>
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
        </el-badge>
      </div>
    </demoblock>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
<style scoped>
  .item {
    margin-right: 40px;
  }
</style>

