<!--患者一览-->
<template>
  <div class="bedInfoList animate__animated animate__fadeIn">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="病人">
          <el-input v-model="formInline.user" placeholder="请输入病人" />
        </el-form-item>
        <el-form-item label="病区">
          <el-select v-model="formInline.region" placeholder="请选择病区">
            <el-option label="心内科病区" value="hert" />
            <el-option label="骨科病区" value="guke" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in userList" :key="item.id">
          <div class="person">
            <div class="userInfo" :style="'background:' + item.background">
              <div style="display: flex; align-items: center; justify-content: space-evenly">
                <el-avatar :size="42" :src="item.avatar"></el-avatar>
                {{ item.sex }}
              </div>
              <div>
                <span class="name">{{ item.name }}封</span>
              </div>

              <div>{{ item.keshi }}</div>
              <div>{{ item.inTime }}</div>
              <div>{{ item.doctor }}</div>
            </div>
            <div class="otherInfo">
              <div class="idTag">
                <div class="id">
                  {{ item.id }}
                </div>
                <div class="tsgs">
                  <div class="tag orangeColor">普</div>
                  <div class="tag greenColor">入</div>
                  <div class="tag blueColor">完</div>
                  <div class="tag redColor">敏</div>
                </div>
              </div>
              <div>{{ item.insurance }}</div>
              <div>{{ item.inCount }}</div>
              <div>{{ item.diagnosis }}</div>
              <div>{{ item.allergy }}</div>
              <div>{{ item.type }}</div>
            </div>
          </div></el-col
        >
      </el-row>
      <!--病人卡片-->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, toRefs, ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
// formInline
const formInline = reactive({
  user: '111',
  region: ''
});
// 定义一个带数据的userList
const userList = reactive([
  {
    background: ' #409eff',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#67C23A',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#F56C6C',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#E6A23C',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#67C23A',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#909399',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: ' #409eff',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: ' #409eff',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  },
  {
    background: '#F56C6C',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    sex: '男/45岁',
    keshi: '骨科',
    inTime: '2022-09-09',
    doctor: '李时珍',
    id: '2014769',
    insurance: '商业医疗保险',
    inCount: '住院：21天 2次',
    diagnosis: '诊断：高血压Ⅲ期',
    allergy: '头孢类(+):基 (甲)注射用头孢唑林钠;花粉类(+):白色玫瑰花'
  }
]);
</script>
<style scoped lang="scss">
.bedInfoList {
  height: calc(100% - 77px);
  .content {
    height: calc(100% - 77px);
    width: 100%;
    :deep(.el-card__body) {
      padding: 0;
    }
    .person {
      display: flex;
      min-width: 200px;
      margin-bottom: 20px;
      cursor: pointer;
      font-size: 14px;
      border-radius: 10px;
      .userInfo {
        width: 110px;
        color: #fff;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 8px;
        div {
          margin-bottom: 4px;
        }
        .name {
          font-size: 16px;
          font-weight: bold;
        }
      }
      .otherInfo {
        background: #fff;
        color: #333;
        width: calc(100% - 110px);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.5);
        padding: 8px;
        div {
          margin-bottom: 4px;
        }
        .idTag {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ebeef5;
          .id {
            font-weight: bold;
            font-size: 18px;
          }
          .tsgs {
            display: flex;
            .tag {
              width: 22px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              border-radius: 2px;
              margin-right: 4px;
            }
            .orangeColor {
              background: #fbebd2;
              color: #ea9a22;
            }
            .blueColor {
              background: #d4eeef;
              color: #28abb1;
            }
            .redColor {
              background: #f4cdcd;
              color: #c60909;
            }
            .greenColor {
              background: #e1f0d9;
              color: #69b540;
            }
          }
        }
      }
    }
    // 0.2秒后阴影变化
    .person:hover {
      box-shadow: 4px 4px 16px 2px rgb(0 0 0 / 30%);
      transition: box-shadow 0.3s;
    }
  }
}
</style>
