<template>
  <div class="chart h-full">
    <ChartCardTop />
    <div class="grid grid-cols-3 gap-4 w-full">
      <div class="col-span-2">
        <BarChartContainer />
      </div>
      <div class="h-full">
        <PieChartContainer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartCardTop from "@/components/Dashboard/LineChart/index.vue";
import BarChartContainer from "@/components/Dashboard/BarChart/index.vue";
import PieChartContainer from "@/components/Dashboard/PieChart/index.vue";
</script>
