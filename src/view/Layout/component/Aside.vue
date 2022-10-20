<template>
  <el-aside width="200px" class="nav">
    <el-menu :default-active="curPath" router :unique-opened="false">
      <!-- 递归显示多级菜单 -->
      <template v-for="(itemMenu, mainIndex) in menuList" :key="mainIndex + ''">
        <router-link :to="itemMenu.path" v-if="!itemMenu.children">
          <el-menu-item :index="itemMenu.path">
            <el-icon :size="20">
              <component :is="itemMenu.icon" />
            </el-icon>
            <span>{{ itemMenu.name }}</span>
          </el-menu-item>
        </router-link>
        <el-sub-menu :index="itemMenu.path" v-else>
          <template #title>
            <el-icon :size="20">
              <component :is="itemMenu.icon" />
            </el-icon>
            <span>{{ itemMenu.name }}</span>
          </template>
          <template v-for="(itemSubMenu, subIndex) in itemMenu.children" :key="subIndex + ''">
            <router-link :to="itemSubMenu.path" v-if="!itemSubMenu.children">
              <el-menu-item :index="itemSubMenu.path">
                <el-icon :size="20">
                  <component :is="itemSubMenu.icon" />
                </el-icon>
                <span>{{ itemSubMenu.name }}</span>
              </el-menu-item>
            </router-link>
            <el-sub-menu :index="itemSubMenu.path" v-else>
              <template #title>
                <el-icon :size="20">
                  <component :is="itemSubMenu.icon" />
                </el-icon>
                <span>{{ itemSubMenu.name }}</span>
              </template>
              <router-link
                :to="itemSubSubMenu.path"
                v-for="(itemSubSubMenu, subSubIndex) in itemSubMenu.children"
                :key="subSubIndex + ''"
              >
                <el-menu-item :index="itemSubSubMenu.path">
                  <el-icon :size="20">
                    <component :is="itemSubSubMenu.icon" />
                  </el-icon>
                  <span>{{ itemSubSubMenu.name }}</span>
                </el-menu-item>
              </router-link>
            </el-sub-menu>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
import { routes } from '../../../router/index';
const router = useRouter();
const curPath = ref('');
const menuList = routes[0].children;

onMounted(() => {
  curPath.value = router.currentRoute.value.path;
  onBeforeRouteUpdate((to) => {
    curPath.value = to.path;
  });
});
</script>

<style>
.nav a {
  text-decoration: none;
}
</style>
