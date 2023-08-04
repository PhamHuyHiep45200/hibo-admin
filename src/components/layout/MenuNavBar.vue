<template>
  <div class="menu-nav">
    <div
      class="menu-nav-list"
      v-for="(menu, index) in listMenuNavBar"
      :key="index"
    >
      <v-list>
        <v-list-item
          :title="menu.nameMenu"
          class="menu-nav-title"
        ></v-list-item>
      </v-list>
      <div v-for="menuChild in menu.children" :key="menuChild.id">
        <v-list class="p-0">
          <v-list-group :value="menuChild.nameMenu">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="menuChild.nameMenu"
                :prepend-icon="menuChild.icon"
                @click="handleActiveMenu(menuChild)"
                class="px-2.5 py-3 text-sm menu-child"
                :class="[
                  { 'display-none-icon': !menuChild.children },
                  { 'active-menu': menuChild.id === idActive },
                ]"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="menuChildChild in menuChild.children"
              :key="menuChildChild.id"
              :title="menuChildChild.nameMenu"
              :prepend-icon="menuChildChild.icon"
              :value="menuChildChild.nameMenu"
              @click="handleActiveMenu(menuChildChild)"
              class="child-child"
              :class="[{ 'active-menu': menuChildChild.id === idActive }]"
            ></v-list-item>
          </v-list-group>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listNameMenuNav } from "../../constants/layout";
import { ref } from "vue";
import { NameMenuNavType } from "../../types/layout";
import router from "../../router";

const listMenuNavBar = ref<NameMenuNavType[]>(listNameMenuNav)
const idActive = ref<number>(0)

const handleActiveMenu = (menu: NameMenuNavType) => {
  idActive.value = menu.id;
  if (menu.path) {
    router.push(menu.path);
  }
};
</script>

