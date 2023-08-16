<template>
  <v-btn size="x-large" class="text-red">
    <input type="file" @change="handleChange" />
  </v-btn>
  <img v-if="url" :src="url" />
</template>

<script setup lang="ts">
import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage, useStorageFile } from "vuefire";
import { v4 as uuidv4 } from "uuid";

const storage = useFirebaseStorage();
const mountainFileRef = storageRef(storage, `images/${uuidv4()}`);

const { url, upload } = useStorageFile(mountainFileRef);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleChange = async (e: any) => {
  try {
    await upload(e.target.files[0]);
    return url;
  } catch (error) {
    return error;
  }
};
</script>
