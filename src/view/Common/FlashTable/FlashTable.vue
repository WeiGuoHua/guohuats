<template>
  <div class="flashTable">
    <vxe-table border show-overflow ref="xTable1" height="300" :row-config="{ isHover: true }">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
    </vxe-table>
  </div>
</template>
<script setup lang="ts">
// 引入bread组件
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import { VxeTableInstance } from 'vxe-table';
import XEUtils from 'xe-utils';

const mockList1: any = [];
for (let index = 0; index < 2000; index++) {
  mockList1.push({
    name: 'Test' + index,
    role: 'Developer',
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
</script>
<style lang="scss" scoped>
.flashTable {
  background: #fff000;
}
</style>
