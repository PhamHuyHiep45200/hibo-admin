<template>
  <div class="bar-chart h-full">
    <Card class="h-full flex items-center justify-center">
      <PieChart />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "../../Card/index.vue";
import PieChart from "./PieChart.vue";
</script>

<style scoped></style>
