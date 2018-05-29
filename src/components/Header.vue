<template>
  <div class="headerWrapper">
    <header height="80px" class="header">
      <div class="container">
        <h1>
          <router-link to="/">
            <img src="../assets/images/element.svg" alt="" class="nav-logo">
            <img src="../assets/images/element_sub.svg" alt="" class="nav-logo-small">
          </router-link>
        </h1>
        <ul  class="nav">
          <li  class="nav-item"><a  href="javascript:;" class="">指南</a></li>
          <li  class="nav-item"><a  href="javascript:;" class="active">组件</a></li>
          <li  class="nav-item"><a  href="javascript:;" class="">资源</a></li>
          <li  class="nav-item" style=""><div  class="nav-gap"></div></li>
          <li  class="nav-item nav-versions">
            <a  href="javascript:;">
                2.3.9
            </a>
          </li>
          <li  class="nav-item lang-item">
            <el-dropdown class="nav-dropdown nav-lang">
              <span class="el-dropdown-link">
                中文<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <div  class="nav-dropdown nav-lang el-dropdown">
              <span  aria-haspopup="list" aria-controls="dropdown-menu-7859" role="button" tabindex="0" class=" el-dropdown-selfdefine">
                中文
                <i  class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <ul  class="el-dropdown-menu el-popper nav-dropdown-list" id="dropdown-menu-7859" style="display: none;">
                <li  tabindex="-1" class="el-dropdown-menu__item">
                  中文
                </li>
                <li  tabindex="-1" class="el-dropdown-menu__item">
                  English
                </li>
                <li  tabindex="-1" class="el-dropdown-menu__item">
                  Español
                </li>
              </ul>
            </div> -->
          </li>
        </ul>
      </div>
    </header>
  </div>
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
  .headerWrapper {
    height: 80px;
  }
  #app.is-component .headerWrapper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
  }
  .header {
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
  }
  .header h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }
  .header h1 a {
    color: #333;
    text-decoration: none;
    display: block;
  }
  .header .nav-logo {
    vertical-align: sub;
  }
  .header .nav-logo-small, 
  .header .nav-logo {
    vertical-align: sub;
  }
  .header .nav-logo-small {
    display: none;
  }
  .header .nav {
    float: right;
    height: 100%;
    line-height: 80px;
    background: transparent;
    padding: 0;
    margin: 0;
  }
  .header .nav::before,
  .header .nav::after {
    display: table;
    content: "";
  }
  .header .nav::after {
    clear: both;
  }
  .header .nav-item {
    margin: 0;
    float: left;
    list-style: none;
    position: relative;
    cursor: pointer;
  }
  .header .nav-item a {
    text-decoration: none;
    color: #888;
    display: block;
    padding: 0 22px;
  }
  .header .nav-item a.active, .header .nav-item a:hover {
      color: #333;
  }
  .header .nav-item a.active:after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 15px;
      left: calc(50% - 7px);
      width: 14px;
      height: 4px;
      background: #0D7CEF;
  }
  .header .container {
      height: 100%;
      box-sizing: border-box;
  }
  .header .nav-gap {
    position: relative;
    width: 1px;
    height: 80px;
    padding: 0 20px;
  }
  .header .nav-gap:before {
    content: "";
    position: absolute;
    top: calc(50% - 8px);
    width: 1px;
    height: 16px;
    background: #ebebeb;
  }
  .nav-dropdown {
    margin-bottom: 6px;
    /* padding-left: 18px; */
    padding-left: 0px;
    width: 100%;
  }
  .header .nav-item.lang-item .nav-lang, 
  .header .nav-item:last-child .nav-lang {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    color: #888;
  }
  @media (max-width: 1140px){
    .container, .page-container {
      width: 100%;
    }
  }
   @media (max-width: 850px){
    .header .nav-logo {
      display: none;
    }
    .header .nav-logo-small {
      display: inline-block;
    }
    .header .nav-item {
      margin-left: 6px;
    }
    .header .nav-item.lang-item, 
    .header .nav-item:last-child {
      margin-left: 10px;
    }
    .header .nav-item a {
      padding: 0 5px;
    }
  }
  @media (max-width: 700px){
    .header .nav-item a {
      font-size: 12px;
      vertical-align: top;
    }
    .header .nav-gap {
      padding: 0 8px;
    }
    .header .nav-dropdown span {
      font-size: 12px;
    }
  }
</style>
