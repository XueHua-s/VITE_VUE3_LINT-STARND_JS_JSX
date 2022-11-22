import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: ref(0)
  }),
  actions: {
    increment () {
      this.count++
    }
  }
})
