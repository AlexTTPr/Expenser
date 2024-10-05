<script lang="ts" setup>
import BalanceInfo from '@/classes/BalanceInfo';
import Chart from 'primevue/chart';
import { computed, ref } from 'vue';

interface BalanceChartProps {
    values: BalanceInfo[]
}


const props = defineProps<BalanceChartProps>();

const chartData = computed(() => {
    return {
        labels: props.values.map((val) => val.date),
        datasets: [
            {
                label: 'Balance',
                data: props.values.map((val) => val.sum),
                fill: true,
                pointRadius: 0
            }
        ]
    }
});



const chartOptions = {
    options: {
        tension: 1,
        elements: {
            point: {
                radius: 0
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    },
    scales: {
        x: {
            ticks: {
                display: false,
            },
            display: false
        },
        y: {
            ticks: {
                display: false,
            },
            display: false
        }
    }
};
</script>

<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" />
    </div>
</template>