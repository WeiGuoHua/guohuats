<template>
  <div>
    <div class="content-title-box">
      <el-breadcrumb separator=">">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <template v-for="(item, index) in breadList">
          <el-breadcrumb-item v-if="item.name" :key="index" :to="item.children ? '' : item.path">{{
            item.name
          }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: []
    };
  },
  methods: {
    getMatched() {
      this.breadList = this.$route.matched;
    }
  },
  created() {
    this.getMatched();
  },
  watch: {
    $route(to, from) {
      this.breadList = this.$route.matched;
    }
  }
};
</script>
<style lang="scss" scoped>
.content-title-box {
  padding: 0 20px;
  border-bottom: 1px solid #ebeef5;
  .el-breadcrumb {
    padding: 16px 0;
    font-size: 14px;
    color: #606266;
    .el-breadcrumb__inner {
      display: flex;
      align-items: center;
    }
    .el-breadcrumb__separator {
      color: #c0c4cc;
    }
    .el-breadcrumb__item {
      color: #606266;
      cursor: pointer;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
