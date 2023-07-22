<template>
  <div class="linear-chart">
    <div class="px-4 py-[18px] inline-flex">
      <div class="h-12 w-12">
        <Line :data="dataLine" :options="optionsLine" />
      </div>
      <div class="text-slate-900 flex-1 text-left ml-6">
        <div class="text-[14px]">{{ dataInfoLine?.title }}</div>
        <div class="text-[18px] font-bold">{{ dataInfoLine?.info }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "vue-chartjs";

defineProps({
  dataLine: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array as () => any,
    default: () => [],
  },
  optionsLine: {
    type: Object,
    default: Object,
  },
  dataInfoLine: {
    type: Object,
    default: Object,
  },
  backgroundColor: {
    type: String,
    default: "",
  },
});

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
</script>
