<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonFab, IonFabButton, IonTitle, IonToolbar, IonTabBar } from '@ionic/vue';
import { IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import {
    camera,
    trash,
    close,
    compass,
    chatbubbles,
    notifications,
    person,
    personAddOutline,
    home,
    pieChart
} from 'ionicons/icons';
</script>

<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="budget" href="/tabs/budget">
            <ion-icon :icon="pieChart" />
            <ion-label>Budget</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="home"/>
            <ion-label>Home</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="profile" href="/tabs/profile">
            <ion-icon :icon="person"/>
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>

<style scoped>

</style>