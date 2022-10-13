import { defineStore } from 'pinia';
// defineStore( ) 方法的第一个参数：相当于为容器起一个名字。注意：这里的名字必须唯一，不能重复。
export const user = defineStore('user', {
  state: () => {
    return {
      num: 1,
    };
  },
  getters: {},
  actions: {},
});
