<template>
  <div
    class="side-nav"
    @mouseenter="isFade = false"
    :class="{ 'is-fade': isFade }"
    :style="navStyle">
    <ul>
      <li class="nav-item sponsors">
        <a>赞助商</a>
        <ul class="pure-menu-list sub-nav">
          <li class="nav-item">
            <a class="sponsor" href="https://www.duotai.net/?utm_source=element" target="_blank">
              <img src="../assets/images/zanzhu1.svg" alt="duotai">
            </a>
          </li>
          <li class="nav-item">
            <a class="sponsor" href="https://www.duohui.cn/?utm_source=element&utm_medium=web&utm_campaign=element-index" target="_blank">
              <img src="../assets/images/zanzhu2.svg" alt="duohui">
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item" v-for="item in data" :key="item.name">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{item.name}}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups" :key="group.groupName">
            <div class="nav-group__title" @click="expandMenu">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <li
                class="nav-item"
                v-for="navItem in group.list"
                v-if="!navItem.disabled"
                :key="navItem.path">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue';
  import componentData from '../nav.config.json'
  export default {
    props: {
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      const getData = _ => {
        return componentData['zh-CN'];
      };
      return {
        data: getData(),
        highlights: [],
        navState: [],
        isSmallScreen: false,
        isFade: false
      };
    },
    watch: {
      '$route.path'() {
        this.handlePathChange();
      },
      isFade(val) {
        // bus.$emit('navFade', val);
      }
    },
    computed: {
      navStyle() {
        const style = {};
        if (this.isSmallScreen) {
          style.paddingBottom = '60px';
        }
        style.opacity = this.isFade ? '0.5' : '1';
        return style;
      },
      // lang() {
      //   return this.$route.meta.lang;
      // },
      // langConfig() {
      //   return compoLang.filter(config => config.lang === this.lang)[0]['nav'];
      // }
    },
    methods: {
      handleResize() {
        this.isSmallScreen = document.documentElement.clientWidth < 768;
        this.handlePathChange();
      },
      handlePathChange() {
        if (!this.isSmallScreen) {
          this.expandAllMenu();
          return;
        }
        this.$nextTick(() => {
          this.hideAllMenu();
          let activeAnchor = this.$el.querySelectorAll('a.active')[0];
          if(activeAnchor){
            let ul = activeAnchor.parentNode;
            while (ul.tagName !== 'UL') {
              ul = ul.parentNode;
            }
            ul.style.height = 'auto';
          }
        });
      },
      hideAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = '0';
        });
      },
      expandAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = 'auto';
        });
      },
      expandMenu(event) {
        if (!this.isSmallScreen) return;
        let target = event.currentTarget;
        if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return;
        this.hideAllMenu();
        event.currentTarget.nextElementSibling.style.height = 'auto';
      }
    },
    created() {
      // bus.$on('fadeNav', () => {
        this.isFade = true;
      // });
      // console.log(this.data)
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
</script>
<style>
  .page-component .side-nav {
      height: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
      padding-right: 0;
  }
  .page-component .side-nav>ul {
      padding-bottom: 50px;
  }
  @media (max-width: 768px){
    .page-component .side-nav {
      padding-top: 0;
      padding-left: 50px;
    }
  }
</style>
