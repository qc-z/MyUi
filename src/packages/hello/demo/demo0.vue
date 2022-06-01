<template>
  <a-pagination
    v-model:current="current"
    :total="50"
    show-less-items
    @change="change"
  />
</template>
<script setup>
const current = ref(2)
const change = (val) => {
  console.log(val)
  current.value = val
}
</script>
