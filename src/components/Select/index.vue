<template>
    <section class="content">
      <h2>Select 选择器</h2>
      <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
      <h3>基础用法</h3>
      <p>适用于广泛的基础单选</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>有禁用选项</h3>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>禁用状态</h3>
      <p>选择器不可用状态</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value3" disabled placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>可清空单选</h3>
      <p>包含清空按钮，可将选择器清空为初始状态</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value4" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>基础多选</h3>
      <p>适用性较广的基础多选，用 Tag 展示已选项</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <el-select
            v-model="value11"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>自定义模板</h3>
      <p>可以自定义备选项</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value6" placeholder="请选择">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>分组</h3>
      <p>备选项进行分组展示</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value7" placeholder="请选择">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </div>
      </div>
      <h3>可搜索</h3>
      <p>可以利用搜索功能快速查找选项</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>远程搜索</h3>
      <p>从服务器搜索数据，输入关键字进行查找</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <h3>创建条目</h3>
      <p>可以创建并选中选项中不存在的条目</p>
      <div class="demo-block demo-box demo-zh-CN demo-select">
        <div class="source">
          <el-select
            v-model="value10"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        }, 
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      options2: [
        {
          value: '选项1',
          label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, 
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        }, 
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      value11: [],
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        }, 
        {
          value: 'Shanghai',
          label: '上海'
        }, 
        {
          value: 'Nanjing',
          label: '南京'
        }, 
        {
          value: 'Chengdu',
          label: '成都'
        }, 
        {
          value: 'Shenzhen',
          label: '深圳'
        }, 
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      value6: '',
      options3: [
        {
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, 
          {
            value: 'Beijing',
            label: '北京'
          }]
        }, 
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都'
            }, 
            {
              value: 'Shenzhen',
              label: '深圳'
            }, 
            {
              value: 'Guangzhou',
              label: '广州'
            }, 
            {
              value: 'Dalian',
              label: '大连'
           }
          ]
        }
      ],
      value7: '',
      value8: '',
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"
      ],
      options5: [
        {
          value: 'HTML',
          label: 'HTML'
        }, 
        {
          value: 'CSS',
          label: 'CSS'
        }, 
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ],
      value10: []
    }
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  }
}
</script>
<style>

</style>
