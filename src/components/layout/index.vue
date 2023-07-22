<template>
  <div id="main" class="layout-container">
    <v-layout class="rounded-md">
      <v-navigation-drawer :rail="rail">
        <NavBar @change="handleDisableFlagNav" />
      </v-navigation-drawer>

      <v-app-bar class="overflow-visible h-20 header-bar">
        <HeaderBar />
      </v-app-bar>
      <v-main class="h-[calc(100vh-120px)] w-[calc(100vw)] mt-[50px] max-w-none">
        <slot name="router-view"></slot>
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "./HeaderBar.vue";
import NavBar from "./NavBar.vue";
import { ref } from "vue";

const rail = ref<boolean>(false);

const handleDisableFlagNav = (value: boolean) => {
  rail.value = value;
};
</script>
