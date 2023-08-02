<template>
    <div id="main" class="layout-container">
        <v-layout class="rounded rounded-md">
            <v-navigation-drawer
              :rail="rail"
            >
              <NavBar @change="handleDisableFlagNav"/>
            </v-navigation-drawer>

            <v-app-bar class="overflow-visible">
                <HeaderBar />
            </v-app-bar>

            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <slot name="router-view"></slot>
            </v-main>
        </v-layout>
    </div>
</template>

<script setup lang="ts">
import HeaderBar from "./HeaderBar.vue"
import NavBar from "./NavBar.vue"
import { ref } from "vue";

const rail = ref<boolean>(false)
const handleDisableFlagNav = (value) => {
  rail.value = value
}
</script>
