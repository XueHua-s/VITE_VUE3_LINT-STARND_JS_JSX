<template>
  <div>{{ counter.count }}</div>
  <button
  @click="countAdd">递增</button>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const countAdd = () => {
  counter.increment()
}
</script>
<style lang="scss" scoped>
.a {
  .b {
    color: #fff;
  }
}
</style>
