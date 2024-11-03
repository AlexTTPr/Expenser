<template>
  <ion-header>
    <div class="flex h-10">
      <div
        v-if="props.canGoBack"
        class="flex items-center justify-center cursor-pointer w-10"
        @click="$router.back()"
      >
        <i class="pi pi-arrow-left"></i>
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="!text-xl">{{ props.name }}</div>
      </div>
    </div>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import Button from "primevue/button";

export interface PageHeaderProps {
  name: string;
  canGoBack?: Boolean;
}

const props = defineProps<PageHeaderProps>();
</script>
