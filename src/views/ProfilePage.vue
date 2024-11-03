<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import Avatar from 'primevue/avatar';

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="flex items-center">
        <div class="flex-none m-3">
            <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
        </div>
        <div class="flex-grow">
            <p class="break-all text-2xl">Александр</p>
        </div>
        <div class="flex-none mx-5">
            <i class="flex items-center pi pi-pencil"></i>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
