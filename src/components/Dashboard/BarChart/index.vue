<template>
  <div class="bar-chart">
    <Card>
      <div class="card-top text-center rounded-md">
        <div class="card-lis p-4 min-h-[320px]">
          <div class="w-full min-h-[320px]">
            <BarChart />
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "../../Card/index.vue";
import BarChart from "./BarChart.vue";
</script>

<style scoped></style>
