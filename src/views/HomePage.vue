<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import DatePicker from 'primevue/datepicker';
import BalanceChart from '@/components/charts/BalanceChart.vue';
import BalanceInfo from '@/classes/BalanceInfo';
import Button from 'primevue/button';
import TransactionCard from '@/components/TransactionCard.vue';

const time = ref();

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

</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title>Home Page</ion-title>
      <DatePicker v-model="time" id="datepicker-12h" showTime hourFormat="24" fluid />

      <Button @click="click" />

      <TransactionCard/>

      <!--<div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions"/>
      </div>-->

      <BalanceChart :BalanceInfos="values"/>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
