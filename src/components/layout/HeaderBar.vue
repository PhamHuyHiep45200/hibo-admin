<template>
  <div class="header-container">
    <div class="header-container-profile">
      <div @click="handleOpenMenuProfile" class="cursor-pointer">
        Open
      </div>
      <MenuProfileHeaderBar :modalProfileFlag="modalFlag"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MenuProfileHeaderBar from "./MenuProfileHeaderBar.vue";

const modalFlag = ref<boolean>(false)

const handleOpenMenuProfile = () => {
  modalFlag.value = !modalFlag.value
}
</script>
