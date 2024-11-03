<template>
  <ion-page>
    <PageHeader name="Sugn up" :canGoBack="true"/>
    <ion-content>
      <div
        class="bg-surface-50 dark:bg-surface-950 px-5 py-10 md:px-12 lg:px-20 h-full"
      >
        <div
          class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto"
        >
          <div class="text-center mb-8">

            <div
              class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4"
            >
              Create your account
            </div>
          </div>
            <label
              for="name1"
              class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
              >Name</label
            >

            <InputGroup class="mb-4">
              <InputGroupAddon>
                <i class="pi pi-user-edit"></i>
              </InputGroupAddon>
              <InputText
                id="name1"
                type="text"
                placeholder="Name"
                class="w-full mb-4"
              />
            </InputGroup>

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
                fluid
              >
                <template #footer>
                  <Divider />
                  <ul class="pl-2 ml-2 my-0 leading-normal">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </Password>
            </InputGroup>

            <InputGroup class="mb-4">
              <InputGroupAddon>
                <i class="pi pi-lock"></i>
              </InputGroupAddon>
              <Password
                v-model="passwordRepeat"
                toggleMask
                class="mb-4"                
                placeholder="Confirm password"
                fluid
              />
            </InputGroup>
            <RouterLink to="/tabs/home" class="font-medium no-underline text-primary text-right cursor-pointer w-full">
              <Button label="Sign Up" icon="pi pi-user" class="w-full" />
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
import PageHeader from "@/components/PageHeader.vue";

import Password from "primevue/password";

import { ref, watch } from "vue";

const checked1 = ref(true);
const password = ref<string>();
const passwordRepeat = ref<string>();

watch(password, (val) => console.log(val));
</script>
