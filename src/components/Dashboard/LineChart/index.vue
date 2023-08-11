<template>
  <div class="line-chart-container mb-5">
    <Card>
      <div class="card-top text-center rounded-md">
        <div class="card-lis p-4 h-full">
          <div class="grid grid-cols-3 gap-4 w-full h-full">
            <CardItem v-for="(item, index) in dataLineChart" :key="index" :class="background(item.key)">
              <LinearChart
                class="rounded-md"
                :backgroundColor="item.backgroundColor"
                :dataLine="item.dataLineChart"
                :optionsLine="optionsLineChart"
                :dataInfoLine="item.dataInfoLineChart"
              />
            </CardItem>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import CardItem from "@/components/Card/CardItem.vue";
import LinearChart from "./LinearChart.vue";
import * as chartConfig from "@/constants/chart";
import { ref } from "vue";

const dataLineChart = ref(chartConfig.dataLine);
const optionsLineChart = ref(chartConfig.optionsLine);

const background = (valueKey: string) => {
  switch (valueKey) {
    case "first":
      return "card-first";
    case "second":
      return "card-second";
    default:
      return "card-third";
  }
};
</script>

<style lang="scss" scoped>
.card-first {
  background: rgb(179, 208, 72);
  background: linear-gradient(
    90deg,
    rgba(179, 208, 72, 1) 0%,
    rgba(37, 151, 35, 1) 41%,
    rgba(33, 223, 194, 0.6629245448179272) 100%
  );
}
.card-second {
  background: rgb(219, 77, 32);
  background: linear-gradient(
    90deg,
    rgba(219, 77, 32, 1) 0%,
    rgba(197, 197, 41, 1) 51%,
    rgba(223, 222, 33, 0.8477984943977591) 100%
  );
}
.card-third {
  background: rgb(151, 150, 224);
  background: linear-gradient(
    90deg,
    rgba(151, 150, 224, 1) 0%,
    rgba(88, 141, 226, 1) 54%,
    rgba(33, 223, 130, 0.8477984943977591) 100%
  );
}
</style>
