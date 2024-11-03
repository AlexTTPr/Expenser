<template>
  <ion-page>
    <PageHeader name="Sign in"/>
    <ion-content>
      <div
        class="bg-surface-50 dark:bg-surface-950 px-5 py-10 md:px-12 lg:px-20 h-full"
      >
        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto"
        >
          <div class="text-center mb-8">
            <svg
              class="mb-4 mx-auto fill-surface-600 dark:fill-surface-200 h-16"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
              />
            </svg>

            <div
              class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4"
            >
              Welcome to Expenser
            </div>
            <span
              class="text-surface-600 dark:text-surface-200 font-medium leading-normal"
              >Don't have an account?</span
            >
            <RouterLink
              to="/signup"
              class="font-medium underline ml-2 text-primary text-right cursor-pointer"
              >Create!</RouterLink
            >
          </div>

          <div>
            <label
              for="email1"
              class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
              >Email</label
            >

            <InputGroup class="mb-4">
              <InputGroupAddon>
                <i class="pi pi-envelope"></i>
              </InputGroupAddon>
              <InputText
                id="email1"
                type="text"
                placeholder="Email address"
                class="w-full mb-4"
              />
            </InputGroup>

            <label
              for="password1"
              class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
              >Password</label
            >

            <InputGroup class="mb-4">
              <InputGroupAddon>
                <i class="pi pi-lock"></i>
              </InputGroupAddon>
              <Password
                v-model="password"
                toggleMask
                class="mb-4"
                placeholder="Password"
                :feedback="false"
                fluid
              />
            </InputGroup>

            <div class="flex items-center justify-between mb-12">
              <div class="flex items-center">
                <Checkbox
                  id="rememberme1"
                  v-model="checked1"
                  :binary="true"
                  class="mr-2"
                />
                <label for="rememberme1">Remember me</label>
              </div>
              <!--<RouterLink
                to="/restore"
                class="font-medium underline ml-2 text-primary text-right cursor-pointer"
                >Forgot password?</RouterLink
              >-->
            </div>

            <RouterLink
              to="/tabs/home"
              class="font-medium underline text-primary text-right cursor-pointer w-full"
            >
              <Button label="Sign In" icon="pi pi-user" class="w-full" />
            </RouterLink>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
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
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Divider from "primevue/divider";

import Password from "primevue/password";

import { ref, watch } from "vue";
import PageHeader from "@/components/PageHeader.vue";

const checked1 = ref(true);
const password = ref<string>("");

watch(password, (val) => console.log(val));
</script>
