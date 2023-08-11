<template>
  <div class="bar-chart-container">
    <Doughnut :data="chartConfig.dataPie" :options="chartConfig.optionsPie" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "@/constants/chart";

ChartJS.register(ArcElement, Tooltip, Legend);
</script>
