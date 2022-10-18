<template>
  <el-aside width="200px">
    <el-menu :default-openeds="['1']">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><message /></el-icon>住院医生
        </template>
        <el-menu-item index="1-1"
          ><el-icon><message /></el-icon>病人列表</el-menu-item
        >
        <el-menu-item index="1-2">
          <el-icon><message /></el-icon>医嘱信息
        </el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>
            <el-icon><message /></el-icon>报表
          </template>
          <el-menu-item index="1-4-1">
            <el-icon><message /></el-icon>报表申请
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><message /></el-icon>电子申请
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><message /></el-icon>护理文书
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><message /></el-icon>权限管理
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><message /></el-icon>设置
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon><message /></el-icon>角色管理
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { Message } from '@element-plus/icons-vue';
// import { reactive, ref, onMounted } from 'vue'
// import Api from './api';
</script>
<style lang="scss" scoped></style>
