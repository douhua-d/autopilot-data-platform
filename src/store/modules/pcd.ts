import { defineStore } from 'pinia';
import { union } from 'lodash';

export const usePcdStore = defineStore("pcd", {
  state: () => ({
    count: 1,
    pcdIDArr: [] // ID 的组成 taskID (如82878) + 第几帧(从1开始)  例如['828781', '828782', '828783']
  }),
  actions: {
    addPcdID(value) {
      this.pcdIDArr = union([...this.pcdIDArr, value]);
    },
    resetPcdIDArr() {
      this.pcdIDArr = [];
    }
  }
});
