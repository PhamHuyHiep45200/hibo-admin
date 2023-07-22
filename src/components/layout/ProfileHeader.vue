<template>
  <div class="profile select-none" ref="modalRef">
    <div
      @click="handleOpenMenuHeader"
      class="header-container-profile cursor-pointer ml-6 flex align-center justify-between"
    >
      <div class="profile-img-name flex align-center justify-between">
        <div class="profile-img">
          <img :src="profileUser.imagePath" alt="avatar-user" class="rounded-2xl object-cover" />
        </div>
        <div class="profile-name">
          {{ profileUser.nameUser }}
        </div>
      </div>
      <div class="profile-icon">
        <v-icon icon="mdi-chevron-down"></v-icon>
      </div>
    </div>
    <MenuHeaderBar :modalProfileFlag="modalFlag" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { profileUser } from "@/constants/layout";
import MenuHeaderBar from "./MenuHeaderBar.vue";
import { ref, computed, onMounted } from "vue";

const store = useStore();
const modalRef = ref(null);
const modalFlag = computed(() => store.getters.getVisibleFlagModal);

const handleOpenMenuHeader = () => {
  store.dispatch("handleOpenMenuHeader", !modalFlag.value);
};
onMounted(() => {
  document.addEventListener("click", hideModalProfile);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hideModalProfile = (event: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (modalRef.value && !(modalRef.value as any)?.contains(event.target)) {
    store.dispatch("handleOpenMenuHeader", false);
  }
};
</script>
