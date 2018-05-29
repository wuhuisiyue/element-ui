<template>
  <section class="content">
    <h2>Pagination 分页</h2>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3>基础用法</h3>
    <demoblock>
      <div class="source first" slot="source">
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </demoblock>
    <h3>设置最大页码按钮数</h3>
    <demoblock>
      <div class="source" slot="source">
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </demoblock>
    <h3>带有背景色的分页</h3>
    <demoblock>
      <div class="source" slot="source">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </demoblock>
    <h3>小型分页</h3>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <demoblock>
      <div class="source" slot="source">
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </demoblock>
    <h3>附加功能</h3>
    <demoblock>
      <div class="source last" slot="source">
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </demoblock>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style>
  .demo-Pagination .source.first {
    padding: 0;
    font-size: 0;
  }
  .demo-Pagination .source.last {
    padding: 0;
  }
  .demo-Pagination .first .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-Pagination .first .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-Pagination .last .block {
    padding: 30px 24px;
    border-bottom: 1px solid #eff2f6;
  }
  .demo-Pagination .last .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }
  .demo-Pagination .last .demonstration+.el-pagination {
    float: right;
    width: 70%;
    margin: 5px 20px 0 0;
  }
</style>
