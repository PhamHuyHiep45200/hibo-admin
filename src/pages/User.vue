<template>
  <v-btn size="x-large" @click="redirectDashBroad"> redirect DashBroad </v-btn>
</template>

<script setup lang="ts">
import router from "../router";

const redirectDashBroad = () => {
  router.push("/");
};
</script>
