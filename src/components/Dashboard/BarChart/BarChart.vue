<template>
  <div class="bar-chart-container min-h-[320px]">
    <Bar :data="chartConfig.dataBar" :options="chartConfig.optionsBar" />
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "@/constants/chart";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);
</script>
