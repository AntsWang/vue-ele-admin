<!--  -->
<template>
  <el-container>
    <el-header height='100px'>
      Header
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          default-active="/"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="/home">echarts</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">组件</template>
              <el-menu-item index="/carousel">轮播图</el-menu-item>
              <el-menu-item index="/calendar">日历</el-menu-item>
              <el-menu-item index="/table">表格</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/application">
            <i class="el-icon-menu"></i>
            <span slot="title">应用管理</span>
          </el-menu-item>
          <el-menu-item index="/config">
            <i class="el-icon-document"></i>
            <span slot="title">配置管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../components/header';
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  components:{
    Header
  }
};
</script>
<style>
.el-header{
      height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
}
/* @import url(); 引入css类 */
</style>