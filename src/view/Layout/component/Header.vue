<template>
  <div class="header-bg">
    <div class="logo">
      <img
        style="vertical-align: middle"
        src="../../../assets/img/logo.png"
        alt="logo"
      />
      <span style="padding-left: 8px; vertical-align: middle">复高科技</span>
    </div>
    <div class="right-items">
      <el-switch
        v-model="isDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        style="
          --el-switch-on-color: var(--vp-c-gray-dark-3);
          --el-switch-off-color: var(--el-color-primary);;
          margin-right: 8px;
        "
      />
      <el-icon style="margin-right: 8px; height: 60px; vertical-align: middle"
        ><setting
      /></el-icon>
      <span style="vertical-align: middle">Tom</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Setting, Moon, Sunny } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark({
  storageKey: 'vitepress-theme-appearance'
});
const toggleDark = useToggle(isDark);
// import { reactive, ref, onMounted } from 'vue'
// import Api from './api';
</script>
<style lang="scss" scoped>
.header-bg {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 200px;
  }
  .right-items {
    display: flex;
    align-items: center;
  }
}
</style>
