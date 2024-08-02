<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped lang="scss">
h2{
  color: #000;
  font-size: 64px;
  font-weight: 700;
}
@media screen and (max-width: 1200px){
  h2{
    font-size: 42px;
  }
}
</style>