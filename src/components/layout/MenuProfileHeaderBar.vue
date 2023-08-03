<template>
  <div class="header-bar-modal" :class="modalProfileFlag ? 'display-modal-profile': 'hide-modal-profile'">
    <div class="header-bar-modal-menu">
      <v-list v-for="menu in listMenuProfile" :key="menu.id">
        <v-list-item
          :title="menu.nameMenu"
          :value="menu.nameMenu"
          :prepend-icon="menu.icon"
          :class="{ 'active-menu' : menu.id === idMenuProfile }"
          @click="handleMenu(menu)"
        >
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import router from "../../router";
import { MenuListProfile } from "../../types/layout";
import { listNameMenuProfile } from "../../constants/layout";

defineProps({
  modalProfileFlag: {
    type: Boolean,
    default: false
  }
})
const idMenuProfile = ref<number>(0)
const listMenuProfile = ref<MenuListProfile[]>(listNameMenuProfile)

const handleMenu = (menuProfile: MenuListProfile) => {
  idMenuProfile.value = menuProfile.id
  if (menuProfile.path) {
    router.push(menuProfile.path)
  }
}
</script>
