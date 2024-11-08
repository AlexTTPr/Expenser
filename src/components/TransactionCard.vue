<template>
  <div class="bg-surface-0 dark:bg-surface-900 shadow p-3 rounded-2xl flex h-28 m-3">
    <div
      class="flex items-center justify-center bg-blue-100 dark:bg-amber-100/30 rounded-3xl aspect-[1/1] mr-3"
    >
      <i
        class="pi pi-shopping-cart text-blue-500 dark:text-amber-200 !text-3xl"
      ></i>
    </div>
    <div class="flex flex-col justify-between w-full py-2">
      <div class="flex justify-between">
        <span class="text-xl">Шоппинг</span>
        <span class="text-xl text-red-500">-$100</span>
      </div>
      <div class="flex justify-between">
        <span>Продукты</span>
        <span>20:00</span>
      </div>
    </div>
  </div>
 
  <!---->
  <div class="bg-surface-0 dark:bg-surface-900 shadow p-3 rounded-2xl flex h-28 m-3">
    <div
      class="flex items-center justify-center bg-blue-100 dark:bg-violet-400/30 rounded-3xl aspect-[1/1] mr-3"
    >
      <i
        class="pi pi-clipboard text-blue-500 dark:text-violet-200 !text-3xl"
      ></i>
    </div>
    <div class="flex flex-col justify-between w-full py-2">
      <div class="flex justify-between">
        <span class="text-xl">Подписка</span>
        <span class="text-xl text-red-500">-$80</span>
      </div>
      <div class="flex justify-between">
        <span>Netfilx</span>
        <span>12:30</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Card from "primevue/card";
import Button from "primevue/button";
import Tag from "primevue/tag";
</script>
