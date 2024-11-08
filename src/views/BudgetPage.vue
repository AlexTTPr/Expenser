<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import BudgetGoal from "@/components/BudgetGoal.vue";
import Button from "primevue/button";
</script>

<template>
  <ion-page>
    <ion-content>
      <BudgetGoal />
      <div class="flex items-center justify-center">
        <Button class="w-[15rem]">Добавить цель</Button>
      </div>
    </ion-content>
  </ion-page>
</template>
