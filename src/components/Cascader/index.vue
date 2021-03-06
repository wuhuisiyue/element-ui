<template>
    <section class="content">
      <h2>Cascader 级联选择器</h2>
      <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
      <h3>基础用法</h3>
      <p>有两种触发子菜单的方式</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source" style="padding: 0; font-size: 0;">
          <div class="block">
            <span class="demonstration">默认 click 触发子菜单</span>
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          </div>
          <div class="block">
            <span class="demonstration">hover 触发子菜单</span>
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions2"
              @change="handleChange">
            </el-cascader>
          </div>
        </div>
      </div>
      <h3>禁用选项</h3>
      <p>通过在数据源中设置 disabled 字段来声明该选项是禁用的</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source">
          <el-cascader
            :options="optionsWithDisabled"
          ></el-cascader>
        </div>
      </div>
      <h3>仅显示最后一级</h3>
      <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source">
          <el-cascader
            :options="options"
            :show-all-levels="false"
          ></el-cascader>
        </div>
      </div>
      <h3>默认值</h3>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source">
          <el-cascader
            :options="options"
            v-model="selectedOptions3"
          ></el-cascader>
        </div>
      </div>
      <h3>选择即改变</h3>
      <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source">
          <el-cascader
            :options="options"
            change-on-select
          ></el-cascader>
        </div>
      </div>
      <h3>动态加载次级选项</h3>
      <p>当选中某一级时，动态加载该级下的选项。</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source">
          <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
          ></el-cascader>
        </div>
      </div>
      <h3>可搜索</h3>
      <p>可以快捷地搜索选项并选择。</p>
      <div class="demo-block demo-box demo-zh-CN demo-cascader">
        <div class="source" style="font-size: 0; padding: 0;">
          <div class="block">
            <span class="demonstration">只可选择最后一级菜单的选项</span>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="options"
              filterable
            ></el-cascader>
          </div>
          <div class="block">
            <span class="demonstration">可选择任意一级菜单的选项</span>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="options"
              filterable
              change-on-select
            ></el-cascader>
          </div>
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
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                }, 
                {
                  value: 'fankui',
                  label: '反馈'
                }, 
                {
                  value: 'xiaolv',
                  label: '效率'
                }, 
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            }, 
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, 
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        }, 
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                }, 
                {
                  value: 'color',
                  label: 'Color 色彩'
                }, 
                {
                  value: 'typography',
                  label: 'Typography 字体'
                }, 
                {
                  value: 'icon',
                  label: 'Icon 图标'
                }, 
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            }, 
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                }, 
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, 
                {
                  value: 'input',
                  label: 'Input 输入框'
                }, 
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, 
                {
                  value: 'select',
                  label: 'Select 选择器'
                }, 
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, 
                {
                  value: 'switch',
                  label: 'Switch 开关'
                }, 
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, 
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, 
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, 
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, 
                {
                  value: 'upload',
                  label: 'Upload 上传'
                }, 
                {
                  value: 'rate',
                  label: 'Rate 评分'
                }, 
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            }, 
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                }, 
                {
                  value: 'tag',
                  label: 'Tag 标签'
                }, 
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, 
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, 
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, 
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            }, 
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                }, 
                {
                  value: 'loading',
                  label: 'Loading 加载'
                }, 
                {
                  value: 'message',
                  label: 'Message 消息提示'
                }, 
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, 
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            }, 
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, 
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, 
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, 
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, 
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            }, 
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, 
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, 
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, 
                {
                  value: 'card',
                  label: 'Card 卡片'
                }, 
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, 
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        }, 
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            }, 
            {
              value: 'sketch',
              label: 'Sketch Templates'
            }, 
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],
      selectedOptions: [],
      selectedOptions2: [],
      optionsWithDisabled: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, 
            {
              value: 'daohang',
              label: '导航',
              children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        }, 
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }
          ]
        }, 
        {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }
      ],
      selectedOptions3: ['zujian', 'data', 'tag'],
      options2: [
        {
          label: '江苏',
          cities: []
        }, 
        {
          label: '浙江',
          cities: []
        }
      ],
      props: {
        value: 'label',
        children: 'cities'
      },
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
          this.options2[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
          this.options2[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    }
  },
  mounted() {

  }
}
</script>
<style>
  .demo-cascader .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-cascader .block:last-child {
    border-right: none;
  }
  .demo-cascader .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-cascader .el-cascader {
    width: 222px;
  }
</style>

