<template>
  <div class="layout">
    <el-container>
      <el-header class="header-dark"><Header /></el-header>
      <el-container>
        <Aside />
        <el-container class="container-body">
          <Bread />
          <el-main  class="animate__animated animate__fadeIn" ><router-view></router-view></el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from './component/Header';
import Aside from './component/Aside';
// 引入bread组件
import Bread from '@/components/Bread.vue';
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

  .container-body {
    flex-direction: column;
  }
}
</style>
