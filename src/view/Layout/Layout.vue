<template>
  <div class="layout">
    <el-container>
      <el-header class="header-dark"><Header /></el-header>
      <el-container>
        <Aside />
        <el-container class="container-body">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          </el-breadcrumb>
          <el-main><router-view></router-view></el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
// import { reactive, ref, onMounted } from 'vue'
// import Api from './api';
import Header from './component/Header';
import Aside from './component/Aside';
</script>
<style lang="scss" scoped>
.el-header {
  background: var(--el-color-primary);
  color: var(--el-color-white);
}
.layout {
  height: 100%;

  .container-body {
    height: calc(100vh - 60px);
  }
  :deep(.el-menu) {
    height: 100%;
  }
}
</style>
