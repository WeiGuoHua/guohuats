<template>
  <div class="flashTable animate__animated animate__fadeIn">
    <BaseTable :data="mockList1"/>
    
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import BaseTable from './BaseTable/BaseTable.vue';
const mockList1: any = [];
    for (let index = 0; index < 200; index++) {
      mockList1.push({
        name: 'Test' + index,
        role: 'Developer',
        sex: '男'
      });
    }


</script>
<style lang="scss" scoped>
.flashTable {
  background: #fff000;
}
</style>
