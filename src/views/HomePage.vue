<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import DatePicker from 'primevue/datepicker';
import BalanceChart from '@/components/charts/BalanceChart.vue';
import BalanceInfo from '@/classes/BalanceInfo';
import Button from 'primevue/button';
import TransactionCard from '@/components/TransactionCard.vue';
import Avatar from 'primevue/avatar';
import Select from 'primevue/select';

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
    <ion-content>
      <ion-header class="flex justify-between items-center py-1 px-3">
        <RouterLink to="/signin">
          <Avatar icon="pi pi-user" size="normal" shape="circle"></Avatar>
        </RouterLink>
        <Select/>
        <i class="pi pi-bell"/>
      </ion-header>

      <div class="flex flex-col items-center my-3">
        <span class="text-sm">Баланс</span>
        <span class="text-5xl">$9400</span>

        <div class="flex flex-row justify-between space-x-1">

          <div class="flex flex-row justify-between bg-green-500 rounded-3xl p-3 h-20">
            <div class="bg-white aspect-square flex items-center justify-center rounded-2xl mr-3">
              <i class="pi pi-sort-down-fill text-green-500 !text-4xl"/>
            </div>
            <div class="flex flex-col justify-center">
              <span class="">Доходы</span>
              <span class="text-3xl">$5000</span>
            </div>
          </div>

          <div class="flex flex-row justify-between bg-red-500 rounded-3xl p-3 h-20">
            <div class="bg-white aspect-square flex items-center justify-center rounded-2xl mr-3">
              <i class="pi pi-sort-up-fill text-red-500 !text-4xl"/>
            </div>
            <div class="flex flex-col justify-center">
              <span class="">Расходы</span>
              <span class="text-3xl">$1200</span>
            </div>
          </div>
        </div>

      </div>

      <div>
        <span class="text-xl m-3">График баланса</span>
        <Button @click="click">Add/Remove value</Button>
        <BalanceChart :BalanceInfos="values"/>
      </div>

      <div>
        <span class="text-xl m-3">Последние транзакции</span>
        <TransactionCard/>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
