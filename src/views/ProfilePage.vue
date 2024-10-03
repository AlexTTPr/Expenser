<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

</script>

<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-title>Profile page</ion-title>
            {{ Math.random() }}
        </ion-content>
    </ion-page>
</template>