<template>
  <div class="bg-surface-0 dark:bg-surface-900 shadow p-3 rounded-2xl flex h-28 m-3">
    <div
      class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/30 rounded-3xl aspect-[1/1] mr-3"
    >
      <i
        class="pi pi-shopping-cart text-blue-500 dark:text-blue-200 !text-3xl"
      ></i>
    </div>
    <div class="flex flex-col justify-between w-full py-2">
      <div class="flex justify-between">
        <span class="text-xl">asd1</span>
        <span class="text-xl text-red-500">asd2</span>
      </div>
      <div class="flex justify-between">
        <span>asd3</span>
        <span>asd4</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Card from "primevue/card";
import Button from "primevue/button";
import Tag from "primevue/tag";
</script>
