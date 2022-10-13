<template> 
  <div style="text-align:center;"> 
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite logo" /> 
    </a> 
    <a href="https://vuejs.org/" target="_blank"> 
      <img src="./assets/mdImg/vue.svg" class="logo vue" alt="Vue logo" /> 
    </a> 
    <a href="https://element-plus.gitee.io/zh-CN/" target="_blank"> 
      <img src="./assets/mdImg/element-plus-logo.svg" class="logo element" alt="Vue logo" /> 
    </a> 
  </div> 
  <router-view></router-view> 

</template> 

<script setup lang="ts">

</script>

<style scoped>
.logo { 
  height: 6em; 
  padding: 1.5em; 
  will-change: filter; 
} 
.logo:hover { 
  filter: drop-shadow(0 0 2em #646cffaa); 
} 
.logo.vue:hover { 
  filter: drop-shadow(0 0 2em #42b883aa); 
} 
.logo.element:hover { 
  filter: drop-shadow(0 0 2em #459FFCaa); 
} 
</style> 
