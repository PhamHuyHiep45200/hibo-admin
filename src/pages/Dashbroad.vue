<template>
  <v-btn size="x-large" @click="redirectUser" class="text-red">
    redirect User
  </v-btn>
</template>

<script setup lang="ts">
import router from "../router";

const redirectUser = () => {
  router.push("/user");
};
</script>
