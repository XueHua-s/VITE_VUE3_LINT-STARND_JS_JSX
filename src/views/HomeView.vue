<template>
  <div>{{ counter.count }}</div>
  <button
  @click="countAdd">递增</button>
  <Render add="123" />
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import Render from '@/views/Render'
const counter = useCounterStore()
const countAdd = () => {
  counter.increment()
}
</script>
<style lang="scss" scoped>
.red {
  background-color: red;
  width: 100vw;
  height: 300px;
}
</style>
