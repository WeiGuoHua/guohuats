<template>
  <div class="baseTable">
    <vxe-table border show-overflow ref="xTable1" height="800" :row-config="{ isHover: true }">
      <vxe-column type="seq" width="100"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import { VxeTableInstance } from 'vxe-table';
import XEUtils from 'xe-utils';
const props = defineProps(['data']);
// console.log("🚀 ~ file: BaseTable.vue ~ line 17 ~ props", props)
const xTable1 = ref<VxeTableInstance>();
onMounted(() => {
  nextTick(() => {
    const $table = xTable1.value;
    if ($table) {
      $table.loadData(XEUtils.clone(props.data, true));
    }
  });
});
</script>
<style lang="scss" scoped>
.baseTable {
}
</style>
