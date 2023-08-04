<template>
  <div class="header-container">
    <div class="header-container-menu p-6 flex justify-end">
      <MessageAndNotify />
      <ProfileHeader />

    </div>
  </div>
</template>

<script setup lang="ts">
import MessageAndNotify from "./MessageAndNotify.vue";
import ProfileHeader from "./ProfileHeader.vue"
</script>
