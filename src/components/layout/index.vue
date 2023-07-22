<template>
  <div id="main" class="layout-container bg-[#F1F5F9]">
    <v-layout class="rounded-md">
      <v-navigation-drawer :rail="rail">
        <NavBar @change="handleDisableFlagNav" />
      </v-navigation-drawer>

      <v-app-bar class="overflow-visible header-bar">
        <HeaderBar />
      </v-app-bar>
      <v-main class="h-full">
        <div class="p-6 h-full">
          <slot name="router-view"></slot>
        </div>
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
