<script setup lang="ts">
import Chip from 'primevue/chip';
import ProgressBar from 'primevue/progressbar';
</script>

<template>
  <div class="flex flex-col justify-between bg-surface-0 dark:bg-surface-900 shadow p-3 rounded-2xl m-3 space-y-3">
    <div>
      <Chip>
        <span class="bg-primary text-primary-contrast rounded-full w-3 h-3 flex items-center justify-center"/>
        <span class="mr-2 text-sm">Шоппинг</span>
      </Chip>
    </div>
    <span class="text-2xl">Осталось $54</span>
    <ProgressBar :value="50" :show-value="false" class="!h-3"></ProgressBar>
    <span class="text-gray-500">$500 из $1000</span>
  </div>

  <div class="flex flex-col justify-between bg-surface-0 dark:bg-surface-900 shadow p-3 rounded-2xl m-3 space-y-3 ">
    <div>
      <Chip>
        <span class="bg-blue-500 text-primary-contrast rounded-full w-3 h-3 flex items-center justify-center"/>
        <span class="mr-2 text-sm">Шоппинг</span>
      </Chip>
    </div>
    <span class="text-2xl">Осталось $0</span>
    <ProgressBar :value="150" :show-value="false" class="!h-3 !text-blue-500" pt:value:class="!bg-blue-500"></ProgressBar>
    <span class="text-gray-500">$1500 из $1000</span>
    <span class="text-red-500">Вы превысили лимит</span>
  </div>
</template>
