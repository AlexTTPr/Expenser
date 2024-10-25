<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import DatePicker from 'primevue/datepicker';
import BalanceChart from '@/components/charts/BalanceChart.vue';
import BalanceInfo from '@/classes/BalanceInfo';
import Button from 'primevue/button';
import TransactionCard from '@/components/TransactionCard.vue';


const time = ref();

/*const chartData = ref();
const chartOptions = ref();

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        tension: 0.4,
        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
        backgroundColor: documentStyle.getPropertyValue('--p-cyan-100')
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}*/

const click = () => {
  if(Math.random() < 0.5)
    values.push({date: new Date(), sum: Math.random()})
  else
    values.pop();
    console.log('clicked: ' + values[values.length - 1].date);
};

let values = reactive<BalanceInfo[]>([]);
const currentDay = new Date().getTime();
for(let i = 0; i < 12; i++){
  values.push({date: new Date(currentDay + 1000*60*60*24*i), sum: Math.random()})
}

const chartData = [
        { name: 'A', value: 30 },
        { name: 'B', value: 80 },
        { name: 'C', value: 45 },
        { name: 'D', value: 60 },
        { name: 'E', value: 20 },
        { name: 'F', value: 90 },
        { name: 'G', value: 55 }
      ];

</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title>Home Page</ion-title>
      <DatePicker v-model="time" id="datepicker-12h" showTime hourFormat="24" fluid />

      <Button @click="click" />

      <!--<div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions"/>
      </div>-->
      <BalanceChart :BalanceInfos="values"/>


      <TransactionCard>
        
      </TransactionCard>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
