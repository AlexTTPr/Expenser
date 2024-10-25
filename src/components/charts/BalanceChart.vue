<template>
  <div>
    <v-chart class="w-full aspect-[3/2]" :option="option" autoresize/>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import { ref, watch } from "vue";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import BalanceInfo from "@/classes/BalanceInfo";
import { TooltipComponent } from "echarts/components";

export interface BalanceChartProps {
  BalanceInfos: BalanceInfo[];
}

const props = defineProps<BalanceChartProps>();

echarts.use([
  GridComponent,
  LineChart,
  SVGRenderer,
  UniversalTransition,
  TooltipComponent,
]);

const option = ref({
  xAxis: {
    data: props.BalanceInfos.map((val) => val.date),
    show: false,
    boundaryGap: false,
    axisLine: {
      show: false,
    },
  },
  yAxis: {
    show: false,
    boundaryGap: false,
    axisLine: {
      show: false,
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "",
  },
  series: [
    {
      color: "#7F3DFF",
      data: props.BalanceInfos.map((val) => val.sum),
      type: "line",
      smooth: 0.8,
      smoothMonotone: "x",
      showSymbol: true,
      symbolSize: 7,
      silent: true,
      emphasis: {
        disabled: true,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#7F3DFF",
          },
          {
            offset: 1,
            color: "rgb(0, 0, 0, 0)",
          },
        ]),
      },
      lineStyle: {
          width: 7
      },
      grid: {
        left: 10,
        containLabel: true,
        bottom: 10,
        top: 10,
        right: 30,
        animationEasingUpdate: "qubic",
      },
    },
  ],
});

watch(props.BalanceInfos, (vals) => {
  option.value.series[0].data = vals.map((val) => val.sum);
  option.value.xAxis.data = vals.map((val) => val.date);
});
</script>

<style scoped>

</style>
