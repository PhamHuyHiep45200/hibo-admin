<template>
  <div v-for="menu in listMenuHeaderBar" :key="menu.id">
    <div
      class="header-container-mess-noti header-container-border cursor-pointer ml-6 flex text-center items-center justify-center"
    >
      <v-badge :content="menu.numOf" color="error">
        <v-icon
          :class="{ 'ring-animation': menu.nameMenu === 'Notify' }"
          :icon="menu.icon"
        ></v-icon>
      </v-badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listMenuHeaderBar } from "@/constants/layout";
</script>
