<template>
  <div class="navbar-container">
    <div :class="{ 'display-none': disableFlagOpenNav }">
      <div class="navbar-container-logo py-6 px-4 flex justify-between items-center">
        <div class="logo-img">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="cursor-pointer navbar-container-close" @click="handleOpenNav">
          <v-icon v-if="!disableFlagOpenNav" icon="icon-display-nav mdi-hand-pointing-left"></v-icon>
        </div>
      </div>
      <div class="navbar-container-menu">
        <MenuNavBar />
      </div>
    </div>
    <div @click="handleOpenNav" class="cursor-pointer navbar-container-open">
      <v-icon v-if="disableFlagOpenNav" icon="icon-display-nav mdi-hand-pointing-right"></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuNavBar from "./MenuNavBar.vue";
import { ref } from "vue";

const emit = defineEmits(["change", "update"]);

const disableFlagOpenNav = ref<boolean>(false);

const handleOpenNav = () => {
  disableFlagOpenNav.value = !disableFlagOpenNav.value;
  emit("change", disableFlagOpenNav.value);
};
</script>
