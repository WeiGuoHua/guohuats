<template>
  <div class="home">
    <h1 style="color:#459FFC">ElementPlus按钮</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
</template>

<script lang='ts'>
import { onBeforeMount, onMounted } from "vue";
import ElementPlus from 'element-plus';
export default {
  name: "",
  setup() {},
};
</script>
<style scoped lang='less'>
.home{
  width: 100%;
  text-align: center;
}
</style>