<template>
    <section class="content">
      <h2>Switch 开关</h2>
      <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <h3>基本用法</h3>
      <div class="demo-block demo-box demo-zh-CN demo-switch">
        <div class="source">
          <el-switch
            v-model="value2"
            @change="value2Change"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </div>
      </div>
      <h3>文字描述</h3>
      <div class="demo-block demo-box demo-zh-CN demo-switch">
        <div class="source">
          <el-switch
            v-model="value3"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
          <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
        </div>
      </div>
      <h3>扩展的 value 类型</h3>
      <div class="demo-block demo-box demo-zh-CN demo-switch">
        <div class="source">
          <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
              v-model="value5"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0">
            </el-switch>
          </el-tooltip>
        </div>
      </div>
      <h3>禁用状态</h3>
      <div class="demo-block demo-box demo-zh-CN demo-switch">
        <div class="source">
          <el-switch
            v-model="value6"
            disabled>
          </el-switch>
          <el-switch
            v-model="value7"
            disabled>
          </el-switch>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: '100',
      value6: true,
      value7: false
    }
  },
  methods: {
    value2Change(value) {
      console.log(value)
    }
  },
  mounted() {

  }
}
</script>
<style>
  .demo-box.demo-switch .el-switch {
    margin: 20px 20px 20px 0;
  }
</style>
