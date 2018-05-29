<template>
    <section class="content">
      <h2>DateTimePicker 日期时间选择器</h2>
      <p>在同一个选择器里选择日期和时间</p>
      <h3>日期和时间点</h3>
      <div class="demo-block demo-box demo-zh-CN demo-datetime-picker">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">设置默认时间</span>
            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="选择日期时间"
              default-time="12:00:00">
            </el-date-picker>
          </div>
        </div>
      </div>
      <h3>日期和时间范围</h3>
      <div class="demo-block demo-box demo-zh-CN demo-datetime-picker">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value4"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value5"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </div>
        </div>
      </div> 
      <h3>默认的起始与结束时刻</h3>
      <div class="demo-block demo-box demo-zh-CN demo-datetime-picker">
        <div class="source">
          <div class="block">
            <span class="demonstration">起始日期时刻为 12:00:00</span>
            <el-date-picker
              v-model="value6"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
            <el-date-picker
              v-model="value7"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
          </div>
        </div>
      </div> 
    </section>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      value3: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value5: '',
      value6: '',
      value7: ''
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style>
  .demo-block.demo-datetime-picker .source {
    padding: 0;
    display: -ms-flexbox;
    display: flex;
  }
  .demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    -ms-flex: 1;
    flex: 1;
  }
  .demo-datetime-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-datetime-picker .block:last-child {
    border-right: none;
  }
</style>
