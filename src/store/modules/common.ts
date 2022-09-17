import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count++;
    },
  },
});
