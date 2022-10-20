<template>
  <div class="homes">
    <el-button type="success" @click="edit">编辑</el-button>
    <el-button type="primary">新增</el-button>
    <!-- <vxe-table show-overflow ref="xTable1" height="300" :row-config="{ isHover: true }">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
    </vxe-table> -->
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import { Menu as IconMenu, Message } from '@element-plus/icons-vue';
import { VxeTableInstance } from 'vxe-table';
import XEUtils from 'xe-utils';
import { useRouter } from 'vue-router';
// 引入bread组件
import Bread from '@/components/Bread.vue';
const Router = useRouter();
const xTable = ref<VxeTableInstance>();
const mockList1: any = [];
for (let index = 0; index < 200; index++) {
  mockList1.push({
    name: '测试' + index,
    role: '开发',
    sex: '男'
  });
}

const xTable1 = ref<VxeTableInstance>();
onMounted(() => {
  nextTick(() => {
    const $table = xTable1.value;
    if ($table) {
      $table.loadData(XEUtils.clone(mockList1, true));
    }
  });
});
const edit = () => {
  // 路由跳转到编辑页面
  Router.push({ path: '/doctor/list' });
};
</script>
<style scoped lang="scss">
.homes {
  width: 100%;
}
</style>
