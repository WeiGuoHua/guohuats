<template>
  <div class="login">
    <div class="logo"></div>
    <div class="login-wrapper">
      <div class="login-box">
        <div class="form-container">
          <div class="title">快速开发平台</div>
          <el-form
            :model="loginInfo"
            ref="formRef"
          >
            <el-form-item
              label=""
              prop="userName"
              :rules="[{ required: true, message: '请输入用户名' }]"
            >
              <el-input
                v-model="loginInfo.userName"
                type="text"
                placeholder="用户名"
                clearable
              >
                <template #prefix>
                  <el-icon :size="18"><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item
              label=""
              prop="pwd"
              :rules="[{ required: true, message: '请输入密码' }]"
            >
              <el-input
                v-model.trim="loginInfo.pwd"
                type="text"
                placeholder="密码"
                oncopy="return false"
                onpaste="return false"
                oncut="return false"
                auto-complete="off"
                class="password-wrapper"
                clearable
              >
                <template #prefix>
                  <el-icon :size="18"><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item
              label=""
              prop="orgId"
            >
              <el-select
                v-model="loginInfo.orgId"
                placeholder="机构"
                clearable
              >
                <template #prefix>
                  <el-icon :size="18"><OfficeBuilding /></el-icon>
                </template>
                <el-option
                  v-for="item in loginInfo.orgList"
                  :key="item.id"
                  :label="item.orgName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-button
            :loading="isLoading"
            @click="login(formRef)"
            type="primary"
            >登 录 (Enter)</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { FormInstance } from 'element-plus';
const router = useRouter();
const formRef = ref<FormInstance>();
const loginInfo = reactive({
  userName: '',
  pwd: '',
  orgList: [{ id: 1, orgName: '仁济医院' }]
});
let isLoading = ref(false);


const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  isLoading.value = true;
  formEl.validate((valid) => {
    if (valid) {
      router.push('./index');
      isLoading.value = false;
    } else {
      isLoading.value = false;
      return false;
    }
  });
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  .login-wrapper {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    height: 100%;
    background: url('../../../src/assets/img/login/login-bg.png') no-repeat;
    background-size: cover;
    background-position: 50%;
    .login-box {
      display: flex;
      height: 370px;
      width: 350px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.3);
      margin-right: 16%;
      .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .title {
          font-weight: 400;
          font-size: 20px;
          color: var(--el-color-primary);
          margin-bottom: 16px;
        }
        .el-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          .el-form-item {
            margin-right: 0;
            margin-bottom: 32px;
            .el-input,
            .el-select {
              width: 290px;
              height: 36px;
              :deep(.el-input__inner) {
                height: 36px;
                line-height: 44px;
              }
              :deep(.el-input__prefix) {
                width: 26px;
              }
            }
            .el-select {
              :deep(.el-input__suffix-inner) {
                display: inline-flex;
                height: 100%;
              }
            }
            :deep(.password-wrapper input) {
              -webkit-text-security: disc;
              ime-mode: disabled;
            }
          }
        }
        .el-button {
          width: 290px;
          height: 40px;
          margin-top: 0px;
        }
      }
    }
  }
}
</style>
