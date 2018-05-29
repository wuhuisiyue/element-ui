<template>
  <div id="app" class="is-component">
      <gheader></gheader>
      <div class="main-cnt">
        <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
          <div class="page-container page-component">
            <el-scrollbar class="page-component__nav">
              <side-nav></side-nav>
            </el-scrollbar>
            <div class="page-component__content">
              <router-view/>
              <footer-nav></footer-nav>
            </div>
            <transition name="el-zoom-in-top">
              <div
                class="page-component-up"
                :class="{ 'hover': hover }"
                v-show="showBackToTop"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
                @click="toTop">
                <i class="el-icon-caret-top"></i>
              </div>
            </transition>
          </div>
        </el-scrollbar>
      </div>
  </div>
</template>

<script>
import footernav from './components/Footer-nav'
import Header from './components/Header'
import Sidenav from './components/Side-nav'
import throttle from 'throttle-debounce/throttle.js';
import bus from './bus';
// console.log(componentlist);

export default {
  name: 'App',
  components: {
    'footer-nav': footernav,
    'gheader': Header,
    'side-nav': Sidenav
  },
  data (){
    return {
      showBackToTop: false,
      scrollTop: 0,
      showHeader: true,
      componentScrollBar: null,
      componentScrollBoxElement: null,
      hover: false
    }
  },
  //监听路由变化
  watch: {
    '$route' (to, from) {
      // 触发伪滚动条更新
      this.componentScrollBox.scrollTop = 0;
      this.$nextTick(() => {
        this.componentScrollBar.update();
      });
    }
  },
  created() {
    // window.addEventListener('hashchange', () => {
    //   if (location.href.match(/#/g).length < 2) {
    //     document.documentElement.scrollTop = document.body.scrollTop = 0;
    //     this.renderAnchorHref();
    //   } else {
    //     this.goAnchor();
    //   }
    // });
  },
  mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    // console.log(this.componentScrollBar);
    this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
    this.throttledScrollHandler = throttle(300, this.handleScroll);
    this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
    this.goAnchor();
    document.body.classList.add('is-component');
  },
  destroyed() {
    document.body.classList.remove('is-component');
  },
  beforeDestroy() {
    this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
  },
  methods: {
    goAnchor() {
      if (location.href.match(/#/g).length > 1) {
        const anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return;
        const elm = document.querySelector(anchor[0]);
        if (!elm) return;
        setTimeout(_ => {
          this.componentScrollBox.scrollTop = elm.offsetTop;
        }, 50);
      }
    },
    toTop() {
      this.hover = false;
      this.showBackToTop = false;
      this.componentScrollBox.scrollTop = 0;
    },
    handleScroll() {
      const scrollTop = this.componentScrollBox.scrollTop;
      // console.log(scrollTop);
      // console.log(document.body.clientHeight);
      this.showBackToTop = scrollTop >= 0.5 * document.body.clientHeight;
      if (this.showHeader !== this.scrollTop > scrollTop) {
        this.showHeader = this.scrollTop > scrollTop;
      }
      if (scrollTop === 0) {
        this.showHeader = true;
      }
      // if (!this.navFaded) {
      //   bus.$emit('fadeNav');
      // }
      this.scrollTop = scrollTop;
    }
  },
}
</script>
<style scoped>
  @media (max-width: 1140px){
    .container, .page-container {
      width: 100%;
    }
  }
</style>
<style>
  .page-component__scroll {
    height: calc(100% - 80px);
    margin-top: 80px;
  }
  .page-component {
      box-sizing: border-box;
      height: 100%;
  }
  .page-component.page-container {
      padding: 0;
  }
  .page-component__scroll .el-scrollbar__wrap {
      overflow-x: auto;
  }
  .page-component .page-component__nav {
      width: 240px;
      position: fixed;
      top: 0;
      bottom: 0;
      margin-top: 80px;
      transition: padding-top .3s;
  }
  .page-component .page-component__content {
      padding-left: 270px;
      padding-bottom: 50px;
      box-sizing: border-box;
  }
  .page-component .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 5;
  }
  .page-component .page-component-up i {
    color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 768px){
    .page-component .page-component__nav {
      width: 100%;
      position: static;
      margin-top: 0;
    }
    .page-component .page-component__content {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  
</style>

