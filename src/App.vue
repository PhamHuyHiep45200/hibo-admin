<script setup lang="ts">
import LayoutMain from "./components/layout/index.vue"
</script>

<template>
  <LayoutMain>
    <template #router-view>
      <router-view />
    </template>
  </LayoutMain>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>

